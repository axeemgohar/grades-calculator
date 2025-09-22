import { useState, useEffect } from 'react';
import { countryData } from '@/utils/countryData';

const useLocationBasedTerms = () => {
  const [detectedCountry, setDetectedCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentTerms, setCurrentTerms] = useState(getDefaultTerms());
  const [showExample, setShowExample] = useState(false);

  // Fetch user location on mount (background, non-blocking)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipinfo.io?token=44f0c94b5d4ad0');
        const data = await response.json();
        const detectedCountryName = getCountryNameByCode(data.country);

        if (detectedCountryName && countryData[detectedCountryName]) {
          setDetectedCountry(detectedCountryName);
          // Only update terms if no country is manually selected
          if (!selectedCountry) {
            setCurrentTerms(countryData[detectedCountryName].terms);
          }
        }
      } catch (error) {
        console.log('Location detection failed, using defaults');
      }
    };

    fetchLocation();
  }, []);

  // Handle country selection from dropdown
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (country && countryData[country]) {
      setCurrentTerms(countryData[country].terms);
      setShowExample(true);
    } else {
      // Reset to detected country terms or defaults
      setCurrentTerms(
        detectedCountry ? countryData[detectedCountry].terms : getDefaultTerms()
      );
      setShowExample(false);
    }
  };

  const getCurrentExample = () => {
    return selectedCountry && countryData[selectedCountry]
      ? countryData[selectedCountry].example
      : null;
  };

  return {
    currentTerms,
    showExample,
    selectedCountry,
    handleCountrySelect,
    getCurrentExample,
    detectedCountry,
  };
};

function getDefaultTerms() {
  return {
    semesterGPA: 'Semester GPA',
    semesterCredits: 'Credits',
    calculateCGPA: 'Calculate CGPA',
    addSemester: 'Add Semester',
    deleteSemester: 'Delete Semester',
    placeholderGPA: 'Semester {{n}} GPA',
    placeholderCredits: 'Semester {{n}} Credits',
    resultCGPA: 'Your CGPA Result',
    resultTotalSemesters: 'Total Semesters',
    resultTotalCredits: 'Total Credits',
  };
}

function getCountryNameByCode(code) {
  return Object.keys(countryData).find(
    (country) => countryData[country].code === code
  );
}

export default useLocationBasedTerms;

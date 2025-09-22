// services/locationService.js

import { findCountryByCode } from '@/utils/countryData';

export const detectUserLocation = async () => {
  try {
    const response = await fetch('https://api.country.is/');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.country) {
      const countryData = findCountryByCode(data.country);

      return {
        success: true,
        countryCode: data.country,
        countryName: countryData?.name || null,
        countryData: countryData || null,
        ip: data.ip,
      };
    }

    return {
      success: false,
      error: 'No country data returned',
    };
  } catch (error) {
    console.error('Location detection failed:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

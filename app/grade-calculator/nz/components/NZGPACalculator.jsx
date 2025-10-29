// components/NZGPACalculator.jsx
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  calculateNZGPA,
  gradePointsNZ,
} from '@/lib/calculations/new-zealand-gpa'; // New Logic File
import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult'; // Reference existing DisplayResult component
import useElementSize from '@/utils/useElementSize'; // Reference existing hook
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'; // Reference existing library
import printerLoader from '@/public/assets/loader/Printer-Loader.json'; // Reference existing asset
import { paperListSchemaNZ } from '@/lib/validationSchemas';

// Initial state for the course list, adapted to NZ terminology
const paperList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: '',
  grade: '',
  points: '', // Changed 'credits' to 'points'
}));

const NZGPACalculator = () => {
  const [papers, setPapers] = useState(paperList); // Changed 'courses' to 'papers'
  const [loader, setLoader] = useState(false);
  const [gpa, setGPA] = useState({
    score: 0,
    totalPapers: 0,
  });

  const { ref, height } = useElementSize(); // Custom Hook to calculate height

  // Add New Paper
  const addPaper = () => {
    setPapers((prevPapers) => [
      ...prevPapers,
      {
        id: prevPapers.length + 1,
        name: '',
        grade: '',
        points: '',
      },
    ]);
  };

  // Delete Paper
  const removePaper = () => {
    setPapers((prevPapers) => {
      if (prevPapers.length <= 1) return prevPapers;
      return prevPapers.slice(0, -1);
    });
  };

  // Hanlde Input Fields Values
  const updatePaper = (id, field, value) => {
    setPapers((prevPapers) =>
      prevPapers.map((paper) => {
        return paper.id === id ? { ...paper, [field]: value } : paper;
      })
    );
  };

  const calculateCurrentGPA = (event) => {
    event.preventDefault();
    // Assuming your validation schema can handle the 'points' field correctly
    const validation = paperListSchemaNZ.safeParse(papers);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(`Paper ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    // Use the New Zealand calculation logic
    const calculatedGPA = calculateNZGPA(papers);

    setGPA({
      score: calculatedGPA,
      totalPapers: papers.length,
    });
    setLoader(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setLoader(false);
    }, 3900);
  };

  const reCalculateGPA = () => {
    setGPA({
      score: 0,
      totalPapers: 0,
    });
  };

  // Separate Pass and Fail grades for logical display in the select dropdown
  const passingGrades = Object.keys(gradePointsNZ).slice(0, 9); // A+ to C-
  const failingGrades = Object.keys(gradePointsNZ).slice(9); // D, E, P, F, etc.

  return (
    <>
      {!gpa.score && !loader ? (
        <form onSubmit={calculateCurrentGPA}>
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-6 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">
                Paper Name (optional)
              </h4>{' '}
              {/* NZ Terminology */}
            </div>
            <div className="col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">Points / Credits</h4>{' '}
              {/* NZ Terminology */}
            </div>
            <div className="col-span-3 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Grade</h4>
            </div>
          </div>

          <div
            style={{
              height: height ? height + 'px' : 'auto',
              transition: 'height 0.3s ease-in-out',
              overflow: 'hidden',
            }}
          >
            <div ref={ref}>
              {papers.map((paper) => {
                // Changed 'course' to 'paper'
                return (
                  <div
                    className="grid grid-cols-12 border-b border-x border-indigo-500/50 transition-all duration-300 ease-in-out last:rounded-b"
                    key={paper.id}
                  >
                    <div className="col-span-6">
                      <label
                        htmlFor={'paper-name-' + paper.id}
                        className="sr-only"
                      >
                        Paper Name
                      </label>
                      <Input
                        type="text"
                        id={'paper-name-' + paper.id}
                        value={paper.name}
                        onChange={(e) =>
                          updatePaper(paper.id, 'name', e.target.value)
                        }
                        placeholder="e.g., MGMT 101" // More relevant example
                      />
                    </div>
                    <div className="col-span-3 border-x border-indigo-500/50">
                      <label htmlFor={'points-' + paper.id} className="sr-only">
                        Points
                      </label>
                      <Input
                        type="number"
                        onChange={
                          (e) => updatePaper(paper.id, 'points', e.target.value) // Changed 'credits' to 'points'
                        }
                        id={'points-' + paper.id}
                        value={paper.points}
                        placeholder="15" // Common NZ point value
                        min="0"
                      />
                    </div>
                    <div className="col-span-3">
                      <label htmlFor={'grade-' + paper.id} className="sr-only">
                        Grade
                      </label>
                      <Select
                        className=" shadow-none"
                        name={'grade-' + paper.id}
                        value={paper.grade}
                        onValueChange={(value) => {
                          updatePaper(paper.id, 'grade', value);
                        }}
                      >
                        <SelectTrigger
                          id={'grade-' + paper.id}
                          className="w-full rounded-none"
                        >
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Pass Grades (1.0 to 9.0)</SelectLabel>
                            {passingGrades.map((grade) => (
                              <SelectItem value={grade} key={grade}>
                                {grade}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel>
                              Fail/Ungraded Grades (0.0 or N/A)
                            </SelectLabel>
                            {failingGrades.map((grade) => (
                              <SelectItem value={grade} key={grade}>
                                {grade}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex gap-x-4 md:flex-row flex-col">
            <div className="flex gap-x-4 mb-4 max-md:gap-x-6">
              <Button
                className="text-primary border-primary text-sm hover:bg-indigo-50 hover:text-indigo-600 max-md:flex-1"
                variant="outline"
                onClick={addPaper} // Changed 'addCourse' to 'addPaper'
                type="button"
              >
                Add Paper {/* NZ Terminology */}
                <PlusSquare />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removePaper} // Changed 'removeCourse' to 'removePaper'
                disabled={papers.length <= 1}
              >
                Delete Paper <Trash2 />
              </Button>
            </div>
            <Button className=" flex-1" type="submit">
              Calculate GPA
            </Button>
          </div>
        </form>
      ) : gpa.score && loader ? (
        <Lottie
          animationData={printerLoader}
          play
          loop={false}
          className="h-72 max-md:h-64 max-sm:h-60"
        />
      ) : (
        // Assuming DisplayResult component can handle the NZ GPA format
        <DisplayResult onRecalculate={reCalculateGPA} gpa={gpa} />
      )}
    </>
  );
};
export default NZGPACalculator;

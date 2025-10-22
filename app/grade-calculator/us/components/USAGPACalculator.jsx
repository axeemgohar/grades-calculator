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
import { calculateGPA, gradePoints } from '@/lib/calculations/usa-gpa';
import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { courseListSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import useElementSize from '@/utils/useElementSize';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';

const courseList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: '',
  grade: '',
  credits: '',
  percentage: '',
}));
const USAGPACalculator = () => {
  const [courses, setCourses] = useState(courseList);
  const [loader, setLoader] = useState(false);
  const [gpa, setGPA] = useState({
    score: 0,
    totalCourses: 0,
  });

  const { ref, height } = useElementSize(); // Custom Hook to calculate height

  // Add New Course
  const addCourse = () => {
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        id: prevCourses.length + 1,
        name: '',
        grade: '',
        credits: '',
        percentage: '',
      },
    ]);
  };

  // Delete Course
  const removeCourse = () => {
    setCourses((prevCourses) => {
      if (prevCourses.length <= 1) return prevCourses;
      return prevCourses.slice(0, -1);
    });
  };

  // Hanlde Input Fields Values
  const updateCourse = (id, field, value) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        return course.id === id ? { ...course, [field]: value } : course;
      })
    );
  };

  const calculateCurrentGPA = (event) => {
    event.preventDefault();
    const validation = courseListSchema.safeParse(courses);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(`Course ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    const calculatedGPA = calculateGPA(courses);

    setGPA({
      score: calculatedGPA,
      totalCourses: courses.length,
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
      totalCourses: 0,
    });
  };

  return (
    <>
      {!gpa.score && !loader ? (
        <form onSubmit={calculateCurrentGPA}>
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-6 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Course Name</h4>
            </div>
            <div className="col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">Credits</h4>
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
              {courses.map((course) => {
                return (
                  <div
                    className="grid grid-cols-12 border-b border-x border-indigo-500/50  transition-all duration-300 ease-in-out last:rounded-b"
                    key={course.id}
                  >
                    <div className="col-span-6">
                      <label
                        htmlFor={'course-name-' + course.id}
                        className="sr-only"
                      >
                        Course Name
                      </label>
                      <Input
                        type="text"
                        id={'course-name-' + course.id}
                        value={course.name}
                        onChange={(e) =>
                          updateCourse(course.id, 'name', e.target.value)
                        }
                        placeholder="e.g., Intro to Psychology"
                      />
                    </div>
                    <div className="col-span-3 border-x  border-indigo-500/50">
                      <label
                        htmlFor={'credits-' + course.id}
                        className="sr-only"
                      >
                        Credits
                      </label>
                      <Input
                        type="number"
                        onChange={(e) =>
                          updateCourse(course.id, 'credits', e.target.value)
                        }
                        id={'credits-' + course.id}
                        value={course.credits}
                        placeholder="3"
                        min="0"
                      />
                    </div>
                    <div className="col-span-3">
                      <label htmlFor={'grade-' + course.id} className="sr-only">
                        Grade
                      </label>
                      <Select
                        className=" shadow-none"
                        name={'grade-' + course.id}
                        value={course.grade}
                        onValueChange={(value) => {
                          updateCourse(course.id, 'grade', value);
                        }}
                      >
                        <SelectTrigger
                          id={'grade-' + course.id}
                          className="w-full rounded-none"
                        >
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select Grade</SelectLabel>
                            {Object.keys(gradePoints).map((grade) => {
                              return (
                                <SelectItem value={grade} key={grade}>
                                  {grade}
                                </SelectItem>
                              );
                            })}
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
                onClick={addCourse}
                type="button"
              >
                Add Course
                <PlusSquare />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removeCourse}
                disabled={courses.length <= 1}
              >
                Delete Course <Trash2 />
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
        <DisplayResult onRecalculate={reCalculateGPA} gpa={gpa} />
      )}
    </>
  );
};
export default USAGPACalculator;

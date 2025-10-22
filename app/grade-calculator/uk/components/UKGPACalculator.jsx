'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { moduleListSchemaUK } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import useElementSize from '@/utils/useElementSize';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';
import { calculateDegreeClassification } from '@/lib/calculations/uk-degree';

const moduleList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: '',
  mark: '',
  credits: '',
}));
const UKDCCalculator = () => {
  const [modules, setmodules] = useState(moduleList);
  const [loader, setLoader] = useState(false);
  const [degreeClassification, setdegreeClassification] = useState({
    score: 0,
    totalModules: 0,
    classification: '',
  });

  const { ref, height } = useElementSize(); // Custom Hook to calculate height

  // Add New Module
  const addModule = () => {
    setmodules((prevModules) => [
      ...prevModules,
      {
        id: prevModules.length + 1,
        name: '',
        mark: '',
        credits: '',
      },
    ]);
  };

  // Delete Module
  const removeModule = () => {
    setmodules((prevModules) => {
      if (prevModules.length <= 1) return prevModules;
      return prevModules.slice(0, -1);
    });
  };

  // Hanlde Input Fields Values
  const updateModule = (id, field, value) => {
    setmodules((prevModules) =>
      prevModules.map((module) => {
        return module.id === id ? { ...module, [field]: value } : module;
      })
    );
  };

  const calculateCurrentDC = (event) => {
    event.preventDefault();
    const validation = moduleListSchemaUK.safeParse(modules);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(`Module ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    const calculatedDC = calculateDegreeClassification(modules);

    setdegreeClassification({
      score: calculatedDC.averageMark,
      totalModules: modules.length,
      classification: calculatedDC.classification,
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

  const reCalculateDC = () => {
    setdegreeClassification({
      score: 0,
      totalModules: 0,
      classification: '',
    });
  };

  console.log(modules);
  return (
    <>
      {!degreeClassification.score && !loader ? (
        <form onSubmit={calculateCurrentDC}>
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-6 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Module Name</h4>
            </div>
            <div className="col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">Credits</h4>
            </div>
            <div className="col-span-3 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Mark (%)</h4>
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
              {modules.map((module) => {
                return (
                  <div
                    className="grid grid-cols-12 border-b border-x border-indigo-500/50  transition-all duration-300 ease-in-out last:rounded-b"
                    key={module.id}
                  >
                    <div className="col-span-6">
                      <label
                        htmlFor={'module-name-' + module.id}
                        className="sr-only"
                      >
                        Module Name
                      </label>
                      <Input
                        type="text"
                        id={'module-name-' + module.id}
                        value={module.name}
                        onChange={(e) =>
                          updateModule(module.id, 'name', e.target.value)
                        }
                        placeholder="e.g., British History"
                        className="py-3.5"
                      />
                    </div>
                    <div className="col-span-3 border-x  border-indigo-500/50">
                      <label
                        htmlFor={'credits-' + module.id}
                        className="sr-only"
                      >
                        Credits
                      </label>
                      <Input
                        type="number"
                        onChange={(e) =>
                          updateModule(module.id, 'credits', e.target.value)
                        }
                        id={'credits-' + module.id}
                        value={module.credits}
                        placeholder="20"
                        min="0"
                        className="py-3.5"
                      />
                    </div>
                    <div className="col-span-3">
                      <label htmlFor={'mark-' + module.id} className="sr-only">
                        Mark
                      </label>
                      <Input
                        type="number"
                        onChange={(e) =>
                          updateModule(module.id, 'mark', e.target.value)
                        }
                        id={'mark-' + module.id}
                        value={module.mark}
                        placeholder="75"
                        min="0"
                        className="py-3.5"
                      />
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
                onClick={addModule}
                type="button"
              >
                Add Module
                <PlusSquare />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removeModule}
                disabled={modules.length <= 1}
              >
                Delete Module <Trash2 />
              </Button>
            </div>
            <Button className=" flex-1" type="submit">
              Calculate Classification
            </Button>
          </div>
        </form>
      ) : degreeClassification.score && loader ? (
        <Lottie
          animationData={printerLoader}
          play
          loop={false}
          className="h-72 max-md:h-64 max-sm:h-60"
        />
      ) : (
        <DisplayResult
          onRecalculateDC={reCalculateDC}
          degreeClassification={degreeClassification}
        />
      )}
    </>
  );
};
export default UKDCCalculator;

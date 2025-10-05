// components/CalculationLimitModal.jsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { PlayCircle, X } from 'lucide-react';

const CalculationLimitModal = ({ isOpen, onClose, onShowAd }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-sm:max-w-xs w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-slate-800">
            Calculation Limit Reached
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-slate-600 pt-2">
            You've reached your free calculation limit for this session. Watch a
            short ad to unlock 5 more calculations.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 my-4">
          <div className="flex items-center gap-3">
            <div className="bg-violet-200 rounded-full p-2">
              <PlayCircle className="w-5 h-5 text-violet-700" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">
                Watch Ad to get 5 more calculations
              </h4>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="flex-col sm:flex-row sm:gap-6 gap-3">
          <AlertDialogCancel
            onClick={onClose}
            className="w-full sm:w-auto shadow-xs h-10"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onShowAd}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 h-10"
          >
            <PlayCircle className="w-4 h-4 mr-2" />
            Watch Ad
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CalculationLimitModal;

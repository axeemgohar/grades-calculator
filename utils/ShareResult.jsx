'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { toPng } from 'html-to-image';

const ShareResult = ({ gpa }) => {
  const contentRef = useRef(null);
  const [renderForExport, setRenderForExport] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const shareImage = async () => {
    if (isGenerating) return;

    try {
      setIsGenerating(true);

      // Step 1: render content offscreen
      setRenderForExport(true);

      // Step 2: wait for it to render in the DOM
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Ensure fonts are loaded
      if (document.fonts) {
        await document.fonts.ready;
      }

      // Step 3: generate image
      const dataUrl = await toPng(contentRef.current, {
        quality: 0.95,
        pixelRatio: 2,
      });

      // Step 4: turn into blob/file
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'cgpa-result.png', { type: 'image/png' });

      // Step 5: share / fallback
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'My CGPA Result from Gradian',
          text: `I calculated my CGPA using Gradian! Check out calculatecgpa.com for free GPA calculations.`,
          files: [file],
        });
      } else {
        const link = document.createElement('a');
        link.download = 'cgpa-result.png';
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Error sharing image:', error);
    } finally {
      // Step 6: remove the offscreen element
      setRenderForExport(false);
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Only render for export when needed */}
      {renderForExport && (
        <div className="absolute -left-[9999px] top-0">
          <div
            ref={contentRef}
            className="w-[500px] h-[600px] bg-indigo-50  p-12 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-indigo-900 mb-6">
                {gpa.CGPADescription}
              </h1>
              <div className="bg-white border border-indigo-300 rounded-lg p-8">
                <div className="text-6xl font-bold text-indigo-600 mb-2">
                  {gpa.score}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center py-4 border-b border-indigo-300">
                <span className="text-lg font-medium text-indigo-900">
                  {gpa.semesterTerm}
                </span>
                <span className="text-2xl font-bold text-indigo-600">
                  {gpa.totalSemesters}
                </span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-indigo-300">
                <span className="text-lg font-medium text-indigo-900">
                  {gpa.creditsTerm}
                </span>
                <span className="text-2xl font-bold text-indigo-600">
                  {gpa.totalCredits}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6">
              <div className="text-sm text-indigo-600 mb-1">
                Calculate Yours at:
              </div>
              <div className="text-xl font-bold text-indigo-900 ">
                calculatecgpa.com
              </div>
            </div>
          </div>
        </div>
      )}

      <Button
        className="!px-4   text-indigo-600 bg-transparent !shadow-none hover:bg-indigo-50"
        onClick={shareImage}
        disabled={isGenerating}
        id="CGPA-shared"
      >
        {isGenerating ? (
          <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full " />
        ) : (
          <Camera
            size={24}
            className="!h-7 !w-7  text-indigo-600 animate-bounce"
          />
        )}
        {isGenerating ? 'Generating...' : ''}
      </Button>
    </>
  );
};

export default ShareResult;

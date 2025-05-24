import React from 'react';

interface ResultsProps {
  finalMark: number;
  grade: string;
  gradePoint: number;
  internal1Converted: number;
  internal2Converted: number;
  internal3Converted: number;
  endSemesterConverted: number;
}

const ResultCard: React.FC<{ results: ResultsProps }> = ({ results }) => {
  const {
    finalMark,
    grade,
    gradePoint,
    internal1Converted,
    internal2Converted,
    internal3Converted,
    endSemesterConverted
  } = results;

  // Color mapping based on grade
  const getGradeColor = () => {
    switch (grade) {
      case 'O':
        return 'from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500';
      case 'A+':
        return 'from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500';
      case 'A':
        return 'from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500';
      case 'B+':
        return 'from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500';
      case 'B':
        return 'from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500';
      case 'C':
        return 'from-yellow-600 to-orange-600 dark:from-yellow-500 dark:to-orange-500';
      case 'P':
        return 'from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500';
      case 'F':
        return 'from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500';
      default:
        return 'from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500';
    }
  };

  return (
    <div className="card overflow-hidden h-full animated-result">
      <div className={`h-3 bg-gradient-to-r ${getGradeColor()}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Your Results
        </h3>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Internal 1 (converted):</span>
            <span className="font-semibold">{internal1Converted.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Internal 2 (converted):</span>
            <span className="font-semibold">{internal2Converted.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Internal 3 (converted):</span>
            <span className="font-semibold">{internal3Converted.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">End Semester (converted):</span>
            <span className="font-semibold">{endSemesterConverted.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center items-center mb-4">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {finalMark.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">out of 100</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Grade</div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${getGradeColor()} bg-clip-text text-transparent`}>
                {grade}
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Grade Point</div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {gradePoint}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
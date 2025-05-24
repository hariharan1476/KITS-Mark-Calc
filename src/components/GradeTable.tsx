import React from 'react';

const GradeTable: React.FC = () => {
  const gradeData = [
    { mark: '91-100', grade: 'O', gradePoint: 10, description: 'Outstanding' },
    { mark: '81-90', grade: 'A+', gradePoint: 9, description: 'Excellent' },
    { mark: '71-80', grade: 'A', gradePoint: 8, description: 'Very Good' },
    { mark: '61-70', grade: 'B+', gradePoint: 7, description: 'Good' },
    { mark: '56-60', grade: 'B', gradePoint: 6, description: 'Above Average' },
    { mark: '50-55', grade: 'C', gradePoint: 5, description: 'Average' },
    { mark: '40-49', grade: 'P', gradePoint: 4, description: 'Pass' },
    { mark: 'Below 40', grade: 'F', gradePoint: 0, description: 'Fail' },
  ];

  return (
    <div className="card p-6 overflow-hidden animate-fade-in">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Grade Reference Table
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary-50 dark:bg-primary-900/30">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Mark Range
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Grade
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Grade Point
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((item, index) => (
              <tr 
                key={index}
                className={`${
                  index % 2 === 0 
                    ? 'bg-white dark:bg-gray-800' 
                    : 'bg-gray-50 dark:bg-gray-800/50'
                } hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-150`}
              >
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  {item.mark}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                  {item.grade}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  {item.gradePoint}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeTable;
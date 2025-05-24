import React, { useState } from 'react';
import InputField from './InputField';
import ResultCard from './ResultCard';
import GradeTable from './GradeTable';
import { calculateResults } from '../utils/calculations';

const GradeCalculator: React.FC = () => {
  const [internal1, setInternal1] = useState<string>('');
  const [internal2, setInternal2] = useState<string>('');
  const [internal3, setInternal3] = useState<string>('');
  const [attendance, setAttendance] = useState<string>('');
  const [qualityAssessment, setQualityAssessment] = useState<string>('');
  const [endSemester, setEndSemester] = useState<string>('');
  const [results, setResults] = useState<null | {
    finalMark: number;
    grade: string;
    gradePoint: number;
    internal1Converted: number;
    internal2Converted: number;
    internal3Converted: number;
    endSemesterConverted: number;
  }>(null);
  const [showGradeTable, setShowGradeTable] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate inputs
    const int1 = parseFloat(internal1);
    const int2 = parseFloat(internal2);
    const int3 = parseFloat(internal3);
    const att = parseFloat(attendance);
    const qa = parseFloat(qualityAssessment);
    const end = parseFloat(endSemester);
    
    // Check for valid ranges
    if (isNaN(int1) || int1 < 0 || int1 > 40) {
      setError('Internal 1 must be between 0 and 40');
      return;
    }
    if (isNaN(int2) || int2 < 0 || int2 > 40) {
      setError('Internal 2 must be between 0 and 40');
      return;
    }
    if (isNaN(int3) || int3 < 0 || int3 > 40) {
      setError('Internal 3 must be between 0 and 40');
      return;
    }
    if (isNaN(att) || att < 0 || att > 5) {
      setError('Attendance must be between 0 and 5');
      return;
    }
    if (isNaN(qa) || qa < 0 || qa > 10) {
      setError('Quality Assessment must be between 0 and 10');
      return;
    }
    if (isNaN(end) || end < 0 || end > 100) {
      setError('End Semester must be between 0 and 100');
      return;
    }
    
    const calculatedResults = calculateResults({
      internal1: int1,
      internal2: int2,
      internal3: int3,
      attendance: att,
      qualityAssessment: qa,
      endSemester: end
    });
    
    setResults(calculatedResults);
  };
  
  const resetForm = () => {
    setInternal1('');
    setInternal2('');
    setInternal3('');
    setAttendance('');
    setQualityAssessment('');
    setEndSemester('');
    setResults(null);
    setError(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="card p-6 h-full">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Enter Your Marks
          </h2>
          
          <form onSubmit={handleCalculate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <InputField 
                label="Internal 1 Marks" 
                id="internal1"
                value={internal1} 
                onChange={(e) => setInternal1(e.target.value)}
                placeholder="Out of 40"
                type="number"
                min="0"
                max="40"
              />
              
              <InputField 
                label="Internal 2 Marks" 
                id="internal2"
                value={internal2} 
                onChange={(e) => setInternal2(e.target.value)}
                placeholder="Out of 40"
                type="number"
                min="0"
                max="40"
              />
              
              <InputField 
                label="Internal 3 Marks" 
                id="internal3"
                value={internal3} 
                onChange={(e) => setInternal3(e.target.value)}
                placeholder="Out of 40"
                type="number"
                min="0"
                max="40"
              />
              
              <InputField 
                label="Attendance" 
                id="attendance"
                value={attendance} 
                onChange={(e) => setAttendance(e.target.value)}
                placeholder="Out of 5"
                type="number"
                min="0"
                max="5"
                step="0.1"
              />
              
              <InputField 
                label="Quality Assessment" 
                id="qa"
                value={qualityAssessment} 
                onChange={(e) => setQualityAssessment(e.target.value)}
                placeholder="Out of 10"
                type="number"
                min="0"
                max="10"
                step="0.1"
              />
              
              <InputField 
                label="End Semester Exam" 
                id="endSemester"
                value={endSemester} 
                onChange={(e) => setEndSemester(e.target.value)}
                placeholder="Out of 100"
                type="number"
                min="0"
                max="100"
              />
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                {error}
              </div>
            )}
            
            <div className="flex flex-wrap gap-3">
              <button 
                type="submit" 
                className="btn-primary flex-1"
              >
                Calculate
              </button>
              
              <button 
                type="button" 
                onClick={resetForm}
                className="btn bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500"
              >
                Reset
              </button>
              
              <button 
                type="button" 
                onClick={() => setShowGradeTable(!showGradeTable)}
                className="btn bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 border border-primary-300 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-gray-700 focus:ring-primary-500"
              >
                {showGradeTable ? 'Hide' : 'Show'} Grade Table
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        {results ? (
          <ResultCard results={results} />
        ) : (
          <div className="card p-6 h-full flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Enter your marks and click "Calculate" to see your results
            </p>
          </div>
        )}
      </div>
      
      {showGradeTable && (
        <div className="lg:col-span-3">
          <GradeTable />
        </div>
      )}
    </div>
  );
};

export default GradeCalculator;
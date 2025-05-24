interface MarksInput {
  internal1: number;
  internal2: number;
  internal3: number;
  attendance: number;
  qualityAssessment: number;
  endSemester: number;
}

interface CalculationResult {
  finalMark: number;
  grade: string;
  gradePoint: number;
  internal1Converted: number;
  internal2Converted: number;
  internal3Converted: number;
  endSemesterConverted: number;
}

export const calculateResults = (marks: MarksInput): CalculationResult => {
  // Convert internals from 40 to 15
  const internal1Converted = (marks.internal1 / 40) * 15;
  const internal2Converted = (marks.internal2 / 40) * 15;
  const internal3Converted = (marks.internal3 / 40) * 15;
  
  // Convert end semester from 100 to 40
  const endSemesterConverted = (marks.endSemester / 100) * 40;
  
  // Calculate final mark
  const finalMark = 
    internal1Converted + 
    internal2Converted + 
    internal3Converted + 
    marks.attendance + 
    marks.qualityAssessment + 
    endSemesterConverted;
  
  // Determine grade and grade point
  const { grade, gradePoint } = getGradeDetails(finalMark);
  
  return {
    finalMark,
    grade,
    gradePoint,
    internal1Converted,
    internal2Converted,
    internal3Converted,
    endSemesterConverted
  };
};

const getGradeDetails = (finalMark: number): { grade: string; gradePoint: number } => {
  if (finalMark >= 91) {
    return { grade: 'O', gradePoint: 10 };
  } else if (finalMark >= 81) {
    return { grade: 'A+', gradePoint: 9 };
  } else if (finalMark >= 71) {
    return { grade: 'A', gradePoint: 8 };
  } else if (finalMark >= 61) {
    return { grade: 'B+', gradePoint: 7 };
  } else if (finalMark >= 56) {
    return { grade: 'B', gradePoint: 6 };
  } else if (finalMark >= 50) {
    return { grade: 'C', gradePoint: 5 };
  } else if (finalMark >= 40) {
    return { grade: 'P', gradePoint: 4 };
  } else {
    return { grade: 'F', gradePoint: 0 };
  }
};
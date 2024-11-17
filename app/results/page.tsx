// 'use client'
// import axios from 'axios';

// import React, { useEffect, useState } from 'react';

// interface StudentResult {
//   name: string;
//   usn: string;
//   semester: number;
//   subjects: Subject[];
//   sgpa: number;
//   cgpa: number;
// }

// interface Subject {
//   name: string;
//   code: string;
//   credits: number;
//   grade: string;
//   total: number;
// }

// const ResultsPage: React.FC = () => {
//   const [studentResult, setStudentResult] = useState<StudentResult | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/student/results'); // replace with your API endpoint
//         setStudentResult(response.data);
//       } catch (error) {
//         console.error('Error fetching student results:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!studentResult) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <div className="container mx-auto px-4 py-4 flex items-center">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/DRAIT.jpg"
//               alt="Institute Logo"
//               width={60}
//               height={60}
//               className="rounded-full"
//             />
//             <div className="flex flex-col">
//               <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
//               <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Student Result Content */}
//       <main className="py-8 container mx-auto px-4">
//         <h2 className="text-center text-2xl font-semibold mb-6">Student Result Details</h2>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           {/* Student Details */}
//           <table className="min-w-full text-left mb-6">
//             <tbody>
//               <tr className="border-b">
//                 <th className="py-3 px-6 font-medium text-gray-500">Student Name:</th>
//                 <td className="py-3 px-6 text-gray-700">{studentResult.name}</td>
//               </tr>
//               <tr className="border-b">
//                 <th className="py-3 px-6 font-medium text-gray-500">USN:</th>
//                 <td className="py-3 px-6 text-gray-700">{studentResult.usn}</td>
//               </tr>
//               <tr className="border-b">
//                 <th className="py-3 px-6 font-medium text-gray-500">Semester:</th>
//                 <td className="py-3 px-6 text-gray-700">{studentResult.semester}</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Subject Details */}
//           <h3 className="text-xl font-semibold mb-4">Subject Details</h3>
//           <table className="min-w-full border-collapse border border-gray-300 text-left mb-6">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="py-3 px-6 border border-gray-300">Subject Name</th>
//                 <th className="py-3 px-6 border border-gray-300">Subject Code</th>
//                 <th className="py-3 px-6 border border-gray-300">Credits</th>
//                 <th className="py-3 px-6 border border-gray-300">Grade</th>
//                 <th className="py-3 px-6 border border-gray-300">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {studentResult.subjects.map((subject, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.name}</td>
//                   <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.code}</td>
//                   <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.credits}</td>
//                   <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.grade}</td>
//                   <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Overall Performance */}
//           <h3 className="text-xl font-semibold mb-4">Overall Performance</h3>
//           <table className="min-w-full text-left">
//             <tbody>
//               <tr className="border-b">
//                 <th className="py-3 px-6 font-medium text-gray-500">SGPA:</th>
//                 <td className="py-3 px-6 text-gray-700">{studentResult.sgpa}</td>
//               </tr>
//               <tr>
//                 <th className="py-3 px-6 font-medium text-gray-500">CGPA:</th>
//                 <td className="py-3 px-6 text-gray-700">{studentResult.cgpa}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ResultsPage;


// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export default function ResultsPage() {
//   const [studentDetails, setStudentDetails] = useState({ s_name: '', usn: '', semester: '' });
//   const [subjectResults, setSubjectResults] = useState([]);

//   useEffect(() => {
//     fetchStudentDetails();
//     fetchSubjectResults();
//   }, []);

//   const fetchStudentDetails = async () => {
//     try {
//       const response = await fetch('/api/getStudentDetails'); 
//       const data = await response.json();
//         console.log(data);
//         setStudentDetails(data[0]);
//       } catch (error) {
//         console.error("Error fetching student details:", error);
//       }
  
//     //   if (!response.ok) {
//     //     throw new Error(`HTTP error! status: ${response.status}`);
//     //   }
  
//     //   const data = await response.json();
//     //   console.log(data);
//     //   setStudentDetails(data);//[0]
//     // } catch (error) {
//     //   console.error('Error fetching student details:', error);
//     // }
//   };
  
//   const fetchSubjectResults = async () => {
//     try {
//       const response = await fetch('/api/getSubjectResults');
//       const data = await response.json();
//         console.log(data);
//         setSubjectResults(data[0]);
//       } catch (error) {
//         console.error("Error fetching student details:", error);
//       } // Correct endpoint
  
//     //   if (!response.ok) {
//     //     throw new Error(`HTTP error! status: ${response.status}`);
//     //   }
  
//     //   const data = await response.json();
//     //   console.log(data);
//     //   setSubjectResults(data)//[0]);
      
//     // } catch (error) {
//     //   console.error('Error fetching subject results:', error);
//     // }
//   };
  
  
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//           <Image
//             src="/DRAIT.jpg"
//               alt="Institute Logo"
//               width={60}
//               height={60}
//               className="rounded-full"
//             />
//             <div className="flex flex-col">
//               <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
//               <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
//             </div>
            
//           </div>
//         </div>
//       </header>

//       {/* Student Details */}
//       <div>
//               <h1 className="text-center text-2xl text-black font-semibold mb-6">RESULTS</h1>
              
//             </div>
//       <div className="flex-grow flex items-center justify-center p-6">
//         <div className="container mx-auto p-4">
//           <div className="max-w-md mx-auto bg-white text-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-xl text-black font-bold mb-4">Student Details</h2>
//             <div>
//               <p><strong>Name:</strong> {studentDetails.s_name}</p>
//               <p><strong>USN:</strong> {studentDetails.usn}</p>
//               <p><strong>Semester:</strong> {studentDetails.semester}</p>
//             </div>
//           </div>

//           {/* Subject Results Table */}
//           <div className="mt-6">
//             <h3 className="text-xl text-black font-bold mb-4">Subject Results</h3>
//             <table className="min-w-full bg-white border">
//               <thead>
//                 <tr>
//                   <th className="py-2 text-black px-4 border">Subject Code</th>
//                   <th className="py-2 text-black px-4 border">Subject Name</th>
//                   <th className="py-2 text-black px-4 border">Credits</th>
//                   <th className="py-2 text-black px-4 border">Grade Awarded</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {subjectResults.map((subject: any, index) => (
//                   <tr key={index}>
//                     <td className="py-2 text-black px-4 border">{subject.subcode}</td>
//                     <td className="py-2 text-black px-4 border">{subject.brcode}</td>
//                     <td className="py-2 text-black px-4 border">{subject.suborder}</td>
//                     <td className="py-2 text-black px-4 border">{subject.grd}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the types for your data
interface StudentDetails {
  s_name: string;
  usn: string;
  semester: string;
}

interface SubjectResult {
  subcode: string;
  brcode: string;
  suborder: number;
  grd: string;
}

export default function ResultsPage() {
  // Use proper types for state variables
  const [studentDetails, setStudentDetails] = useState<StudentDetails>({
    s_name: '',
    usn: '',
    semester: '',
  });

  const [subjectResults, setSubjectResults] = useState<SubjectResult[]>([]);

  useEffect(() => {
    fetchStudentDetails();
    fetchSubjectResults();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await fetch('/api/getStudentDetails');
      if (!response.ok) {
        throw new Error(`Failed to fetch student details: ${response.statusText}`);
      }
      const data: StudentDetails[] = await response.json();
      console.log('Student Details:', data);
      if (data && data.length > 0) {
        setStudentDetails(data[0]);
      }
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const fetchSubjectResults = async () => {
    try {
      const response = await fetch('/api/getSubjectResults');
      if (!response.ok) {
        throw new Error(`Failed to fetch subject results: ${response.statusText}`);
      }
      const data: SubjectResult[] = await response.json();
      console.log('Subject Results:', data);
      setSubjectResults(data); // Type is now correctly inferred
    } catch (error) {
      console.error('Error fetching subject results:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/DRAIT.jpg"
              alt="Institute Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm opacity-90">
                Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Student Details */}
      <div>
        <h1 className="text-center text-2xl text-black font-semibold mb-6">RESULTS</h1>
      </div>
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="container mx-auto p-4">
          <div className="max-w-md mx-auto bg-white text-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl text-black font-bold mb-4">Student Details</h2>
            <div>
              <p>
                <strong>Name:</strong> {studentDetails.s_name || 'N/A'}
              </p>
              <p>
                <strong>USN:</strong> {studentDetails.usn || 'N/A'}
              </p>
              <p>
                <strong>Semester:</strong> {studentDetails.semester || 'N/A'}
              </p>
            </div>
          </div>

          {/* Subject Results Table */}
          <div className="mt-6">
            <h3 className="text-xl text-black font-bold mb-4">Subject Results</h3>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 text-black px-4 border">Subject Code</th>
                  <th className="py-2 text-black px-4 border">Subject Name</th>
                  <th className="py-2 text-black px-4 border">Credits</th>
                  <th className="py-2 text-black px-4 border">Grade Awarded</th>
                </tr>
              </thead>
              <tbody>
                {subjectResults.map((subject, index) => (
                  <tr key={index}>
                    <td className="py-2 text-black px-4 border">{subject.subcode || 'N/A'}</td>
                    <td className="py-2 text-black px-4 border">{subject.brcode || 'N/A'}</td>
                    <td className="py-2 text-black px-4 border">{subject.suborder || 'N/A'}</td>
                    <td className="py-2 text-black px-4 border">{subject.grd || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

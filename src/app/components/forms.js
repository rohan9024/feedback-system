import React from 'react';

const Forms = () => {

  const teachers = [
    { id: 1, facultyName: 'ms. urvashi', teachingSubject: 'OS' },
    { id: 2, facultyName: 'Ms masooda', teachingSubject: 'Dbms' },
    { id: 3, facultyName: 'Ms kranti', teachingSubject: 'AOA' },
  ];


  const feedbackQuestions = [
    'How well did the teacher explain the concepts?',
    'Was the teacher well-prepared for the class?',
    'Did the teacher encourage questions and discussions?',
    'Rate the teacher\'s clarity in communication.',
    'How engaging were the class activities?',
    'Rate the teacher\'s availability for extra help.',
    'Did the teacher provide useful feedback on assignments?',
    'Rate the teacher\'s approachability.',
    'How satisfied are you with the overall teaching quality?',
    'Would you recommend this teacher to others?',
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <div className="text-center mb-8">
          <img
            src="https://siesgst.edu.in/images/sies_gst_logo.jpg"
            alt="Logo"
            className="mx-auto max-h-20"
          />
          <h2 className="text-3xl font-bold mt-4">Teacher Feedback Form</h2>
        </div>

        {teachers.map(teacher => (
          <div key={teacher.id} className="mb-6 text-center">
            <h3 className="text-xl font-semibold">Teacher Details</h3>
            <p className="text-gray-600">
              Faculty Name: {teacher.facultyName}<br />
              Teaching Subject: {teacher.teachingSubject}
            </p>

            <form>
              <table className="w-full mt-4">
                <tbody>
                  {feedbackQuestions.map((question, index) => (
                    <tr key={index}>
                      <td className="py-2">
                        <label className="block text-sm font-medium text-gray-600">{question}</label>
                      </td>
                      <td className="py-2">
                        <div className="flex items-center space-x-8">
                          {[1, 2, 3, 4, 5].map(option => (
                            <React.Fragment key={option}>
                              <input type="radio" id={`teacher-${teacher.id}-question-${index + 1}-option-${option}`} name={`teacher-${teacher.id}-question-${index + 1}`} value={option} />
                              <label htmlFor={`teacher-${teacher.id}-question-${index + 1}-option-${option}`} className="text-center">{option}</label>
                            </React.Fragment>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex items-center justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit Feedback for {teacher.facultyName}
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;

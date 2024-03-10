"use client"
import React, { useEffect, useContext, useState } from 'react';

import { useSearchParams } from 'next/navigation'
import Left from '../../../../components/Left';
import { useRouter } from 'next/navigation';
import { JellyTriangle } from '@uiball/loaders'
import { Manrope, Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
});
function page({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  let isAdmin = '';

  useEffect(() => {
    isAdmin = localStorage.getItem("isAdmin") === "true" || '';

    if (!isAdmin) {
      router.push('login');
    } else {
      setLoading(false);
    }
  }, [])

  const searchParams = useSearchParams()

  const dept = searchParams.get('dept')

  const departmentDictionary = {
    'PPT': 'Printing & Packaging Technology',
    'CE': 'Computer Engineering',
    'IT': 'Information Technology',
    'ECS': 'Electronics & Computer Science',
    'EXTC': 'Electronics & Telecommunication',
    'AIDS': 'Artificial Intelligence and Data science',
    'AIML': 'Artificial Intelligence and Machine Learning',
    'MECH': 'Mechanical Engineering',
    'IOT': 'IOT',
  };


  return (
    <div className="flex bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <JellyTriangle color="black" size={100} />
        </div>)
        : (
          <>
            <Left className="flex-none" />
            <div className="ml-10 w-[1px] h-screen bg-gray-200 drop-shadow-sm" />
            <>
              <div className='w-auto mt-20'>
                <h1 className={`${raleway.className} text-4xl font-bold`}>Users Table</h1>
              </div>
              <div class={`${manrope.className} relative overflow-x-auto mt-10`}>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-md text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Sr. No.
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Semester
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Division
                      </th>
                      <th scope="col" class="px-6 py-3">
                        PRN
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Password
                      </th>


                      <th scope="col" class="px-6 py-3">
                        Options
                      </th>
                    </tr>
                  </thead>
                  {
                    theoryObj.map((details) => (

                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="w-24 px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <h1>{detailsCount++}</h1>
                          </th>
                          <td class="px-6 py-4">
                            <h1 className='truncate w-auto'>{details.department}</h1>
                          </td>
                          <td class="px-6 py-4">
                            <h1 className='truncate w-auto'>{details.semester}</h1>
                          </td>
                          <td class="px-6 py-4">
                            <h1 className='truncate w-auto'>{details.division}</h1>
                          </td>
                          <td class="px-6 py-4">
                            <h1 className='truncate w-auto'>{details.subject}</h1>
                          </td>
                          <td class="px-6 py-4">
                            <h1 className='truncate w-auto'>{details.teacher}</h1>
                          </td>
                          <td class="px-6 py-4">
                            <div className='flex justify-around items-center w-[250px] space-x-4'>
                              <div className=' w-32 flex justify-around items-center cursor-pointer' onClick={() => deleteDetails(details)}>
                                <img src='./delete.png' alt="remove" className='w-5 h-5 ' />
                                <h1>Delete Link</h1>
                              </div>
                              <div className=' w-28 flex justify-around items-center cursor-pointer' onClick={() => setTheoryDetailsModal(details)}>
                                <img src="./edit.png" alt="edit" className='w-5 h-5' />
                                <h1>Edit Details</h1>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  }

                </table>
              </div>
            </>
          </>

        )
      }


    </div>
  )
}

export default page
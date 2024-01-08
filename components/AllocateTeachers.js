"use client"

import React, { useContext, useEffect, useRef, useState } from 'react'
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../firebase"
import { useRouter } from 'next/navigation';
import { AuthContext } from '../contexts/AuthContext';
import SubjectAllocation from "./SubjectAllocation"
import { motion } from "framer-motion"


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function AllocateTeachers() {
    const [theoryObj, setTheoryObj] = useState([])
    const [practicalObj, setPracticalObj] = useState([])
    const [fetch, setFetch] = useState(false)


    const [department, setDepartment] = useState("Electronics & Telecommunication")
    const [semester, setSemester] = useState("Semester 1")
    const [division, setDivision] = useState("C")
    const [subject, setSubject] = useState("Data Warehousing and Mining")
    const [batch, setBatch] = useState("D1")
    const [teacher, setTeacher] = useState("Sunil Punjabi")

    const [modeOption, setModeOption] = useState("Theory")

    const router = useRouter();

    var isAdmin = ''
    useEffect(() => {
        if (typeof window !== 'undefined') {
            isAdmin = localStorage.getItem("isAdmin") === "true" || '';
        }
        if (!isAdmin) {
            router.push('login');
        }
    }, [])


    const departmentList = [
        "Electronics & Telecommunication",
        "Computer Engineering",
        "Information Technology",
        "Printing & Packaging Technology",
        "Mechanical Engineering",
        "Electronics & Computer Science",
        "IOT",
        "Artificial Intelligence and Data science",
        "Artificial Intelligence and Machine Learning",
    ]
    const semList = [
        "Semester 1",
        "Semester 2",
        "Semester 3",
        "Semester 4",
        "Semester 5",
        "Semester 6",
        "Semester 7",
        "Semester 8"
    ]
    const subjectList = [
        "Data Warehousing and Mining",
        "Computer Network",
        "Software Engineering",
        "Theoretical Computer Science",
        "Internet Programming",
        "Probablistic Graphical Models",
        "Professional Communication Ethics"
    ]
    const divisionList = [
        "C",
        "D",
    ]
    const batchList = [
        "D1",
        "D2",
        "D3",
        "C1",
        "C2",
        "C3",
    ]
    const modeList = [
        "Theory",
        "Practical",
    ]
    const teacherList = [
        "Sunil Punjabi",
        "Masooda Modak",
        "Namrata Patel",
        "Urvashi Patkar",
        "Prachi Shahane",
        "Ramkishan Bhise",
        "Aparna Bannore",
        "Kranti Bade",
        "Anindita Khade",
    ]

    const handleDepartmentDropdown = (event) => {
        setDepartment(event.target.value);
    };
    const handleSemesterDropdown = (event) => {
        setSemester(event.target.value);
    };
    const handleDivisionDropdown = (event) => {
        setDivision(event.target.value);
    };
    const handleSubjectDropdown = (event) => {
        setSubject(event.target.value);
    };
    const handleTeacherDropdown = (event) => {
        setTeacher(event.target.value);
    };
    const handleBatchDropdown = (event) => {
        setBatch(event.target.value);
    };

    const notifySuccess = () => toast.success('Created Allocation Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyError = () => toast.error('Something went wrong', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    // Fetch theory teachers
    useEffect(() => {
        if (!fetch) {
            const fetchedTheoryTeachers = async () => {
                const querySnapshot = await getDocs(collection(db, "details"));
                const fetchedTeachers = [];

                querySnapshot.forEach((doc) => {
                    fetchedTeachers.push({
                        id: doc.id,
                        department: doc.data().department,
                        semester: doc.data().semester,
                        division: doc.data().division,
                        subject: doc.data().subject,
                        teacher: doc.data().teacher,
                        mode: doc.data().mode,
                    });
                });

                setTheoryObj(fetchedTeachers);
                setFetch(true);
            }

            fetchedTheoryTeachers();
        }
    }, [fetch]);

    // Fetch practical teachers
    useEffect(() => {
        if (!fetch) {
            const fetchedPracticalTeachers = async () => {
                const querySnapshot = await getDocs(collection(db, "details"));
                const fetchedTeachers = [];

                querySnapshot.forEach((doc) => {
                    fetchedTeachers.push({
                        id: doc.id,
                        department: doc.data().department,
                        semester: doc.data().semester,
                        division: doc.data().division,
                        subject: doc.data().subject,
                        teacher: doc.data().teacher,
                        mode: doc.data().mode,
                        batch: doc.data().batch,
                    });
                });

                setPracticalObj(fetchedTeachers);
                setFetch(true);
            }

            fetchedPracticalTeachers();
        }
    }, [fetch]);


    async function createTheoryAllocation() {
        try {
            await addDoc(collection(db, 'details'), {
                department: department,
                semester: semester,
                division: division,
                subject: subject,
                teacher: teacher,
                mode: modeOption,
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0
            });
            notifySuccess('Created Allocation successfully');
            setFetch(false);
        } catch (error) {
            notifyError('Something went wrong');
            
        }
    }
    async function createPracticalAllocation() {
        try {
            await addDoc(collection(db, 'details'), {
                department: department,
                semester: semester,
                division: division,
                subject: subject,
                teacher: teacher,
                mode: modeOption,
                batch: batch,
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0
            });
            notifySuccess('Created Allocation successfully');
            setFetch(false);
        } catch (error) {
            notifyError('Something went wrong');
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='w-screen  flex mx-20 my-20'>
                <div className='flex flex-col'>

                    <motion.div className='flex  justify-center items-center cursor-pointer border border-gray-300 rounded-2xl w-[800px]'>
                        <motion.div
                            className={`${modeOption === 'Theory'
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-none'
                                } flex justify-center items-center  px-32 py-2 rounded-2xl w-full`}
                            onClick={() => setModeOption('Theory')}
                            whileHover={{ scale: 1.1 }} // Add animation on hover
                            transition={{ type: 'linear', stiffness: 300 }}
                        >
                            <h1 className={`${manrope.className} text-xl`}>Theory</h1>
                        </motion.div>
                        <motion.div
                            className={`${modeOption === 'Practical'
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-none'
                                } flex justify-center items-center px-32 py-2 rounded-2xl w-full`}
                            onClick={() => setModeOption('Practical')}
                            whileHover={{ scale: 1.1 }} // Add animation on hover
                            transition={{ type: 'linear', stiffness: 300 }}
                        >
                            <h1 className={`${manrope.className} text-xl`}>Practical</h1>
                        </motion.div>
                    </motion.div>
                    <div className='flex flex-col space-y-5 mb-20'>
                        <div className='grid grid-cols-2 gap-10 my-10'>

                            <h1 className={`${raleway.className} text-4xl font-bold`}>Select Department</h1>

                            <select
                                value={department}
                                onChange={handleDepartmentDropdown}
                                className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                            >
                                {departmentList.map((department, index) => (
                                    <option key={index} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>

                            <h1 className={`${raleway.className} text-4xl font-bold`}>Select Semester</h1>

                            <select
                                value={semester}
                                onChange={handleSemesterDropdown}
                                className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                            >
                                {semList.map((sem, index) => (
                                    <option key={index} value={sem}>
                                        {sem}
                                    </option>
                                ))}
                            </select>
                            <h1 className={`${raleway.className} text-4xl font-bold`}>Select Division</h1>

                            <select
                                value={division}
                                onChange={handleDivisionDropdown}
                                className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                            >
                                {divisionList.map((division, index) => (
                                    <option key={index} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                            <h1 className={`${raleway.className} text-4xl font-bold`}>Select Subject</h1>

                            <select
                                value={subject}
                                onChange={handleSubjectDropdown}
                                className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                            >
                                {subjectList.map((subject, index) => (
                                    <option key={index} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                            </select>
                            {
                                (
                                    modeOption === "Practical" &&
                                    <>
                                        <h1 className={`${raleway.className} text-4xl font-bold`}>Select Batch</h1>

                                        <select
                                            value={batch}
                                            onChange={handleBatchDropdown}
                                            className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                        >
                                            {batchList.map((batch, index) => (
                                                <option key={index} value={batch}>
                                                    {batch}
                                                </option>
                                            ))}
                                        </select>
                                    </>
                                )
                            }



                            <h1 className={`${raleway.className} text-4xl font-bold`}>Select Teacher</h1>

                            <select
                                value={teacher}
                                onChange={handleTeacherDropdown}
                                className="block w-[400px] bg-white border border-gray-800  py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                            >
                                {teacherList.map((teacher, index) => (
                                    <option key={index} value={teacher}>
                                        {teacher}
                                    </option>
                                ))}


                            </select>


                            <div
                                onClick={modeOption === "Theory" ? createTheoryAllocation : '' || modeOption === "Practical" ? createPracticalAllocation : ''}
                                type="submit" class=" cursor-pointer w-96 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-600">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative">Create New Allocation</span>
                            </div>
                        </div>
                    </div>


                    <SubjectAllocation theoryObj={theoryObj} practicalObj={practicalObj} />




                </div>

            </div>
        </>

    )
}

export default AllocateTeachers


"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

import React from 'react';
import Link from 'next/link';
import NavbarforStudent from '/components/NavbarforStudent';

const Dashboard = () => {
  return (
    <div>
      <NavbarforStudent />

      {/* Welcome Message */}
      <header className="bg-teal-400 p-4 text-white text-center">
        <h1>Welcome, [Student Name]!</h1>
      </header>

      {/* Feedback Statistics */}
      <div className="flex flex-col items-center justify-center min-h-screen pb-40">
        <section id="statistics" className="flex justify-around w-full">
          <Link href="/total-feedback"className="card total-feedback bg-teal-400 border border-gray-300 p-12 text-center rounded">
              <h2>Total Feedback</h2>
              <p>[Total Feedback Count]</p>
              <p>Click for more info</p>
            
          </Link>
          <Link href="/remaining-feedback"className="card remaining-feedback bg-teal-400 border border-gray-300 p-12 text-center rounded">
              <h2>Remaining Feedback</h2>
              <p>[Remaining Feedback Count]</p>
              <p>Click for more info</p>
            
          </Link>
          <Link href="/completed-feedback" className="card completed-feedback bg-teal-400 border border-gray-300 p-12 text-center rounded">
              <h2>Completed Feedback</h2>
              <p>[Completed Feedback Count]</p>
              <p>Click for more info</p>
            </Link>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

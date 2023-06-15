import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../../const/styles.css';

const CallToSchedule = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-4xl md:text-7xl text-white text-center overlockBlack">
        Call for Scheduling
      </p>
      <p className="text-3xl md:text-5xl text-white text-center mt-8">317-376-0416</p>
      <a
        className="btn bg-primary hover:bg-primary/75 w-60 h-12 md:h-16 border-2 mt-8 text-white text-2xl md:text-3xl capitalize"
        href="tel:317-376-0416">
        <FaPhoneAlt className="h-6" />
        <p>Call Now</p>
      </a>
    </div>
  );
};

export default CallToSchedule;

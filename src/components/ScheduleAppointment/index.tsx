import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import '../../const/styles.css';

const ScheduleAppointment = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-4xl md:text-7xl text-white text-center overlockBlack">
        Schedule Appointment
      </p>
      <a
        className="btn bg-primary hover:bg-primary/75 w-60 md:w-80 h-16 md:h-24 border-2 mt-8 text-white text-2xl md:text-3xl capitalize"
        href="https://transcendrxfishers.janeapp.com/locations/transcend-rx-aesthetics-and-wellness-lounge/book#/staff_member/9">
        <FaCalendar className="h-16 md:h-24 mr-4" />
        <p className="text-2xl md:text-4xl">Book Online</p>
      </a>
    </div>
  );
};

export default ScheduleAppointment;

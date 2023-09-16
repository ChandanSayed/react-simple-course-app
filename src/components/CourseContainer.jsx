import React, { useEffect, useState } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa6';

const CourseContainer = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {courses.map((course, i) => {
        const { title, description, cover_image, price, credit } = course;
        return (
          <div className="card p-4 w-[312px] bg-white rounded-xl" key={i}>
            <img src={cover_image} alt="" />
            <h2 className="mb-3 mt-4 text-lg font-semibold text-primary">{title}</h2>
            <p className="text-primary text-opacity-60 text-base">{description}</p>
            <div className="flex justify-between mb-6 mt-4">
              <div className="left flex items-center">
                <FaDollarSign /> <span>Price: {price}</span>
              </div>
              <div className="right flex items-center">
                <AiOutlineRead /> <span>Credit: {credit}hr</span>
              </div>
            </div>

            <button className="text-white bg-[#2F80ED] font-semibold text-lg rounded-lg w-full py-2 px-3">Select</button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseContainer;

import React, { useEffect, useState } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa6';

const CourseContainer = ({ setRemainingHour, setCreditHour, remainingHour, setCoursesName, courseNames, setPrice, setToastValue, setShowToast }) => {
  const [courses, setCourses] = useState([]);

  function cartHandler(course) {
    const { price, duration, title } = course;
    const exist = courseNames.find(name => name === title);
    if (exist) {
      setToastValue('Course Already is in the Cart!');
      setShowToast(true);
      return;
    }
    if (remainingHour < duration) {
      setToastValue(`You don't have enough Credit!`);
      setShowToast(true);
      return;
    }
    setCoursesName(prev => {
      return prev.concat(title);
    });

    setRemainingHour(prev => {
      if (prev === 0) {
        return (prev = 0);
      }
      return prev - duration;
    });

    setCreditHour(prev => prev + duration);
    setPrice(prev => prev + price);
  }

  useEffect(() => {
    fetch('./courses.json')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {courses.map((course, i) => {
        const { title, description, cover_image, price, duration } = course;
        return (
          <div className="card p-4 w-[312px] bg-white rounded-xl" key={i}>
            <img src={cover_image} alt="" />
            <h2 className="mb-3 mt-4 text-lg font-semibold text-primary">{title}</h2>
            <p className="text-primary text-opacity-60 text-base">{description}</p>
            <div className="flex justify-between mb-6 mt-4">
              <div className="left flex items-center gap-2">
                <FaDollarSign /> <span className="text-primary text-opacity-60">Price: {price}</span>
              </div>
              <div className="right flex items-center gap-2">
                <AiOutlineRead /> <span className="text-primary text-opacity-60">Credit: {duration}hr</span>
              </div>
            </div>
            <button onClick={() => cartHandler(course)} className="text-white bg-secondary font-semibold text-lg rounded-lg w-full py-2 px-3">
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseContainer;

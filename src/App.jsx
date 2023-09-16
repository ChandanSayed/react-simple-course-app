import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CourseContainer from './components/CourseContainer';
import Toast from './components/Toast';

function App() {
  const [remainingHour, setRemainingHour] = useState(20);
  const [creditHour, setCreditHour] = useState(0);
  const [courseNames, setCoursesName] = useState([]);
  const [price, setPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastValue, setToastValue] = useState('');

  return (
    <div className="container max-w-[1470px] mx-auto px-[15px] pb-24">
      <h2 className="text-3xl font-bold mb-8 mt-8 text-center">Course Registration</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_312px] gap-6">
        <CourseContainer setRemainingHour={setRemainingHour} setCreditHour={setCreditHour} remainingHour={remainingHour} setCoursesName={setCoursesName} courseNames={courseNames} setPrice={setPrice} setShowToast={setShowToast} setToastValue={setToastValue} />
        <Sidebar remainingHour={remainingHour} creditHour={creditHour} courseNames={courseNames} price={price} />
      </div>
      <Toast showToast={showToast} toastValue={toastValue} setShowToast={setShowToast} />
    </div>
  );
}
export default App;

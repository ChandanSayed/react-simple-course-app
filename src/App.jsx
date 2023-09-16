import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CourseContainer from './components/CourseContainer';

function App() {
  const [remainingHour, setRemainingHour] = useState(20);
  const [creditHour, setCreditHour] = useState(0);

  return (
    <div className="container max-w-[1470px] mx-auto px-[15px] pb-24">
      <h2 className="text-3xl font-bold mb-8 mt-8 text-center">Course Registration</h2>
      <div className="grid grid-cols-[1fr_312px] gap-6">
        <CourseContainer />
        <Sidebar remainingHour={remainingHour} creditHour={creditHour} />
      </div>
    </div>
  );
}
export default App;

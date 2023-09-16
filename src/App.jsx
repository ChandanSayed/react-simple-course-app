import { useState } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa6';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [remainingHour, setRemainingHour] = useState(20);
  const [creditHour, setCreditHour] = useState(0);

  return (
    <div className="container max-w-[1470px] mx-auto px-[15px]">
      <h2 className="text-3xl font-bold mb-8 mt-8 text-center">Course Registration</h2>
      <div className="grid grid-cols-[1fr_312px] gap-6">
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="card p-4 w-[312px]">
            <h2 className="mb-3 mt-4 text-lg font-semibold text-primary"></h2>
            <p className="text-primary text-opacity-60 text-base"></p>
            <div className="flex justify-between mb-6 mt-4">
              <div className="left flex items-center">
                <FaDollarSign /> <span>Price: {`price`}</span>
              </div>
              <div className="right flex items-center">
                <AiOutlineRead /> <span>Credit: {`Credit`}hr</span>
              </div>
            </div>

            <button className="text-white bg-[#2F80ED] font-semibold text-lg rounded-lg w-full py-2 px-3">Select</button>
          </div>
        </div>
        <Sidebar remainingHour={remainingHour} creditHour={creditHour} />
      </div>
    </div>
  );
}
export default App;

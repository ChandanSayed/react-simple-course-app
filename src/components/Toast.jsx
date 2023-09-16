import { FaXmark } from 'react-icons/fa6';
const Toast = ({ showToast, toastValue, setShowToast }) => {
  return (
    <div className={`fixed z-10 left-0 right-0 top-0 bottom-0 ${showToast ? 'block' : 'hidden'}`}>
      <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-lg p-12 bg-white w-72 text-center shadow-[0_235px_260px_515px_rgba(0,0,0,0.3)]">
        <FaXmark className="absolute right-2 top-2 cursor-pointer" onClick={() => setShowToast(false)} />
        <p className="text-primary text-opacity-60 text-base">{toastValue}</p>
      </div>
    </div>
  );
};

export default Toast;

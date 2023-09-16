const Sidebar = ({ remainingHour, creditHour, courseNames, price }) => {
  return (
    <div className="sidebar w-[312px]">
      <div className="cart bg-white rounded-xl p-6">
        <h3 className="text-lg text-secondary font-medium">Credit Hour Remaining {remainingHour} hr</h3>
        <hr className="my-4" />
        <h3 className="text-primary text-xl mb-5 font-bold">Courses</h3>
        <ol>
          {courseNames.map((names, i) => (
            <li key={i} className="text-primary text-opacity-60 text-base">
              {names}
            </li>
          ))}
        </ol>
        <hr className="my-4" />
        <p className="font-medium text-base">Total Credit Hour {creditHour}</p>
        <hr className="my-4" />
        <p className="font-semibold text-base">Total Price ${price}</p>
      </div>
    </div>
  );
};

export default Sidebar;

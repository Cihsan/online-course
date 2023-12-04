import React from "react";

const CourseSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className=" px-2 flex justify-center">
      <input
        type="text"
        placeholder={"Search..."}
        className="md:w-1/2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default CourseSearch;

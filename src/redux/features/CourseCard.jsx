import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courses }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 pt-5">
      {courses.map(course => (
        <div
          key={course.id}
          className="max-w-sm bg-white shadow-lg rounded-md overflow-hidden"
        >
          <img
            src="https://placehold.co/600x400?font=roboto"
            alt="Card"
            className="w-full h-36 object-cover"
          />
          <div className="p-6">
            <h2 className="font-bold text-lg mb-2 text-gray-700">
              Course Name: {course.name}
            </h2>
            <p className="text-gray-700 mb-5">Instructor: {course.instructor}</p>
            <Link
              to={`/course-list/${course.id}`}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Course Details
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CourseCard;

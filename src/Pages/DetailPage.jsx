import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourses } from "../redux/features/courseListSlice";

const DetailPage = () => {
  const { id } = useParams();
  const Coursedispatch = useDispatch();
  const { loading, courses, error } = useSelector(state => state.courseList);
  useEffect(() => {
    Coursedispatch(fetchCourses());
  }, [Coursedispatch]);

  const course = courses.filter(c => c.id === parseInt(id));
  const courseDetails = course[0];

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-8 rounded-md shadow-md">
        <section>
          <img
            src="https://placehold.co/600x400?font=roboto"
            alt="Detail Image"
            className="w-full object-cover mb-4 rounded-md"
          />
        </section>
        <section>
          <h1 className="text-3xl font-bold text-gray-600 mb-6">
            {courseDetails.name}
          </h1>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Instructor:</span>{" "}
            {courseDetails.instructor}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Enrollment Status:</span>{" "}
            {courseDetails.enrollmentStatus}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-bold">Description:</span>{" "}
            {courseDetails.description}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-bold">Location:</span>{" "}
            {courseDetails.location}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Schedule:</span>{" "}
            {courseDetails.schedule}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Pre-requisites:</span>{" "}
            {courseDetails.prerequisites.map((prerequisite, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-500 mr-2"
              >
                {prerequisite}
              </span>
            ))}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Duration:</span>{" "}
            {courseDetails.duration}
          </p>
          <details className="mb-4">
            <summary className="cursor-pointer text-blue-500 font-semibold">
              Syllabus
            </summary>
            <ul className="list-disc pl-6 mt-2 list-none">
              {courseDetails.syllabus.map(item => (
                <li key={item.week}>
                  <span className="font-semibold text-gray-700">{`Week ${item.week}: ${item.topic}`}</span>
                  <p className="text-gray-600">{item.content}</p>
                </li>
              ))}
            </ul>
          </details>
        </section>
      </div>
    </main>
  );
};

export default DetailPage;

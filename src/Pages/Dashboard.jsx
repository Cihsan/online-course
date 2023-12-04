import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/features/courseListSlice";

const Dashboard = () => {
  const CourseDispatch = useDispatch();
  const { loading, courses, error } = useSelector(state => state.courseList);
  useEffect(() => {
    CourseDispatch(fetchCourses());
  }, [CourseDispatch]);

  const [enrolledCourses, setEnrolledCourses] = useState(courses);

  const markAsCompleted = courseId => {
    setEnrolledCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <main>
      <header>
        <h1 className="mb-3 mt-3 text-2xl font-bold text-center">
          Enrolled Courses
        </h1>
      </header>
      <div className="flex md:justify-center sm:justify-self-end">
        <div className="relative overflow-x-auto shadow-md md:rounded-lg p-5">
          <table className="md:w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1.5 py-1.5">
                  Thumbnail
                </th>
                <th scope="col" className="px-1.5 py-1.5">
                  Course Name
                </th>
                <th scope="col" className="px-1.5 py-1.5">
                  instructor Name
                </th>
                <th scope="col" className="px-1.5 py-1.5">
                  Due Date
                </th>
                <th scope="col" className="px-1.5 py-1.5">
                  Progress Bar
                </th>
                <th scope="col" className="px-1.5 py-1.5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                {enrolledCourses.map(course => (
                  <tr
                    key={course.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-1.5 py-1.5">
                      <img
                        className="rounded h-10 w-16"
                        src="https://placehold.co/600x400?font=roboto"
                        alt=""
                      />
                    </td>
                    <th
                      scope="row"
                      className="px-1.5 py-1.5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {course.name}
                    </th>

                    <td className="px-1.5 py-1.5"> {course.instructor} </td>
                    <td className="px-1.5 py-1.5 "> {course.dueDate}</td>
                    <td className="px-1.5 py-1.5 "> Progress Bar</td>
                    <td className=" px-2 py-2">
                      {course.completed ? (
                        <span className="text-green-500 font-semibold">
                          Completed
                        </span>
                      ) : (
                        <button
                          onClick={() => markAsCompleted(course.id)}
                          className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                        >
                          Mark as Completed
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

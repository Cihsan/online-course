import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./courseListSlice";
import CourseCard from "./CourseCard";
import CourseSearch from "./CourseSearch";

const CourseList = () => {
  const { loading, courses, error } = useSelector(state => state.courseList);
  const courseDispatch = useDispatch();
  useEffect(() => {
    courseDispatch(fetchCourses());
  }, [courseDispatch]);
  const [searchValue, setSearchValue] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchValue.toLowerCase())||
    course.instructor.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <CourseSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <CourseCard courses={filteredCourses} />
    </>
  );
};

export default CourseList;

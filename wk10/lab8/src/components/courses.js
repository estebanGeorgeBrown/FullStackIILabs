import React from "react";

const Course = ({ enrolled }) => {
  return (
    <div>
      <p>
        Student is enrolled in <b>Course</b> <b>{enrolled}</b>
      </p>
    </div>
  );
};

export default Course;

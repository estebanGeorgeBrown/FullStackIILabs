import React from "react";
import Course from "./courses";

const Student = (props) => {
  let array = [];
  for (var i = 0; i < props.enrolled; i++) {
    array.push(<Course enrolled={i} />);
  }
  return (
    <div>
      <p>
        Student <b>{props.name}</b> with student number <b>{props.number}</b>
      </p>
      {array}
    </div>
  );
};

export default Student;

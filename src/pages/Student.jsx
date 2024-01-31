import React from "react";
import { useParams } from "react-router-dom";
import { student } from "../data";

const Student = () => {
  const roll = useParams().roll;
  const curStudent = student.find((item) => item.roll == roll);

  return curStudent ? (
    <div>
      <div>Studnet Name: {curStudent.name}</div>
      <div>Studnet Roll: {curStudent.roll}</div>
    </div>
  ) : (
    <p>Loading..</p>
  );
};

export default Student;


import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./Review.css";
import people from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const showRandomPerson = () => {
    let randomUser = Math.floor(Math.random() * people.length);
    if (randomUser === index) {
      randomUser = index + 1;
    }
    setIndex(checkNumber(randomUser));
  };

  return (
    <article className="container-lg my-3 col-8 mx-auto p-3 border">
      <div className="container-md col-sm-4 col-6">
        <img
          className="img-fluid d-block mx-auto rounded my-2"
          src={image}
          alt={name}
        />
      </div>
      <p className="text-center display-6 mt-2">{name}</p>
      <p className="text-center lead text-primary">{job}</p>
      <p className="col-md-6 lead text-black text-center mx-auto my-2">
        {text}
      </p>
      <div className="d-flex justify-content-center mx-auto my-2">
        <button
          onClick={previousReview}
          type="button"
          className=" mx-2 btn btn-primary"
        >
          Prev
        </button>
        <button
          onClick={nextReview}
          type="button"
          className=" mx-2 btn btn-primary"
        >
          Next
        </button>
      </div>
      <button
        onClick={showRandomPerson}
        type="button"
        className="d-flex justify-content-center mx-auto btn btn-outline-secondary"
      >
        Show Random
      </button>
    </article>
  );
};

export default Reviews;

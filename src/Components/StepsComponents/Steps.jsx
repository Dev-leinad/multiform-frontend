import React from "react";

const Steps = ({steps, para, step }) => {
  return (
    <>
      <div className="step-box">
        <div className="row">
          <div className="index">
            <p>{step}</p>
          </div>
          <div className="steps">
            <p>{steps} </p>
            <h4>{para}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;

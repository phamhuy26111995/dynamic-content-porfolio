import React from "react";

function RealProjects() {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex gap-x-10">
          <div className="flex flex-col flex-1">
            <ItemFirstCol />
          </div>
          <div className="flex flex-col flex-1">
            <ItemSecondCol />
          </div>
        </div>
      </div>
    </section>
  );
}

function ItemFirstCol() {
  return (
    <>
      <div>
        <h2 className="h2 leading-tight text-accent">
          My Latest <br />
          Work.
        </h2>
        <p className="max-w-sm mb-16">
          I am working on Front-end also Back-end of these projects. With my
          knowledge of the system, I can deploy products by myself to the QA
          environment
        </p>
      </div>
      <div>
        <h2 className="h2 leading-tight text-accent">
          My Latest <br />
          Work.
        </h2>
        <p className="max-w-sm mb-16">
          I am working on Front-end also Back-end of these projects. With my
          knowledge of the system, I can deploy products by myself to the QA
          environment
        </p>
      </div>
    </>
  );
}

function ItemSecondCol() {
  return (
    <>
      <div>
        <h2 className="h2 leading-tight text-accent">
          My Latest <br />
          Work.
        </h2>
        <p className="max-w-sm mb-16">
          I am working on Front-end also Back-end of these projects. With my
          knowledge of the system, I can deploy products by myself to the QA
          environment
        </p>
      </div>
      <div>
        <h2 className="h2 leading-tight text-accent">
          My Latest <br />
          Work.
        </h2>
        <p className="max-w-sm mb-16">
          I am working on Front-end also Back-end of these projects. With my
          knowledge of the system, I can deploy products by myself to the QA
          environment
        </p>
      </div>
    </>
  );
}

export default RealProjects;

import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Summer 2023",
      title: "Student Software Engineer",
      place: "App Academy Software Engineering Bootcamp",
      desc: "Trained as a full-stack software engineer with a focus on JavaScript, Python, and React. Gained hands-on experience building dynamic web applications and developing RESTful APIs to connect frontend interfaces with backend services.",
    },
    {
      yearRange: "2021 - 2022",
      title: "Operator",
      place: "Renton Technical College",
      desc: "Operate and maintain CNC machines and tooling. Set up machines according to job specifications, load raw materials, and ensure they are properly secured.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2024 - 2025",
      title: "Associate Frontend Software Engineer",
      place: "Crusoe Energy",
      desc: "Built a dynamic, paginated audit log UI using React, TypeScript, and Jotai with advanced filters and structured tables. Developed reusable components aligned with Figma designs and collaborated across teams to integrate APIs, handle data states, and ensure consistent UX.",
    },
    {
      yearRange: "2024 - 2024",
      title: "Frontend Software Engineer (Intern)",
      place: "Crusoe Energy",
      desc: "Contributed to UI development by refactoring components into reusable, scalable modules and ensuring design consistency.",
    },
    {
      yearRange: "2021 - 2022",
      title: "Operator",
      place: "Spearman Corporation",
      desc: "Read and interpret mechanical documents and drawings. Set up and operate CNC machinery and tooling. Inspect and document defects with the parts.",
    },
    {
      yearRange: "2012 - 2020",
      title: "Manager",
      place: "McDonald's",
      desc: "Oversaw daily shift operations by managing employee schedules, assigning responsibilities, and coordinating break times. Resolved customer complaints and internal staff conflicts to maintain a smooth work environment. Trained and onboarded new team members to ensure consistent service quality.",
    },
  ];

  const skills = [
    {
      name: "TypeScript",
      percent: 100,
    },
    {
      name: "JavaScript",
      percent: 100,
    },
    {
      name: "React",
      percent: 100,
    },
    {
      name: "Python",
      percent: 70,
    },
    {
      name: "Jotai",
      percent: 90,
    },
    {
      name: "Figma",
      percent: 70,
    },
    {
      name: "HTML/CSS",
      percent: 80,
    },
    {
      name: "Tailwind CSS",
      percent: 80,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        {/* <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;

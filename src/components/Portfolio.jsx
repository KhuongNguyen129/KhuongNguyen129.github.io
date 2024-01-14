import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    // DESIGN: "Desing",
    // BRAND: "Brand",
    // PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Khuongbnb",
      projectInfo:
        "Created a clone of Airbnb through the design and development of a web application using React, Express, JavaScript, and CSS. Demonstrated proficiency in full-stack web development by using React for a frontend structure, utilizing Express for backend (server-side) operations, incorporating JavaScript for enhanced functionality, and implementing CSS for an appealing design.",
      technologies: "HTML, CSS, JavaScript, Express, React.js",
      date: "August 2023",
      url: {
        name: "https://khuongbnb.onrender.com/",
        link: "https://khuongbnb.onrender.com/",
      },
      // socialLinks: {
      //   mail: "khuong.nguyen129@gmail.com",
      // },
      thumbImage: "https://cdn.discordapp.com/attachments/1110721109076221993/1195903928341102642/image.png",
      sliderImages: [
        "https://cdn.discordapp.com/attachments/1110721109076221993/1195904356730556436/image.png",
        "https://cdn.discordapp.com/attachments/1110721109076221993/1195904643507695626/image.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Kelp",
      projectInfo:
        "Developed Kelp, a full-stack web application featuring Flask for the backend API route, React.js for the frontend user interface, and CSS for styling. Collaborated with three other developers to complete this project within a one-week timeframe. The website is a clone of Yelp, incorporating a SpongeBob SquarePants theme for a playful user experience.",
      technologies: "HTML, CSS, Flask, Python, JavaScript, React.js ",
      date: "November 2023",
      url: {
        name: "https://kelp-sqpk.onrender.com/",
        link: "https://kelp-sqpk.onrender.com/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "https://cdn.discordapp.com/attachments/1110721109076221993/1195910174259564616/image.png",
      sliderImages: [
        "https://cdn.discordapp.com/attachments/1110721109076221993/1195910293130334220/image.png",
        "https://cdn.discordapp.com/attachments/1110721109076221993/1195910377184170055/image.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Bet2Win",
      projectInfo:
        "Developed Bet2Win, a full-stack web application featuring Flask for the backend API route, React.js for the frontend user interface, and CSS for styling.",
      client: "Ruby Clinton",
      technologies: "HTML, CSS, Flask, Python, JavaScript, React.js ",
      date: "December 2023",
      url: {
        name: "https://bet2win.onrender.com/games",
        link: "https://bet2win.onrender.com/games",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "https://cdn.discordapp.com/attachments/1110721109076221993/1195912430971260958/image.png",
      sliderImages: [
        "https://cdn.discordapp.com/attachments/1110721109076221993/1195912554443190322/image.png",
        "https://media.discordapp.net/attachments/1110721109076221993/1195912554732589096/image.png",
      ],
      categories: [filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;

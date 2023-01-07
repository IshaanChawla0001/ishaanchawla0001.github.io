/*----------- CUSTOM JS SCRIPTS -----------*/

(function ($) {
  "use strict";
  $(function () {
    // Code here executes When the DOM is loaded...
  });
  $(window).on("load", function () {
    // Code here executes When the page is loaded

    "use strict";
    const ishaan = {
      fullName: "Ishaan Chawla",
      phoneNumber: "+1 (650) 267-0035",
      email: "Ishaanchawla35@gmail.com",
      loc: "New York, United States",
      birthString: "1997/11/21",
      education: [
        {
          major: "Bacherlor's in Computer Science",
          college: "SBSSTC",
          year: "2015-2019",
          location: "Ferozrpur",
          country: "India",
        },
        {
          major: " Master's in Computer Science",
          college: "Pace University",
          year: "2020-2022",
          location: "New York City",
          country: "United States",
        },
      ],
      experince: {
        amazon: [
          "Software Development Engineer",
          "Amazon Web Series",
          "March 2022 - June 2022",
        ],
        dataflake: [
          "Software Development Engineer",
          "Data Flake",
          "June 2022 - December 2022",
        ],
        itres: [
          "Software Development Engineer",
          "IT Resources Inc.",
          "December 2022 - Present",
        ],
      },
      about: {
        logo: ["html5", "css3", "js", "react", "python", "java", "git", "ds"],
        techStack: [
          "Html5",
          "CSS3",
          "JavaSrcipt",
          "React",
          "Pyhton",
          "Java",
          "Git",
          "Data Strcutures",
        ],
      },
      resume: {
        percentage: [98, 95, 95, 96, 97, 95, 96, 95],
      },
      getCurrentage() {
        const today = new Date();
        const birthDate = new Date(this.birthString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
          month < 0 ||
          (month === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age;
      },
    };

    // About Me Page.
    document.querySelector(
      ".content-title"
    ).textContent = `I'm ${ishaan.fullName}!`;
    document.getElementById("about-name").textContent = ishaan.fullName;
    document.getElementById("about-email").textContent = ishaan.email;
    document.getElementById("about-age").textContent = ishaan.getCurrentage();
    document.getElementById("about-location").textContent = ishaan.loc;

    const rowTechStack = document.getElementById("row-tech-stack");

    let stack = "";
    for (let i = 0; i < ishaan.about.logo.length; i++) {
      stack += `<div
      class="single-item col-6 col-lg-4 design"
    >
      <a
        class="portfolio-item"
        href="img/techstack/${ishaan.about.logo[i]}.png"
        data-lightbox
      >
        <div class="portfolio-wrapper">
          <img class="img-fluid" alt="Item" src="img/techstack/${ishaan.about.logo[i]}.png" />
          <div class="item-content">
            <h6 class="content-title">${ishaan.about.techStack[i]}</h6>
          </div>
        </div>
      </a>
    </div>`;
    }
    rowTechStack.innerHTML = stack;

    // resume Page.
    const education = document.getElementById("education-resume");
    const experince = document.getElementById("experience-resume");
    const skls1 = document.getElementById("skill1");
    const skls2 = document.getElementById("skill2");

    skls1.innerHTML = "";
    skls2.innerHTML = "";

    let edu = "";
    let exp = "";
    let sk1 = "";
    let sk2 = "";
    ishaan.education.forEach(function (element) {
      console.log(element);
      edu += ` <div class="resume-item">
      <span class="item-arrow"></span>
      <h5 class="item-title">${element.major}</h5>
      <span class="item-details"
        >${element.college}: ${element.year}</span
      >
      <p class="item-description">
        ${element.location}, ${element.country}
      </p>
    </div>`;
    });

    for (let i = 0; i < ishaan.about.logo.length; i++) {
      sk1 += `<div class="single-skill" data-percentage="${ishaan.resume.percentage[i]}">
      <div class="skill-info">
        <span class="skill-name">${ishaan.about.techStack[i]}</span
        ><span
          class="skill-percentage"
          style="margin-right: 28.5px"
          >${ishaan.resume.percentage[i]}%</span
        >
      </div>
      <div class="progress skill-progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${ishaan.resume.percentage[i]}"
          style="width: ${ishaan.resume.percentage[i]}%"
        ></div>
      </div>
    </div>`;

      i += 1;
      sk2 += `<div class="single-skill" data-percentage="${ishaan.resume.percentage[i]}">
      <div class="skill-info">
        <span class="skill-name">${ishaan.about.techStack[i]}</span
        ><span
          class="skill-percentage"
          style="margin-right: 28.5px"
          >${ishaan.resume.percentage[i]}%</span
        >
      </div>
      <div class="progress skill-progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${ishaan.resume.percentage[i]}"
          style="width: ${ishaan.resume.percentage[i]}%"
        ></div>
      </div>
    </div>`;
    }

    education.insertAdjacentHTML("afterend", edu);
    // experince.insertAdjacentHTML("afterend", exp);
    skls1.innerHTML = sk1;
    skls2.innerHTML = sk2;

    // Contact Me Page.
    document.getElementById("contact-fullName").textContent = ishaan.fullName;
    document.getElementById("contact-location").textContent = ishaan.loc;
    document.getElementById("contact-phone").textContent = ishaan.phoneNumber;
    document.getElementById("contact-Email").textContent = ishaan.email;
  });
})(jQuery);

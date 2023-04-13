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
      email: "Chawlaishaan35@gmail.com",
      loc: "New York, United States",
      birthString: "1997/11/21",
      education: [
        {
          major: "Bachelor's in Computer Science",
          college: "SBSSTC",
          year: "2015-2019",
          location: "Ferozepur",
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
      experince: [ 
        {
          title: "Mobile Front End Developer",
          org: "Construct AI",
          time: "March 2023 - Present",
          location: "New Jersey, United States",
        },
        {
          title: "React UI Frontend Developer",
          org: "CNBC",
          time: "May 2021 - Feb 2023",
          location: "New York, United States",
        },
        {
          title: "Software Engineer",
          org: "News18 India",
          time: "Jan 2019 - Jan 2020",
          location: "Delhi, India",
        },
      ],
      about: {
        logo: ["html5", "css3", "js", "react", "python", "java", "git", "ds"],
        techStack: [
          "Html5",
          "CSS3",
          "JavaScript",
          "React",
          "Pyhton",
          "Java",
          "Git",
          "Data Structures",
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

    ishaan.experince.forEach(function (element) {
      exp += ` <div class="resume-item">
      <span class="item-arrow"></span>
      <h5 class="item-title">${element.title}</h5>
      <span class="item-details">${element.org}: ${element.time}</span>
      <p class="item-description">${element.location}</p>
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
    experince.insertAdjacentHTML("afterend", exp);
    skls1.innerHTML = sk1;
    skls2.innerHTML = sk2;

    // Contact Me Page.
    document.getElementById("contact-fullName").textContent = ishaan.fullName;
    document.getElementById("contact-location").textContent = ishaan.loc;
    document.getElementById("contact-phone").textContent = ishaan.phoneNumber;
    document.getElementById("contact-Email").textContent = ishaan.email;
  });
})(jQuery);

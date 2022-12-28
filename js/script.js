"use strict";
const ishaan = {
  fullName: "Ishaan Chawla",
  phoneNumber: "+1 (650) 267-0035",
  email: "Ishaanchawla35@gmail.com",
  loc: "New York, United States",
  birthYear: 1997,
  education: {
    bachelor: {
      major: "Computer Science",
      bachelorCollege: "SBSSTC",
      year: "2015-2019",
      location: "Ferozrpur",
      country: "India",
    },
    master: {
      major: "Computer Science",
      bachelorCollege: "Pace University",
      year: "2020-2022",
      location: "New York City",
      country: "United States",
    },
  },
  getCurrentage() {
    return new Date().getFullYear() - this.birthYear;
  },
};

console.log(ishaan.loc);
// About Me Page.
document.querySelector(
  ".content-title"
).textContent = `I'm ${ishaan.fullName}!`;
document.getElementById("about-name").textContent = ishaan.fullName;
document.getElementById("about-email").textContent = ishaan.email;
document.getElementById("about-age").textContent = ishaan.getCurrentage();
document.getElementById("about-location").textContent = ishaan.loc;

// Contact Me Page.
document.getElementById("contact-fullName").textContent = ishaan.fullName;
document.getElementById("contact-location").textContent = ishaan.loc;
document.getElementById("contact-phone").textContent = ishaan.phoneNumber;
document.getElementById("contact-Email").textContent = ishaan.email;

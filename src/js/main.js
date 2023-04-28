// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import emailjs from "@emailjs/browser";

import AOS from "aos";

AOS.init({
  once: true,
  duration: 1000, // values from 0 to 3000, with step 50ms
});

emailjs.init("MgcX3FIwAK5Guq8BG");

document.getElementById("year").innerHTML = new Date().getFullYear();

const sections = document.querySelectorAll("section");
const links = Array.from(document.querySelectorAll(".nav-link")).reduce(
  (result, link) => {
    result.set(link.hash.replace("#", ""), link);
    return result;
  },
  new Map()
);

const options = {
  threshold: 0.3,
};
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add active class to the section that is currently in view
      links.get(entry.target.id).classList.add("active");
    } else {
      // Remove active class from the section that is no longer in view
      links.get(entry.target.id).classList.remove("active");
    }
  });
}
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => {
  observer.observe(section);
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  contactForm.reset();

  emailjs.send("service_j8jqgeh", "template_t1cf9md", templateParams).then(
    (response) => {
      const toastSuccess = new bootstrap.Toast(
        document.getElementById("toast-success")
      );
      toastSuccess.show();
    },
    (error) => {
      const toastError = new bootstrap.Toast(
        document.getElementById("toast-error")
      );
      toastError.show();
    }
  );
});

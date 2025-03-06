/*!
 * Template Name: Quazm - Landing Page Templates
 * Author: BullTheme
 * Version: 1.0.0
 * Website: https://bulltheme.com
 * Contact: imbulltheme@gmail.com
 * File: Main Js File
 */

$(function () {
  "use strict";

  var wind = $(window);

  // Navbar sticky
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar"),
      logo = $(".navbar-brand > img");

    if (bodyScroll > 100) {
      navbar.addClass("nav-sticky");
    } else {
      navbar.removeClass("nav-sticky");
    }
  });

  // Close navbar-collapse when a link is clicked
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // Sections background image from data background
  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  // Dark mode
  // const themeToggler = document.getElementById('theme-toggler');
  // const html = document.documentElement;
  // const lightIcon = document.getElementById('light');
  // const darkIcon = document.getElementById('dark');
  // const darklogofooter = document.getElementById('dark-logo-footer');
  // const lightlogofooter = document.getElementById('light-logo-footer');

  // const applyTheme = (theme) => {
  //     if (theme === 'dark') {
  //         html.setAttribute('data-bs-theme', 'dark');
  //         lightIcon.style.display = 'none';
  //         darkIcon.style.display = 'block';
  //         darklogofooter.style.display = 'none';
  //         lightlogofooter.style.display = 'block';
  //     } else {
  //         html.setAttribute('data-bs-theme', 'light');
  //         lightIcon.style.display = 'block';
  //         darkIcon.style.display = 'none';
  //         darklogofooter.style.display = 'block';
  //         lightlogofooter.style.display = 'none';
  //     }
  // };

  const storedTheme = sessionStorage.getItem("theme");
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    applyTheme("light");
  }

  themeToggler.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    sessionStorage.setItem("theme", newTheme);
  });

  // LTR to RTL
  // const toggleButton = document.getElementById('toggle-direction');
  // function updateButtonText() {
  //     if (html.getAttribute('dir') === 'ltr') {
  //         toggleButton.textContent = 'LTR';
  //     } else {
  //         toggleButton.textContent = 'RTL';
  //     }
  // }

  // updateButtonText();

  // toggleButton.addEventListener('click', function () {
  //     if (html.getAttribute('dir') === 'ltr') {
  //         html.setAttribute('dir', 'rtl');
  //         document.getElementById('bootstrap-style').setAttribute('href', 'assets/css/bootstrap-rtl.min.css');
  //         document.getElementById('app-style').setAttribute('href', 'assets/css/app-rtl.min.css');
  //     } else {
  //         html.setAttribute('dir', 'ltr');
  //         document.getElementById('bootstrap-style').setAttribute('href', 'assets/css/bootstrap.min.css');
  //         document.getElementById('app-style').setAttribute('href', 'assets/css/app.min.css');
  //     }
  //     updateButtonText();
  // });
});

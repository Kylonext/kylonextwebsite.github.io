$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".navigation, .nav-img, .home, .about-home, .gambar3", {
  origin: "top",
});

ScrollReveal().reveal(".about-container, .about-blog, .gambar2", {
  origin: "bottom",
});

ScrollReveal().reveal(
  ".course, .profile, .trust, .about-feature, .blog-container, .gambar1",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(".features, .registration, .course-inner, .contact, .gambar4, .trust2", {
  origin: "right",
});
let searchIcon = document.getElementById("search");
let searchInput = document.querySelector(".nav2 div .search input");

searchIcon.onclick = () => {
  searchIcon.style.display = "none";
  searchInput.style.display = "block";
  if ((searchInput.style.display = "block")) {
    searchInput.focus();
  }
  searchInput.focus();

  if (searchInput.value == "") {
    setTimeout(() => {
      searchIcon.style.display = "block";
      searchInput.style.display = "none";
    }, 25000);
  }
};

// animations to my website
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// animation to 3 cards
ScrollReveal().reveal(".con-under-img div", {
  delay: 200,
  origin: "bottom",
  interval: 200,
});

// animation to titles
ScrollReveal().reveal(".first-con-about h1", { delay: 500, origin: "left" });

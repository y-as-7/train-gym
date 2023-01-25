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




//humborgar icon

let humburger = document.getElementById("humburger");
let spans = document.querySelectorAll("#humburger span");
let list=document.getElementById("list")
let main=document.querySelector("main")
humburger.onclick=()=>{
  window.scrollTo(0, 0);
  if(list.classList.contains("inactive")){
    list.classList.add("active")
    list.classList.remove("inactive");
    main.style.marginTop="unset"
    spans[1].style.width="30px"
    spans[2].style.width="20px"
    list.style.animationName="asd"
    list.style.animationDuration="2s"
    list.style.animationDirection = "alternate";
    list.style.animationTimingFunction="ease";
    list.style.animationFillMode = "backwards";

    
  }else{
    list.classList.remove("active");
    list.classList.add("inactive")
    main.style.marginTop="50px"
    spans.forEach((e)=>{
      e.style.width="50px"
    })
  }
}
let links=document.querySelectorAll("#list ul li a");
console.log(links)

links.forEach((e)=>{
  e.onclick=()=>{
    list.classList.remove("active")
    list.classList.add("inactive");
    main.style.marginTop="50px"
  }
})


// condation 
if (window.innerWidth >= 839) {
  main.style.marginTop = "0";
}

window.onresize=()=>{
  if (window.innerWidth >= 839) {
    main.style.marginTop = "0";
  }else{
    main.style.marginTop = "50px";
  }
}


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

//animation about us
ScrollReveal().reveal(".about-us .first-con-about .card", {
  delay: 200,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about-us .first-con-about p", {
  delay: 200,
  origin: "right",
  interval: 200,
});


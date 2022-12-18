
let searchIcon =document.getElementById("search");
let searchInput=document.querySelector(".nav2 div .search input");

searchIcon.onclick = () => {
  searchIcon.style.display = "none";
  searchInput.style.display="block";
  if (searchInput.style.display = "block") {
    searchInput.focus();
  }
  searchInput.focus();

if(searchInput.value==""){
    setTimeout(() => {
        searchIcon.style.display = "block";
        searchInput.style.display = "none";
    }, 15000);
}
 
};










console.log("hoge");

const searchbox = document.getElementById("task-name-suggestion");
const searchbutton = document.getElementById("search-button");
searchbox.addEventListener("change", (e) => {
  searchbutton.to = searchbox.value;
});

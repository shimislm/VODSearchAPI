import VODClass from "./vodClass.js";
import {declareEvents} from "./viewEvents.js";
let select = document.querySelector("#id_select");
let moviesArr = [];
const urlParams = new URLSearchParams(window.location.search);
let input = document.querySelector("#id_input")
const init = () => {
  updateLoading();
    doApi();
  declareEvents(doApi,creatMoviesList);
}

const doApi = () => {
  input.value="";
  let _searchQuery = urlParams.get("s")? urlParams.get("s") : "red"
  let url = `https://www.omdbapi.com/?s=${_searchQuery}&apikey=26dac8a0`;
  fetch(url)
  // בפרומיס הראשון מחזיר את ההידר שיש בו סטטוס ופונצקיה שמחזירה
  // גם היא פרומיס ומפרסרת לג'ייסון את המידע שהגיע מהשרת
  .then(resp => resp.json())
  .then(data => {
    // console.log(data.Search);
    creatMoviesList(data.Search)
  })
}
const updateLoading =() =>{
  document.querySelector("#id_row").style.display = "none";
}
const creatMoviesList = (_ar = moviesArr) => {
  moviesArr = _ar;
  _ar = _.sortBy(_ar, select.value)
  document.querySelector("#id_row").style.display = "flex";
  document.querySelector("#id_loading").style.display = "none";
  document.querySelector("#id_row").innerHTML = "";
  _ar.forEach(item => {
    let mov = new VODClass("#id_row",item);
    mov.render();
  })
}

init();
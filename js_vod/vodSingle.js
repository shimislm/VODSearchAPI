// קובץ שאחראי על הדפים של הצגת מידע נוסף 
// על סרטון
const urlParams = new URLSearchParams(window.location.search);
const init = () => {
  updateLoading();
  doApi()
}
const doApi = () => {
  let idMovie = urlParams.get("id");
  // console.log(idMovie)
  if(idMovie){
    let url = `http://www.omdbapi.com/?i=${idMovie}&apikey=5a292f28`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      createSingleUi(data);
    })
  }
}
const updateLoading =() =>{
  document.querySelector("#id_parent").style.display = "none";
}

const createSingleUi = singleData =>{
  console.log(singleData)
  document.querySelector("#id_parent").style.display = "block";
  document.querySelector("#id_loading").style.display = "none";
  
  let poster = !(singleData.Poster==="N/A") ? singleData.Poster : "https://freesvg.org/img/1457633527.png";
  let div = document.createElement("div");
  document.querySelector("#id_parent").append(div);
  div.innerHTML =`
    <h2 class="text-center">${singleData.Title}</h2>
    <img id="id_img" src="${poster}" alt="">
    <h1 id="id_h1">${singleData.Title}</h1>
    <div>Score:${singleData.Metascore}<span id="id_score"></span></div>
    <div>Run time:<span id="id_runtime"> ${singleData.Runtime}</span></div>
    <p class="col-md-6 mx-auto">Plot:<span class="" id="id_span">${singleData.Plot}</span></p>
    <p class="col-md-6 mx-auto">Category: <span class="" id="id_span">${singleData.Genre}</span></p>
    <p class="col-md-6 mx-auto">Year:<span class="" id="id_span">${singleData.Year}</span></p>
    <p class="col-md-6 mx-auto">Writer: <span class="" id="id_span">${singleData.Writer}</span></p>
    <button class="back_btn btn btn-info">Back to list</button>
  `
  let btn = div.querySelector(".back_btn")
  btn.addEventListener("click",()=>{
    history.back();
  })
}


init();

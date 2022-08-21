export const declareEvents =(doApi,creatMoviesList)=>{
    let input = document.querySelector("#id_input")
    let btnSearch = document.querySelector("#search_btn");
    let select = document.querySelector("#id_select");

    btnSearch.addEventListener("click", () => { 
      document.querySelector("#id_row").innerHTML = "";
      window.location.assign(`../index.html?s=${input.value}`)
      doApi();
    })
    input.addEventListener("keydown", (e)=>{
      if(e.key=="Enter"){
        window.location.assign(`../index.html?s=${input.value}`)
        doApi();
      }
    })
    select.addEventListener("change", ()=>{
      creatMoviesList();
    })

  }
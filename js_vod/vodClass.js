export default class VODClass {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.Poster = !(_item.Poster==="N/A") ? _item.Poster : "https://freesvg.org/img/1457633527.png";
    console.log(_item.Poster)
    this.Title = _item.Title;
    this.Year = _item.Year;
    this.id = _item.imdbID;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-md-4 p-2";
    document.querySelector(this.parent).append(div);

    div.innerHTML = `
    <article class="p-2 shadow overflow-hidden h-100">
    <img src="${this.Poster}" alt="${this.Title}"  class="w-25 float-end ms-2">
    <h2>${this.Title}</h2>
    <div>Year:${this.Year}</div>
    <a href="#" class="btn readMore btn-warning flex-self-end mt-2 more_btn">More info</a>
    </article>
    `
    let btn = div.querySelector(".more_btn");
    btn.addEventListener("click",()=>{
      // alert(this.id);
      btn.href = `vodSingle.html?id=${this.id}`;
    })
  }
}
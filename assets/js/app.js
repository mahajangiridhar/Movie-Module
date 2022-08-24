let cl = console.log;

const showModalBtn = document.getElementById("showModalBtn")
const backdrop = document.getElementById("backdrop")
const myModal = document.getElementById("myModal")
const addMovieBtn = document.getElementById("addMovieBtn")
const cancelMovieBtn = document.getElementById("cancelMovieBtn");
const myClose = Array.from(document.querySelectorAll(".myClose"))
let title = document.getElementById("title")
let url = document.getElementById("url")
let rating = document.getElementById("rating")
let movies = document.getElementById("movies")
let arr = [];


function onClick(){
    backdrop.classList.toggle("show")
    myModal.classList.toggle("show")
}
function addMovieHandler(){
    let obj={
        title : title.value,
        url : url.value,
        rating : rating.value
    }
    arr.push(obj)
    // cl(arr)
        title.value = "",
        url.value= "",
        rating.value = ""
        onClick()
        movieArr(arr)
        localStorage.setItem("movieInfo", JSON.stringify(arr))
}
function movieArr(ele){
    let result = "";
    ele.forEach(item => {
        result += `<div class="col-sm-3 mb-4">
        <div class="card">
            <div class="card-body">
                <figure>
                    <img src="${item.url}" alt="${item.title}" class="img-fluid">
                    <figcaption>
                        <div class="title">${item.title}</div>
                        <span>${item.rating}/5</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>`
    })
    movies.innerHTML = result;
}
movieArr(arr)
if(JSON.parse(localStorage.getItem("movieInfo"))){
    arr = JSON.parse(localStorage.getItem("movieInfo"))
    movieArr(arr)
}

myClose.forEach(dObj=> {
    dObj.addEventListener("click", onClick)
})

showModalBtn.addEventListener("click", onClick)
addMovieBtn.addEventListener("click", addMovieHandler)
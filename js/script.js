allFigures = document.querySelector("#main").querySelectorAll("figure");

if (allFigures.length % 2 != 0){
    allFigures[allFigures.length-1].classList.add("col-xl-9");
    allFigures[allFigures.length-1].classList.remove("col-xl-6");
}
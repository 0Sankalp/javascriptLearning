document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red"


Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "brown";
})
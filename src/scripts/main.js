const darkTheme = document.querySelector(".darkmode__navbar");

//data-theme body
darkTheme.addEventListener("click", function(){
    if(document.body.getAttribute("data-theme") === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

//Does the user want a dark theme?
const userDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Did the user already indicate a preference on our site?
let theme = localStorage.getItem("theme");
if((!theme && userDark) || (theme === "dark")){
    dark();
} else if(theme === "light"){
    light();
}

//function dark
function dark(){
    document.body.setAttribute("data-theme", "dark");
}
//function light
function light(){
    document.body.setAttribute("data-theme", "light");
}

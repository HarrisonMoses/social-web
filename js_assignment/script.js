var settingsmenu=document.getElementById("submenu");
var darkbtn=document.getElementById("dark-btn");
//this function aclls for the menu-settings drop-down 
function settingMenuToggle(){
 settingsmenu.classList.toggle("settings-menu-height");
}
//this function enables switch from light to dark mode
darkbtn.onclick=function(){
darkbtn.classList.toggle("dark-btn-on");
document.body.classList.toggle("dark-theme");
if (localStorage.getItem("theme"=="light")){
    localStorage.setItem("theme","dark");
}
else{
    localStorage.setItem("theme","light");
}
}

if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");   
}

else{
    localStorage.setItem("theme","light");
}


localStorage.setItem("theme","dark");
localStorage.getItem("theme");

let input_file = document.querySelector('input[type="file"]');
        let profile_img = document.querySelector('.profile label');

        input_file.onchange = (e) => {
            // accessing 1st choosen file
            let file = e.target.files[0];

            // Store "file's data" with the help of "URL Object"
            let url = URL.createObjectURL(file);

            // Changing background of 'label' and hiding user emoji icon
            profile_img.style.background = `url(${url}) center / cover no-repeat`;
            profile_img.querySelector('.user').style.display = "none";

            // Free up memory space (better perfomance)
            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 100)
        }
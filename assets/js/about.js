const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
toggle.onclick= ()=>{
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}
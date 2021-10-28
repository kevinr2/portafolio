const seccion = new fullpage('#fullpage',{
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['s1', 's2', 's3','s4'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['Header', 'Section #1', 'Section # 3', 'hola'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    scrollBar: true,
    autoScrolling: true,
});


/* toggle */
const toggle = document.getElementById('toggle');
const fpNav= document.getElementById('fp-nav');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
toggle.onclick= ()=>{
    toggle.classList.toggle('active')
    fpNav.classList.toggle('actived')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}
/* gsap*/
/* const sect = document.querySelector('#s1')

const visible = (entries)=>{
    const entry = entries[0]
    console.log(entry)
    if(entry.isIntersecting=== true){
        icon.classList.add('bl2')
    }else{
        icon.classList.remove('bl2')
    }

}

const observer = new IntersectionObserver(visible)


observer.observe(sect) */

window.addEventListener('scroll',()=>{
    progreso()
})
const icon = document.querySelector('#nav')
const progreso = ()=>{
    let progreso = document.documentElement.scrollTop;
    console.log("progreso: "+ progreso)
    if (progreso >= '649' && progreso <= '1313' || progreso >='1969') {
        toggle.classList.add('toggle-2')
        icon.classList.add('bl2')
        icon.classList.remove('bl')
    }
    else {
        toggle.classList.remove('toggle-2')
        icon.classList.remove('bl2')
        icon.classList.add('bl')
    }
}


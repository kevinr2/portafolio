const seccion = new fullpage('#fullpage',{
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['s1', 's2', 's3','s4'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['Header', 'Section #1', 'Section # 3', 'hola'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    scrollBar: true,
    autoScrolling: true

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
/*efectos menu scroll*/
window.addEventListener('scroll',()=>{
    progreso()
})
const icon = document.querySelector('#nav')
const span = document.querySelectorAll('#v1')

const progreso = ()=>{
    
    let progreso = document.documentElement.scrollTop;
    console.log(progreso)
    if (progreso >= '568' && progreso <= '1135' || progreso >='1703') {
        toggle.classList.add('toggle-2')
        icon.classList.add('bl2')
        icon.classList.remove('bl')
        span.forEach(item => item.classList.add('navS'))
    }

    else {
        toggle.classList.remove('toggle-2')
        icon.classList.remove('bl2')
        icon.classList.add('bl')  
        span.forEach(item => item.classList.remove('navS'))
    }
}
/* gsap */


gsap.registerPlugin(ScrollTrigger);



gsap.from('.title-home', {
    duration:2,
    transformOrigin:"0 100%",
    stagger: 2 ,
    rotate:-90,
    
})
gsap.from('.nombre', {
    duration:2,
    opacity:-1,
    delay:0.3
})
gsap.from('#p1', {
    duration:2,
    opacity:-1,
    y:200,
    delay:0.8
})
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.s2',//de donde va el tigger
        start:"top bottom",
        end:'bottom 100px',    
    }
})
 const cuadro2 = document.querySelector('.cuadro2')
 const iconCuadra = document.querySelector('#otro')
 tl.from(cuadro2,{x:-300, opacity:-1,duration:3});
 tl.from(iconCuadra,{x:300, opacity:-1,duration:2},'-=2.5');





    const cuadro = document.querySelector('.home-s2');
    cuadro.addEventListener("mousemove", (e)=>{
        const layer = document.querySelectorAll('#icons');
        layer.forEach((layer) =>{
            const speed = layer.getAttribute('data-mov')
            const x = (cuadro.innerWidth = e.pageX*speed)/100
            const y = (cuadro.innerHeight = e.pageY*speed)/100
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    })
 


const seccion = new fullpage('#fullpage',{
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['s1', 's2', 's3','s4'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['Header', 'Section #1', 'Section # 3', 'Footer'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
});


/* toggle */
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
toggle.onclick= ()=>{
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}
# TFLM2
Podemos ver el trabajo bien estructurado en carpetas segun lo que se haga en cada una


Este archivo CSS define los estilos para una página web con una estructura clara y moderna. Contiene estilos para la navegación, secciones de contenido, un formulario de contacto y un carrusel de imágenes.

1. Estilos Globales

body: Define el color de fondo y el tipo de fuente.

Variables CSS: Utiliza var(--text-color), var(--primary-color), y var(--secondary-color) para personalizar los colores.

body {
    background-color: #f4f4f4;
    color: var(--text-color);
    font-family: Arial, sans-serif;
}

2. Encabezado y Navegación

header: Barra de navegación con fondo oscuro.

nav ul: Menú de navegación centrado.

nav ul li a: Estilos de enlaces del menú.

header {
    background-color: #333;
    padding: 10px 0;
}

3. Secciones de Contenido

hero: Sección principal con fondo en gradiente.

about: Sección "Acerca de" con lista de información.

projects-list: Contenedor de proyectos.

project: Define los estilos de cada proyecto.

.hero {
    text-align: center;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    padding: 40px 20px;
}

4. Formulario de Contacto

Contenedor estilizado con bordes redondeados y sombra.

Inputs y botones con diseño responsivo y transiciones.

.contact {
    padding: 30px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

5. Carrusel de Imágenes

carousel-container: Contenedor principal del carrusel.

carousel-item: Oculta las imágenes no activas.

Botones prev y next: Flechas para navegar entre imágenes.

.carousel-item {
    display: none;
}

.carousel-item.active {
    display: block;
}

6. Responsividad

Se aplica un @media query para adaptar el diseño en pantallas pequeñas.

El menú de navegación se ajusta a una columna.

@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        text-align: center;
    }
}

7. Integración con HTML

Este CSS se usa en las siguientes páginas HTML:

index.html: Página principal con una sección de bienvenida y un carrusel.

about.html: Página sobre el autor con información y habilidades.

projects.html: Muestra una lista de proyectos con títulos y descripciones.

contact.html: Contiene un formulario para contactar al autor.

Conclusión

Este archivo CSS organiza la apariencia de la página de manera estructurada, asegurando una experiencia de usuario agradable y responsiva.


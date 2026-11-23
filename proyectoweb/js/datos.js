
const DATOS = {
categorias: [
{ id: "madera", nombre: "MADERA" },
{ id: "ceramica-tela", nombre: "CERÁMICA Y TELA" },
{ id: "exploracion", nombre: "EXPLORACIÓN MATERIAL" },
{ id: "digital", nombre: "DIGITAL" }
],

proyectos: [
{
slug: "miau-armchair",
titulo: "Réplica Miau Armchair — Koyori",
cat: "madera",
pagina: "proyecto-miau-armchair.html",
principal: "../img/imagen-7.jpg",
mini: "../img/imagen-7-mini.jpg",
alt: "Réplica de la Miau Armchair en madera de okumé",
resumen: "Proyecto que consistió en reproducir una silla asignada aleatoriamente a cada estudiante, utilizando imágenes de referencia para interpretar sus dimensiones, proporciones y sistemas de encaje, buscando aproximarse lo más posible al diseño original.",
contener: false,
imagenes: [
{
src: "../img/imagen-7.jpg",
mini: "../img/imagen-7-mini.jpg",
alt: "Réplica de la Miau Armchair en madera de okumé"
},
{
src: "../img/imagen-6.jpg",
mini: "../img/imagen-6-mini.jpg",
alt: "Detalle del respaldo de la Miau Armchair"
}
]
},

{
slug: "rokae",
titulo: "ROKAE",
cat: "exploracion",
pagina: "proyecto-rokae.html",
principal: "../img/imagen-11.jpg",
mini: "../img/imagen-11-mini.jpg",
alt: "Mesa Rokae de piedra y arenilla volcánica",
resumen: "Rokae es una propuesta de mobiliario inspirada en la estética monolítica, que explora la convergencia entre procesos industriales y artesanales para dar forma a piezas de presencia sólida y carácter escultórico. Su materialidad, compuesta por piedra y arenilla volcánica, permite experimentar con diversas técnicas de fabricación, desde el moldeo hasta la elaboración manual, haciendo de cada proceso una oportunidad para revelar texturas, huellas y terminaciones propias del material.",
contener: false,
imagenes: [
{
src: "../img/imagen-11.jpg",
mini: "../img/imagen-11-mini.jpg",
alt: "Mesa Rokae de piedra y arenilla volcánica"
},
{
src: "../img/imagen-12.jpg",
mini: "../img/imagen-12-mini.jpg",
alt: "Mesa Rokae junto a una persona, para ver su escala"
},
{
src: "../img/imagen-13.jpg",
mini: "../img/imagen-13-mini.jpg",
alt: "Vista lateral de la mesa Rokae"
},
{
src: "../img/imagen-14.jpg",
mini: "../img/imagen-14-mini.jpg",
alt: "Detalle de la unión de los módulos de Rokae"
}
]
},

{
slug: "cnx-13",
titulo: "CNX-13",
cat: "exploracion",
pagina: "proyecto-cnx-13.html",
principal: "../img/imagen-15.jpg",
mini: "../img/imagen-15-mini.jpg",
alt: "Mueble modular CNX-13 de tubos metálicos",
resumen: "CNX 13 desarrolla un sistema modular que articula lo orgánico y lo industrial, inspirándose en las conexiones que conforman tanto las estructuras biológicas como las redes humanas. Su concepto se materializa en la intersección de tubos, donde cada unión prolonga y da continuidad al recorrido estructural.",
contener: false,
imagenes: [
{
src: "../img/imagen-15.jpg",
mini: "../img/imagen-15-mini.jpg",
alt: "Mueble modular CNX-13 de tubos metálicos"
},
{
src: "../img/imagen-16.jpg",
mini: "../img/imagen-16-mini.jpg",
alt: "Detalle de la unión prensada de CNX-13"
},
{
src: "../img/imagen-17.jpg",
mini: "../img/imagen-17-mini.jpg",
alt: "Superficie del tubo deformado de CNX-13"
},
{
src: "../img/imagen-18.jpg",
mini: "../img/imagen-18-mini.jpg",
alt: "Tubo de CNX-13 sobre fondo negro"
}
]
},

{
slug: "rampora",
titulo: "RÁMPORA",
cat: "ceramica-tela",
pagina: "proyecto-rampora.html",
principal: "../img/imagen-19.jpg",
mini: "../img/imagen-19-mini.jpg",
alt: "Pieza de cerámica Rámpora",
resumen: "Rámpora nace a partir de una reflexión sobre la extracción de minerales y las transformaciones que esta provoca en el paisaje, explorando la tensión entre la intervención humana y la belleza natural. Desarrollada para la asignatura Cerámica, Expresión y Funcionalidad, la pieza responde al desafío de integrar funcionalidad y expresión artística en un mismo objeto.",
contener: false,
imagenes: [
{
src: "../img/imagen-19.jpg",
mini: "../img/imagen-19-mini.jpg",
alt: "Pieza de cerámica Rámpora"
},
{
src: "../img/imagen-20.jpg",
mini: "../img/imagen-20-mini.jpg",
alt: "Vista lateral de Rámpora"
}
]
},

{
slug: "tpu",
titulo: "T.P.U - The Posture Unit",
cat: "exploracion",
pagina: "proyecto-tpu.html",
principal: "../img/imagen-10.jpg",
mini: "../img/imagen-10-mini.jpg",
alt: "Silla T.P.U con tejido de filamentos de colores",
resumen: "Silla desarrollada a partir de una estructura tubular metálica y un tejido de filamentos de TPU, explorando la relación entre flexibilidad, tensión y rigidez. El tejido, seleccionado por su resistencia y elasticidad, configura una superficie de soporte que se adapta a la estructura y al cuerpo.",
contener: false,
imagenes: [
{
src: "../img/imagen-10.jpg",
mini: "../img/imagen-10-mini.jpg",
alt: "Silla T.P.U con tejido de filamentos de colores"
}
]
},

{
slug: "pionera",
titulo: "PIONERA",
cat: "ceramica-tela",
pagina: "proyecto-pionera.html",
principal: "../img/imagen-8.jpg",
mini: "../img/imagen-8-mini.jpg",
alt: "Portada de Pionera indumentaria",
resumen: "Pionera surge a partir de un proyecto de taller enfocado en identificar problemáticas dentro de una comunidad y desarrollar soluciones desde el diseño. Inspirado en mi experiencia como diseñadora industrial, el proyecto aborda las dificultades de los overoles de trabajo tradicionalmente considerados “unisex”, los cuales no responden adecuadamente a la anatomía femenina.",
contener: false,
imagenes: [
{
src: "../img/imagen-8.jpg",
mini: "../img/imagen-8-mini.jpg",
alt: "Portada de Pionera indumentaria"
},
{
src: "../img/imagen-9.jpg",
mini: "../img/imagen-9-mini.jpg",
alt: "Espalda del overol Pionera"
}
]
},

{
slug: "abyssia",
titulo: "Abyssia",
cat: "ceramica-tela",
pagina: "proyecto-abyssia.html",
principal: "../img/imagen-21.jpg",
mini: "../img/imagen-21-mini.jpg",
alt: "Pieza lumínica de cerámica Abyssia",
resumen: "Abyssia es una pieza lumínica inspirada en las estructuras orgánicas de los corales y sus mecanismos de adaptación frente a las alteraciones medioambientales. La obra explora cómo los organismos marinos modifican sus formas y desarrollan estructuras defensivas ante condiciones adversas, como la contaminación y los cambios en su ecosistema.",
contener: false,
imagenes: [
{
src: "../img/imagen-21.jpg",
mini: "../img/imagen-21-mini.jpg",
alt: "Pieza lumínica de cerámica Abyssia"
}
]
},

{
slug: "barrica-picotera",
titulo: "Barrica Picotera — Taller Celebración",
cat: "madera",
pagina: "proyecto-barrica-picotera.html",
principal: "../img/imagen-5.jpg",
mini: "../img/imagen-5-mini.jpg",
alt: "Barrica Picotera con su mortero",
resumen: "Proyecto desarrollado para el taller Celebración, que explora la relación entre el diseño, los alimentos y las festividades. El encargo consistió en diseñar un objeto de regalo a partir de una fiesta nacional asignada a cada dupla. En este caso, se trabajó con la Fiesta de la Vendimia, desarrollando la Barrica Picotera, un objeto apilable que facilita su traslado y distribución considerando la alta concurrencia del evento.",
contener: false,
imagenes: [
{
src: "../img/imagen-5.jpg",
mini: "../img/imagen-5-mini.jpg",
alt: "Barrica Picotera con su mortero"
},
{
src: "../img/imagen-3.jpg",
mini: "../img/imagen-3-mini.jpg",
alt: "Barrica Picotera con aperitivos y uvas"
},
{
src: "../img/imagen-4.jpg",
mini: "../img/imagen-4-mini.jpg",
alt: "Barrica Picotera sobre fondo azul"
}
]
},

{
slug: "new-balance",
titulo: "Réplica a escala – New Balance 550",
cat: null,
pagina: "proyecto-new-balance.html",
principal: "../img/imagen-2.jpg",
mini: "../img/imagen-2-mini.jpg",
alt: "Réplica a escala de la zapatilla New Balance 550",
resumen: "Este proyecto fue desarrollado para el ramo de Maquetas y Materiales, con el objetivo de reproducir una zapatilla New Balance 550 a escala mediante la exploración de técnicas de moldaje y reproducción de objetos preexistentes. El ejercicio no contemplaba la funcionalidad del calzado, sino el aprendizaje de procesos de construcción, conformación y representación volumétrica.",
contener: false,
imagenes: [
{
src: "../img/imagen-2.jpg",
mini: "../img/imagen-2-mini.jpg",
alt: "Réplica a escala de la zapatilla New Balance 550"
},
{
src: "../img/imagen-1.jpg",
mini: "../img/imagen-1-mini.jpg",
alt: "Detalle de la réplica de la New Balance 550"
}
]
},

{
slug: "camara-kodak",
titulo: "Cámara Kodak",
cat: "digital",
pagina: "proyecto-camara-kodak.html",
principal: "../img/kodak-1.jpg",
mini: "../img/kodak-1-mini.jpg",
alt: "Render de la cámara Kodak, vista 1",
resumen: "Render",
contener: false,
imagenes: [
{
src: "../img/kodak-1.jpg",
mini: "../img/kodak-1-mini.jpg",
alt: "Render de la cámara Kodak, vista 1"
},
{
src: "../img/kodak-2.jpg",
mini: "../img/kodak-2-mini.jpg",
alt: "Render de la cámara Kodak, vista 2"
},
{
src: "../img/kodak-3.jpg",
mini: "../img/kodak-3-mini.jpg",
alt: "Render de la cámara Kodak, vista 3"
},
{
src: "../img/kodak-4.jpg",
mini: "../img/kodak-4-mini.jpg",
alt: "Render de la cámara Kodak, vista 4"
}
]
},

{
slug: "planos",
titulo: "Planos",
cat: "digital",
pagina: "proyecto-planos.html",
principal: "../img/plano-1.jpg",
mini: "../img/plano-1-mini.jpg",
alt: "Plano técnico 1",
resumen: "",
contener: true,
imagenes: [
{
src: "../img/plano-1.jpg",
mini: "../img/plano-1-mini.jpg",
alt: "Plano técnico 1"
},
{
src: "../img/plano-2.jpg",
mini: "../img/plano-2-mini.jpg",
alt: "Plano técnico 2"
},
{
src: "../img/plano-3.jpg",
mini: "../img/plano-3-mini.jpg",
alt: "Plano técnico 3"
},
{
src: "../img/plano-4.jpg",
mini: "../img/plano-4-mini.jpg",
alt: "Plano técnico 4"
},
{
src: "../img/plano-5.jpg",
mini: "../img/plano-5-mini.jpg",
alt: "Plano técnico 5"
},
{
src: "../img/plano-6.jpg",
mini: "../img/plano-6-mini.jpg",
alt: "Plano técnico 6"
},
{
src: "../img/plano-7.jpg",
mini: "../img/plano-7-mini.jpg",
alt: "Plano técnico 7"
}
]
}
]
};

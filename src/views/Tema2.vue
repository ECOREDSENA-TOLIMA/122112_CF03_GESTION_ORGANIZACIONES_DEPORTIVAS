<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de adquisiciones, compras y contrataciones

    p.mb-5 El proceso de adquisiciones es cuando una institución o una empresa provee los materiales o servicios necesarios para el correcto funcionamiento.

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.bg--orange.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/39.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para que la gestión de manera general se cumpla, es preciso identificar las necesidades y requerimientos del material según el puesto de trabajo, conocer y seleccionar los proveedores, bajo los criterios y normas particulares según la naturaleza de la empresa, hacer el control y seguimiento correspondiente a los proveedores seleccionados hasta culminar todo el proceso de entregas y garantías. Esto también incluye las fuentes de financiación para la consecución de recursos, según los requerimientos y el tipo de organización.
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Identificación de requerimientos 

    .row.mb-5.justify-content-center
      .col-lg-2(data-aos='fade-right'): img(src='@/assets/curso/temas/tema2/40.svg')
      .col-lg-10(data-aos='fade-left')
        p Para la gestión de adquisiciones o requerimientos, es necesario conocer los conceptos relacionados, los elementos, herramientas y técnicas que permitan aprender, qué es y cómo se realiza la planificación de las adquisiciones; existen varias herramientas que permite la identificación de los requerimientos y facilitar la planificación, a continuación, se mencionan algunas:

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Análisis" :icono="require('@/assets/curso/temas/tema2/41.svg')")
        .row.px-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/45.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Análisis de compra
            p Determinar si el producto o servicios pueden ser producidos en la empresa y si, en realidad, se requiere la compra.

      .py-4.py-md-5(titulo="Necesidades" :icono="require('@/assets/curso/temas/tema2/42.svg')")
        .row.px-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/46.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Cálculo de necesidades
            p Actividad donde se cuantifican específicamente las necesidades de la organización, de acuerdo al análisis de los pedidos o requisiciones; estas necesidades de abastecimiento son determinadas por factores como consumo, reemplazo, reserva o seguridad, teniendo en cuenta el elemento del tiempo.

      .py-4.py-md-5(titulo="Juicio" :icono="require('@/assets/curso/temas/tema2/43.svg')")
        .row.px-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/47.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Juicio experto
            p Acudir a una opinión experta para realizar el requerimiento de acuerdo a las necesidades de su área.

      .py-4.py-md-5(titulo="Asesoramiento" :icono="require('@/assets/curso/temas/tema2/44.svg')")
        .row.px-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/48.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Asesoramiento 
            p Se realiza por una persona o grupo de personas bajo los criterios técnicos y normativos que se requieran para realizar para el requerimiento y la compra.
      
      .py-4.py-md-5(titulo="Contrato" :icono="require('@/assets/curso/temas/tema2/45.svg')")
        .row.px-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/49.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Selección del tipo de contrato
            p Es el tipo de contrato que se selecciona, teniendo en cuenta elementos como: el tipo de organización (pública o privada), el origen de los recursos, los requerimientos, normativa, etc.

    p.mb-5 Después de conocer los requerimientos y necesidades de la organización, es importante conocer varios elementos al momento de realizar el procedimiento de compras, como son: 

    .row.mb-3
      .col-lg-4.mb-3
        .tarjeta.bg--4.hover-blue.hover-size.p-5
          h4.text-center.text-white.mb-0 Características del producto

      .col-lg-4.mb-3
        .tarjeta.bg--4.hover-blue.hover-size.p-5
          h4.text-center.text-white.mb-0 Calidad
      
      .col-lg-4.mb-3
        .tarjeta.bg--4.hover-blue.hover-size.p-5
          h4.text-center.text-white.mb-0 Tiempo de entrega
    
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.bg--4.hover-blue.hover-size.p-5
          h4.text-center.text-white.mb-0 Cuantía o cantidad de la compra 
    
      .col-lg-4.mb-3
        .tarjeta.bg--4.hover-blue.hover-size.p-5
          h4.text-center.text-white.mb-0 Precio

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Selección de proveedores 

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p En todas las organizaciones en las que se requiere la adquisición de bienes y servicios, es necesario hablar del tema de selección de proveedores, así, generalmente los departamentos de compras son los encargados de la búsqueda y selección de estos, orientado a que se adecúen a las necesidades de la organización, en cuanto a requerimientos, calidad y precio; se entiende este proceso de selección de proveedores como la etapa previa al inicio del proceso de compra.
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p.mb-0 Inicialmente para realizar la selección, se deben identificar de los posibles proveedores, allí se establece un listado de empresas o personas que proveen el producto o servicio acorde con los requerimientos establecidos, luego se solicita la información de cada proveedor (empresa o persona), luego se procede a realizar la selección según los criterios establecidos por la organización; se recomienda que en este punto no tener un solo proveedor, sino contar con varios, en caso de que no cumplan con los criterios de selección.
        p La selección de proveedores se realiza siguiendo los criterios establecidos para la contratación, lo anterior teniendo en cuenta la naturaleza de la organización (pública o privada); en el siguiente diagrama de flujo se observa cómo realizar la selección de los proveedores.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/50.jpg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-5
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Proceso de selección de proveedores</em>
        figure
          img.mb-2.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/51-1.svg', alt='En la figura 3 se muestra el proceso para la selección de proveedores, con el fin de identificar el cumplimiento de ciertas características y así tomar decisiones dentro de la organización.')
          img.mb-2.d-block.d-md-none(src='@/assets/curso/temas/tema2/51-2.svg', alt='En la figura 3 se muestra el proceso para la selección de proveedores, con el fin de identificar el cumplimiento de ciertas características y así tomar decisiones dentro de la organización.')

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Control y seguimiento de cumplimiento de proveedores 

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p Según la norma ISO 9001:2015, “la organización debe determinar y aplicar criterios para la evaluación, supervisión del rendimiento y la reevaluación de proveedores externos, en función de su capacidad para proporcionar procesos o productos y servicios de acuerdo a las necesidades”. Teniendo en cuenta lo anterior, en todas las organizaciones en las que se realicen procesos de compra, es necesario aplicar los criterios de control y seguimiento, según sea el caso, más aún si la organización tiene implementado un sistema de calidad.
          br
          br
          |En un proceso anterior, el proveedor se debe someter a unos criterios de evaluación y posterior calificación, lo que dará como resultado, la selección de este para suministrar la compra. A partir de este momento se inicia el proceso de control y seguimiento de cumplimiento de los proveedores, entendiendo a este como la evaluación de diferentes criterios de cumplimiento, como calidad, precio, tiempo de respuesta, etc. los cuales están establecidos previamente en un plan de control de proveedores; este control se aplica según sea el caso:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/52.jpg', alt='Texto que describa la imagen')

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3
        .tarjeta.bg--3.p-5.hover-size
          h4.text-center.mb-0 Cuando son productos

      .col-lg-5.mb-3
        .tarjeta.bg--1.p-5.hover-size
          h4.text-center.text-white.mb-0 Cuando son servicios

    p.mb-5 Para realizar el control y el seguimiento de los proveedores es necesario implementar un plan de control de proveedores, este es un documento donde se especifican las actividades de comprobación de cumplimiento y eficacia, en dicho documento se deben detallar aspectos como:

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/53.svg', alt='Texto que describa la imagen')

      .tarjeta.rounded-1.bg--4-claro2.p-3(x="39%" y="23%")
        p.mb-0 Información sobre los parámetros o condiciones que debe cumplir el proveedor.
      .tarjeta.rounded-1.bg--4-claro2.p-3(x="58%" y="30%")
        p.mb-0 ¿En qué momento se va a aplicar el plan a los proveedores?
      .tarjeta.rounded-1.bg--4-claro2.p-3(x="40%" y="57%")
        p.mb-0 ¿Cómo y con qué métodos se llevará a cabo el plan de proveedores? 
      .tarjeta.rounded-1.bg--4-claro2.p-3(x="60%" y="57%")
        p ¿Quiénes son las personas responsables de llevarlo a cabo?
      .tarjeta.rounded-1.bg--4-claro2.p-3(x="60%" y="78%") ¿Cómo se comprobará el buen funcionamiento y eficacia de las actividades?

    p.mb-5 Este plan se debe aplicar en el momento en el que se selecciona al proveedor válido para realizar el suministro de la compra. Además, existen algunos instrumentos que se utilizan para realizar el control y evaluación del proveedor en los que se plasma el desempeño según una escala de valor o unos criterios establecidos por la organización, un ejemplo de ello puede ser:

    .barras-relleno.d-flex.bg-gray.p-5.justify-content-center.align-items-center.mb-5
      .barras-relleno__contenedor.mx-2.mb-3
        .barras-relleno__relleno.bg--3.a--1
        .barras-relleno__texto.h-100.justify-content-center.p-4.my-5
            h2.h1.align-self-start.text-center.mx-auto.w-100 25 %
            h3.text-center.align-self-end Atención oportuna (cotización)
      .barras-relleno__contenedor.mx-2.mb-3
        .barras-relleno__relleno.bg--1.a--1
        .barras-relleno__texto.h-100.justify-content-center.p-4.my-5
            h2.h1.align-self-start.text-center.mx-auto.w-100 25 %
            h3.text-center.align-self-end Calidad
      .barras-relleno__contenedor.mx-2.mb-3
        .barras-relleno__relleno.bg--4.a--2
        .barras-relleno__texto.h-100.justify-content-center.p-4.my-5
            h2.h1.align-self-start.text-center.mx-auto.w-100 15 %
            h3.text-center.align-self-end Precios
      .barras-relleno__contenedor.mx-2.mb-3
        .barras-relleno__relleno.bg--dorado.a--3
        .barras-relleno__texto.h-100.justify-content-center.p-4.my-5
            h2.h1.align-self-start.text-center.mx-auto.w-100 20 %
            h3.text-center.align-self-end Seriedad
      .barras-relleno__contenedor.mx-2.mb-3
        .barras-relleno__relleno.bg--a1.a--2
        .barras-relleno__texto.h-100.justify-content-center.p-4.my-5
            h2.h1.align-self-start.text-center.mx-auto.w-100 15 %
            h3.text-center.align-self-end Plazo de entrega

    p.mb-5 De acuerdo a lo anterior, se deben considerar unas escalas de desempeño, la cual se realiza con base en evaluaciones parciales, tanto en productos o servicios, como en las que se relacionan a continuación: 
    
    .titulo-sexto.color-acento-contenido
      p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Escala de calificación para desempeño de proveedores</em>
    
    .tabla-a.color-acento-contenido.mb-5(alt='En la tabla 1 se muestra la escala de calificación para evaluar el desempeño de los proveedores. Según esta escala, se considera un desempeño deficiente si la puntuación es menor al 59 %, aceptable si está en el rango del 60 % al 95 %, y excelente si alcanza el 96 % o más.') 
      table.text-center
        thead
          tr
            th Calificación de desempeño (%)
            th Recomendación
            th Valoración
        tbody
          tr
            td Mayor o igual a 96 %.
            td Se aconseja mantener como proveedor.
            td Excelente. 
          tr
            td Mayor o igual a 60 % y 
              br
              |Menor que 95 %.
            td Se aconseja condicionar su permanencia en el registro de proveedores, a la espera de las mejoras en su desempeño en un periodo no mayor a 6 meses (debe presentar plan de mejora).
            td Aceptable.
          tr
            td Menor que 59 %.
            td Se aconseja que no sea considerado como proveedor, ya que no cumple con los requerimientos establecidos por la empresa para el bien o servicio a solicitar; lo anterior no excluye la posibilidad de poder utilizar sus servicios posteriormente (debe presentar plan de mejora, para reevaluación).
            td Deficiente.

    p.mb-5 La evaluación de los proveedores se realiza de forma anual, sin embargo, el control y seguimiento se realiza durante toda la vigencia del contrato.

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Fuentes de financiación de la propuesta

    .row.mb-5.justify-content-center
      .col-lg-2: img(src='@/assets/curso/temas/tema2/54.svg').mb-3
      .col-lg-10(data-aos="fade-left")
        p.mb-0.text-justify Una de las barreras para poner en marcha un proyecto, es precisamente las fuentes de financiación, ya que sin duda existen innumerables requisitos para poder acceder a ellas. En el sector de la actividad física el deporte y la recreación, la principal fuente de financiación es la pública, y va ligada principalmente a las instituciones que hacen parte del sistema nacional del deporte; a continuación, se mencionan algunas de ellas:

    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema2/55.jpg')
          .tarjeta-foto-hover__titulo.bg--1.d-flex.justify-content-center.align-items-center.p-3
            h3.text-center.text-white.mb-0 Instituciones financieras
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--1.d-flex.align-items-center.justify-content-center
            .p-4.text-white
              h5 Instituciones financieras
              p Es la fuente tradicional de financiación, en ellas se pueden obtener préstamos para pequeñas y medianas empresas, aunque no existe en el momento productos especializados para el sector, se puede acceder a los diferentes créditos bancarios, como entidades bancarias, cooperativas.
      
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema2/56.jpg')
          .tarjeta-foto-hover__titulo.bg--3.d-flex.justify-content-center.align-items-center.p-3
            h3.text-center.mb-0 Fondos de emprendimiento
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--3.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Fondos de emprendimiento
              p Son instituciones que administran fondos de capital emprendedor, tanto con recursos públicos como privados, se tienen unos compromisos fijos y se realiza un acompañamiento, para que esta inversión tenga el éxito esperado, en algunos casos, los recursos asignados son condonables.
      
      .col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema2/57.jpg')
          .tarjeta-foto-hover__titulo.bg--4.d-flex.justify-content-center.align-items-center.p-3
            h3.text-center.text-white.mb-0 Programas y convocatorias públicas
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--4.d-flex.align-items-center.justify-content-center
            .p-4.text-white
              h5 Programas y convocatorias públicas
              p Son programas destinados a la promoción de la actividad física, el deporte y la recreación; se hacen a través de convocatorias públicas en orden municipal, regional o nacional, y se invita a presentar proyectos bajo unos criterios de selección ante entidades como: Colciencias, Ministerio del Deporte, institutos distritales, departamentales y municipales del deporte.






</template>

<script>
import BannerInterno from '../components/BannerInterno'

export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

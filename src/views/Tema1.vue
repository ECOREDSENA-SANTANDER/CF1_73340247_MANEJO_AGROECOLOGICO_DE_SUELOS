<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Reconocimiento del entorno agroecológico
      .fondo01(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11.col-11
            .row.justify-content-center.mb-2
              .col-lg-8.mb-3
                p.bg01.p-4 El reconocimiento del entorno agroecológico permite comprender las condiciones naturales y productivas presentes en un territorio agrícola. Este análisis facilita la identificación de los recursos disponibles, las características ambientales y las relaciones existentes entre las comunidades campesinas y los ecosistemas. Asimismo, contribuye a la implementación de prácticas sostenibles orientadas a la conservación del ambiente y al fortalecimiento de la producción agrícola.
                p El entorno agroecológico integra elementos como la vegetación, el suelo, el agua, el clima y las prácticas productivas desarrolladas por las comunidades. Su estudio favorece la comprensión de las dinámicas del territorio y permite reconocer factores que pueden influir positiva o negativamente en los sistemas agrícolas.
              .col-lg-4.col-8.col-md-6
                img(src='@/assets/curso/temas/t1/img01.png', alt='')
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Concepto de entorno agroecológico

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t1/img03.png', alt='')
            .col-lg-10
              p El entorno agroecológico corresponde al conjunto de componentes naturales, sociales y productivos que interactúan dentro de un territorio y que influyen en el desarrollo de las actividades agrícolas. Este entorno incluye recursos naturales, biodiversidad, condiciones climáticas y conocimientos tradicionales asociados al manejo del territorio. 
          p La agroecología considera que los sistemas agrícolas deben desarrollarse de manera equilibrada con el ambiente, promoviendo el uso responsable de los recursos naturales y la sostenibilidad de los procesos productivos.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Elementos del entorno agroecológico

      .fondo02.p-5.mb-4(data-aos="zoom-in-left")
        SlyderB(:datos="datosSlyder")

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-2
          h4.bg03.p-2.col-lg-9 Importancia del entorno agroecológico:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              | Permite reconocer las condiciones del territorio. 
            li.d-flex
              i.fas.fa-angle-right2
              | Favorece prácticas agrícolas sostenibles. 
            li.d-flex
              i.fas.fa-angle-right2
              | Contribuye a la conservación de recursos naturales. 
            li.d-flex
              i.fas.fa-angle-right2
              | Fortalece el conocimiento del sistema productivo. 
            li.d-flex
              i.fas.fa-angle-right2
              | Promueve el equilibrio entre producción y ambiente. 
        .col-lg-7
          img(src="@/assets/curso/temas/t1/img04.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Identificación de la vegetación del entorno

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-8.col-md-6
          img(src="@/assets/curso/temas/t1/img05.png")
        .col-lg-8
          .row.justify-content-center.align-items-center.mb-3.bg04.g-0
            .col-lg-5.p-0
              img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img06.svg', alt='')
            .col-lg-7.p-3
              p.mb-0 La vegetación del entorno está conformada por las diferentes especies de plantas presentes en un territorio, como árboles, arbustos, pastos y coberturas vegetales. Su identificación permite reconocer las características ambientales del lugar y comprender la relación entre biodiversidad y producción agrícola.
          p La vegetación cumple funciones importantes relacionadas con la protección del suelo, la regulación de la humedad y la conservación de los ecosistemas. Además, contribuye al equilibrio ecológico y al mantenimiento de organismos benéficos para la agricultura.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Tipos de vegetación
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.izq.bg05 Tipo
                  th.izq.bg05 Características
              tbody
                tr
                  td #[b Árboles]
                  td Protegen el suelo y generan sombra.
                tr
                  td #[b Arbustos]
                  td Funcionan como barreras vivas y refugio de fauna.
                tr
                  td #[b Pastos]
                  td Cubren y protegen el suelo.
                tr
                  td #[b Plantas nativas]
                  td Adaptadas a las condiciones locales.
                tr
                  td #[b Coberturas vegetales]
                  td Conservan humedad y reducen erosión.
        .col-lg-4.col-8.col-md-7
          img(src="@/assets/curso/temas/t1/img07.png")

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-7.mb-3
          img(src="@/assets/curso/temas/t1/img08.png")
        .col-lg-5
          h4.bg03.p-2.col-lg-10 Beneficios de la vegetación:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              | Permite reconocer las condiciones del territorio. 

            li.d-flex
              i.fas.fa-angle-right2
              | Favorece prácticas agrícolas sostenibles. 

            li.d-flex
              i.fas.fa-angle-right2
              | Contribuye a la conservación de recursos naturales. 
 
            li.d-flex
              i.fas.fa-angle-right2
              | Fortalece el conocimiento del sistema productivo. 

            li.d-flex
              i.fas.fa-angle-right2
              | Promueve el equilibrio entre producción y ambiente. 

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Relación entre biodiversidad y producción agrícola

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          img(src="@/assets/curso/temas/t1/img09.png")
      p La biodiversidad corresponde a la variedad de organismos vivos presentes en un ecosistema. En agricultura, incluye plantas, animales, microorganismos y demás especies que interactúan dentro del sistema productivo.  Los sistemas agrícolas con mayor biodiversidad presentan mejores condiciones de estabilidad ambiental y equilibrio ecológico. La diversidad de especies favorece procesos naturales como la polinización, el control biológico de plagas y el reciclaje de nutrientes.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2.
            span Beneficios de la biodiversidad
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.izq.bg05 Beneficio
                  th.izq.w-50.bg05 Función
              tbody
                tr
                  td #[b Polinización]
                  td Favorece la reproducción de los cultivos.

                tr
                  td #[b Control biológico]
                  td Ayuda a disminuir plagas naturalmente.

                tr
                  td #[b Fertilidad del suelo]
                  td Mejora procesos biológicos y nutricionales.

                tr
                  td #[b Conservación ambiental]
                  td Mantiene equilibrio ecológico.

                tr
                  td #[b Adaptación climática]
                  td Incrementa resiliencia de los sistemas agrícolas.
        .col-lg-4.col-8.col-md-7
          img(src='@/assets/curso/temas/t1/img10.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Prácticas que favorecen la biodiversidad
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.mb-3
          img(src='@/assets/curso/temas/t1/img11.png', alt='')
        .col-lg-4
          p La biodiversidad cumple un papel fundamental en el equilibrio de los sistemas agroecológicos, ya que contribuye a la conservación de los recursos naturales, el control biológico, la fertilidad del suelo y la estabilidad ambiental de los cultivos. La implementación de prácticas orientadas a proteger y fortalecer la diversidad biológica favorece sistemas productivos más sostenibles, resilientes y adaptados a las condiciones del territorio. Estas acciones permiten mantener la interacción entre plantas, animales y microorganismos presentes en el ecosistema agrícola.

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="a) Asociación de cultivos")
              .col-md-12.mb-4.mb-md-0
                p Consiste en sembrar diferentes especies en un mismo espacio para mejorar el aprovechamiento de recursos, reducir plagas y enfermedades, proteger el suelo y aumentar la productividad.

            .row(titulo="b) Conservación de especies nativas")
              .col-md-12.mb-4.mb-md-0
                p Permite mantener la biodiversidad local, preservar recursos genéticos y favorecer la adaptación de los sistemas productivos a las condiciones ambientales de la región.

            .row(titulo="c) Uso de cercas vivas")
              .col-md-12.mb-4.mb-md-0
                p Empleo de árboles y arbustos como barreras naturales que sirven de refugio para la fauna, reducen la erosión y protegen los cultivos de factores climáticos.

            .row(titulo="d) Protección de bosques y fuentes hídricas")
              .col-md-12.mb-4.mb-md-0
                p Contribuye a conservar la biodiversidad, regular el clima, proteger el suelo y garantizar la disponibilidad y calidad del agua para los ecosistemas y la producción agrícola.

            .row(titulo="e) Implementación de coberturas vegetales")
              .col-md-12.mb-4.mb-md-0
                p Consiste en cubrir el suelo con plantas o residuos orgánicos para conservar la humedad, reducir la erosión, mejorar la fertilidad y favorecer la actividad biológica del suelo.
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/temas/t1/img12.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del territorio en la agroecología

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3
          img(src='@/assets/curso/temas/t1/img13.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t1/img14.png', alt='')
            .col-lg-10
              p El territorio representa el espacio donde se desarrollan las actividades sociales, culturales y productivas de las comunidades. En agroecología, el territorio es entendido como un sistema integral donde interactúan recursos naturales, conocimientos campesinos y prácticas agrícolas.
          p El análisis del territorio permite identificar potencialidades y limitaciones relacionadas con la producción agrícola, el manejo de recursos naturales y las condiciones ambientales presentes en la comunidad.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        span Componentes del territorio

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12.mb-3
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.izq.bg05 Componente
                  th.izq.bg05 Descripción
              tbody
                tr
                  td #[b Ambiental]
                  td Comprende los recursos naturales y las condiciones ecológicas presentes en el territorio, como el suelo, el agua, el clima, la vegetación y la biodiversidad. Estos elementos influyen directamente en la productividad agrícola, la conservación de los ecosistemas y el desarrollo de prácticas sostenibles dentro de los sistemas agroecológicos.

                tr
                  td #[b Social]
                  td Hace referencia a las formas de organización, participación y relaciones establecidas entre las personas y comunidades del territorio. Incluye procesos de trabajo comunitario, cooperación, intercambio de conocimientos y toma de decisiones colectivas relacionadas con las actividades productivas y el manejo de los recursos naturales.

                tr
                  td #[b Cultural]
                  td Integra los saberes, costumbres, prácticas tradicionales y conocimientos campesinos transmitidos de generación en generación. Este componente refleja la identidad territorial y la manera en que las comunidades interpretan, utilizan y conservan los recursos naturales en sus actividades agrícolas y cotidianas.

                tr
                  td #[b Productivo]
                  td Corresponde al conjunto de actividades agrícolas, pecuarias y complementarias desarrolladas en el territorio para la producción de alimentos y el sostenimiento económico de las comunidades. Incluye prácticas de cultivo, manejo de recursos, uso de herramientas e implementación de sistemas productivos acordes con las condiciones locales.

                tr
                  td #[b Infraestructura]
                  td Incluye las construcciones, vías de acceso, viviendas, espacios comunitarios y demás elementos físicos presentes en el territorio que facilitan el desarrollo de las actividades sociales y productivas. La infraestructura influye en la movilidad, comercialización, acceso a servicios y organización de las comunidades rurales.

      p La importancia del territorio en la agroecología radica en que permite identificar las condiciones ambientales, sociales y productivas de una comunidad para planificar adecuadamente las actividades agrícolas. Además, favorece el aprovechamiento sostenible de los recursos naturales, la conservación ambiental, la valoración de los saberes locales y el fortalecimiento de sistemas productivos sostenibles y adaptados a las condiciones del territorio.


















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Clima',
        texto: 'Influye en el crecimiento y desarrollo de los cultivos.',
        imagen: '@/assets/curso/temas/t1/1.png',
      },
      {
        titulo: 'Suelo',
        texto: 'Proporciona soporte, agua y nutrientes para las plantas.',
        imagen: '@/assets/curso/temas/t1/2.png',
      },
      {
        titulo: 'Agua',
        texto: 'Recurso esencial para las actividades agrícolas',
        imagen: '@/assets/curso/temas/t1/3.png',
      },
      {
        titulo: 'Vegetación',
        texto: 'Favorece la biodiversidad y la conservación ambiental.',
        imagen: '@/assets/curso/temas/t1/4.png',
      },
      {
        titulo: 'Comunidad',
        texto: 'Integra conocimientos y prácticas campesinas.',
        imagen: '@/assets/curso/temas/t1/5.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>

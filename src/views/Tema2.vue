<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cartografía social y diagnóstico territorial

    .fondo01(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11.col-11
            .row.justify-content-center.mb-2
              .col-lg-8.mb-3
                p.bg01.p-4 La cartografía social es una herramienta participativa que permite representar gráficamente las características de un territorio a partir de los conocimientos y experiencias de las comunidades. Su aplicación facilita el reconocimiento de recursos naturales, espacios productivos, problemáticas ambientales y dinámicas sociales relacionadas con las actividades agrícolas.
                p En agroecología, la cartografía social contribuye al análisis integral del territorio, fortaleciendo la participación comunitaria y promoviendo procesos de planificación orientados al manejo sostenible de los recursos naturales. Además, permite comprender la relación entre las actividades productivas y las condiciones ambientales presentes en el entorno.
              .col-lg-4.col-8.col-md-6
                img(src='@/assets/curso/temas/t2/img01.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Conceptos básicos de cartografía social

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img02.png', alt='')
    p La cartografía social consiste en la elaboración de mapas o representaciones gráficas construidas de manera participativa por las comunidades. A través de esta herramienta es posible identificar elementos importantes del territorio como fuentes de agua, áreas de cultivo, caminos, viviendas, bosques y zonas de conservación. A diferencia de los mapas convencionales, la cartografía social incorpora los conocimientos, percepciones y experiencias de las personas que habitan el territorio, permitiendo obtener una visión más amplia de las dinámicas sociales y ambientales.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4.
            span Características de la cartografía social
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.izq.bg05 Característica
                  th.izq.bg05 Descripción
              tbody
                tr
                  td #[b Participativa]
                  td Involucra activamente a la comunidad.

                tr
                  td #[b Representativa]
                  td Permite ubicar elementos del territorio.

                tr
                  td #[b Colectiva]
                  td Integra conocimientos y experiencias locales.

                tr
                  td #[b Flexible]
                  td Utiliza dibujos, símbolos y esquemas sencillos.

                tr
                  td #[b Educativa]
                  td Facilita procesos de aprendizaje y análisis territorial.
        .col-lg-4.col-8.col-md-7
          img(src="@/assets/curso/temas/t2/img03.png")

    h4.bg03.p-2.col-lg-4 Importancia de la cartografía social:

    .fondo02.p-5.mb-4(data-aos="zoom-in-left")
      SlyderB(:datos="datosSlyder")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Elementos del territorio y su representación

    p El territorio está conformado por diferentes componentes naturales, sociales y productivos que pueden representarse mediante mapas comunitarios. La representación gráfica del territorio permite organizar información relacionada con los recursos naturales, actividades agrícolas y dinámicas comunitarias.
    p a) Entre los elementos que pueden representarse se encuentran las fuentes hídricas, áreas de cultivo, bosques, caminos, viviendas, zonas de riesgo y espacios comunitarios.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5.
            span Elementos representados en la cartografía social

          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.w-25.izq.bg05 Elemento
                  th.izq.bg05 Representación
                tbody
                  tr
                    td #[b Fuentes de agua]
                    td Ríos, quebradas, nacimientos o reservorios.

                  tr
                    td #[b Áreas agrícolas]
                    td Cultivos y zonas de producción.

                  tr
                    td #[b Cobertura vegetal]
                    td Bosques, árboles y vegetación natural.

                  tr
                    td #[b Infraestructura]
                    td Caminos, viviendas y espacios comunitarios.

                  tr
                    td #[b Zonas de riesgo]
                    td Áreas erosionadas o vulnerables.
        .col-lg-4.col-8.col-md-7
          img(src="@/assets/curso/temas/t2/img04.png")

    p b) Beneficios de la representación territorial
    p #[b • Organiza la información del territorio:] permite recopilar y representar de forma clara las características ambientales, sociales y productivas de la comunidad.
    p #[b • Facilita el análisis de recursos disponibles:] ayuda a identificar recursos naturales y productivos para su aprovechamiento sostenible. 
    p #[b • Permite identificar problemáticas ambientales:] favorece el reconocimiento de situaciones que afectan el equilibrio ambiental y la producción. 
    p #[b • Favorece la toma de decisiones comunitarias:] proporciona información útil para establecer prioridades y acordar acciones de mejora en el territorio. 
    p #[b • Apoya la planificación de actividades productivas:] facilita la organización de las labores agrícolas y el uso eficiente de los recursos disponibles.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Elaboración de mapas comunitarios
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.mb-3
        img(src='@/assets/curso/temas/t2/img05.png', alt='')
      .col-lg-7 
        p Los mapas comunitarios son representaciones elaboradas de manera colectiva por las personas que habitan un territorio. Su construcción permite recopilar información sobre las características ambientales, sociales y productivas presentes en la comunidad.
        p La elaboración de mapas generalmente inicia con recorridos de observación y diálogos entre los participantes, permitiendo identificar los elementos más importantes del territorio. Posteriormente, esta información se organiza mediante dibujos, símbolos y referencias gráficas.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 6.
            span Etapas para elaborar un mapa comunitario

          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th.izq.bg05 Etapa
                  th.izq.bg05 Descripción
                tbody
                  tr
                    td #[b Observación]
                    td Reconocimiento del territorio y sus características.

                  tr
                    td #[b Recolección de información]
                    td Identificación de recursos y problemáticas.

                  tr
                    td #[b Representación gráfica]
                    td Elaboración del mapa mediante símbolos y dibujos.

                  tr
                    td #[b Socialización]
                    td Presentación y análisis colectivo del mapa.

                  tr
                    td #[b Ajustes y validación]
                    td Corrección y complementación de información.
        .col-lg-4.col-8.col-md-7
          img(src="@/assets/curso/temas/t2/img04.png")
    
    .row.justify-content-center.mb-4
      .col-lg-12
        img.w-100(src='@/assets/curso/temas/t2/podcast.png' alt='' data-aos="zoom-in-left")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
              texto="Importancia de los mapas comunitarios"
              :audio="require_src('@/assets/curso/temas/t2/podcast.png')"
            )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mt-3
              | Los mapas comunitarios permiten comprender el territorio desde la mirada de quienes lo habitan, promoviendo la participación, el intercambio de saberes y la identificación de oportunidades para su desarrollo sostenible.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Uso de la cartografía social en sistemas productivos

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3
          img(src='@/assets/curso/temas/t2/img07.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t2/img08.png', alt='')
            .col-lg-10
              p La cartografía social puede utilizarse para analizar las condiciones de los sistemas productivos y reconocer las relaciones entre las actividades agrícolas y el territorio. Esta herramienta permite identificar recursos disponibles, áreas productivas, problemáticas ambientales y oportunidades de mejora.
          p En agroecología, la cartografía social favorece la planificación de prácticas sostenibles y el manejo adecuado de los recursos naturales. Además, facilita el análisis de aspectos relacionados con el uso del suelo, la disponibilidad de agua y la conservación de la biodiversidad.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7.
      span Aplicaciones de la cartografía social

    .tabla-a.color-acento-contenido.mb-3
      table
        thead
          tr
            th.w-25.izq.bg05 Aplicación
            th.izq.bg05 Utilidad
          tbody
            tr
              td #[b Diagnóstico territorial]
              td Permite identificar y analizar las características ambientales, sociales y productivas del territorio, reconociendo recursos disponibles, potencialidades y problemáticas que afectan a la comunidad. Facilita comprender las dinámicas presentes en el entorno y orientar acciones relacionadas con el manejo de recursos naturales, la producción agrícola y la planificación comunitaria.

            tr
              td #[b Planificación agrícola]
              td Favorece la organización de las actividades productivas mediante el reconocimiento de áreas de cultivo, disponibilidad de recursos y condiciones ambientales del territorio. Esta aplicación permite definir estrategias de manejo agrícola, distribución de espacios y programación de labores de acuerdo con las necesidades y características de cada sistema productivo.

            tr
              td #[b Conservación ambiental]
              td Contribuye a la protección y manejo adecuado de los recursos naturales al facilitar la identificación de zonas de conservación, fuentes hídricas, áreas con cobertura vegetal y espacios vulnerables a problemáticas ambientales. Además, fortalece la implementación de prácticas orientadas a preservar el equilibrio ecológico y la sostenibilidad del territorio.

            tr
              td #[b Gestión comunitaria]
              td Promueve la participación activa de las comunidades en procesos de análisis, organización y toma de decisiones relacionados con el territorio y las actividades productivas. Facilita el trabajo colectivo, el intercambio de conocimientos y la construcción de acuerdos orientados al desarrollo sostenible y al fortalecimiento comunitario.

            tr
              td #[b Educación agroecológica]
              td Favorece la comprensión integral del territorio, sus recursos y dinámicas ambientales, sociales y productivas. A través de herramientas participativas, fortalece procesos de aprendizaje relacionados con la agroecología, la conservación ambiental y el reconocimiento de saberes campesinos, promoviendo prácticas sostenibles y responsables dentro de los sistemas agrícolas.

    p La cartografía social fortalece la agroecología al permitir un análisis integral del territorio y de las relaciones entre recursos naturales, actividades productivas y dinámicas comunitarias. Además, promueve la participación y el intercambio de saberes locales, favorece el manejo sostenible de los recursos naturales, e identifica potencialidades y necesidades del territorio. También apoya la planificación y la toma de decisiones comunitarias orientadas al desarrollo sostenible y al fortalecimiento de los sistemas agroecológicos.





















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'a) Facilita el reconocimiento del territorio',
        texto:
          'Permite identificar y comprender las características físicas, ambientales, sociales y productivas de una comunidad, así como los recursos disponibles y su distribución.',
        imagen: '@/assets/curso/temas/t2/1.png',
      },
      {
        titulo: 'b) Promueve la participación comunitaria',
        texto:
          'Incentiva la construcción colectiva del conocimiento mediante el intercambio de experiencias, fortaleciendo la organización y el trabajo colaborativo.',
        imagen: '@/assets/curso/temas/t2/2.png',
      },
      {
        titulo: 'c) Ayuda a identificar recursos y problemáticas',
        texto:
          'Facilita el reconocimiento de recursos naturales y productivos, así como de situaciones que afectan el desarrollo ambiental, social y económico del territorio.',
        imagen: '@/assets/curso/temas/t2/3.png',
      },
      {
        titulo: 'd) Fortalece los procesos de planificación',
        texto:
          'Proporciona información relevante para la toma de decisiones, la priorización de necesidades y el diseño de estrategias de desarrollo sostenible.',
        imagen: '@/assets/curso/temas/t2/4.png',
      },
      {
        titulo: 'e) Favorece el análisis ambiental y productivo',
        texto:
          'Permite comprender las relaciones entre los recursos naturales, las actividades productivas y las condiciones del entorno, promoviendo prácticas más sostenibles.',
        imagen: '@/assets/curso/temas/t2/5.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>

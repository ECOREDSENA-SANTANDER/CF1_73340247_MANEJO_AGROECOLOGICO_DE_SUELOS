<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El reconocimiento del entorno agroecológico y de las condiciones del suelo constituye una base fundamental para el desarrollo de sistemas agrícolas sostenibles, al permitir comprender la relación entre los recursos naturales, las dinámicas territoriales y las prácticas productivas. En este sentido, la agroecología promueve una visión integral que integra la conservación ambiental, la productividad y el bienestar comunitario, reconociendo la importancia de la agricultura campesina y los saberes tradicionales. El análisis del territorio incluye elementos como la vegetación, el suelo, el agua, el clima y la organización comunitaria, los cuales influyen directamente en el establecimiento y manejo de los cultivos. Asimismo, herramientas como la cartografía social facilitan la identificación de recursos y problemáticas del entorno, mientras que el conocimiento de los insumos agrícolas, las propiedades del suelo y los ciclos productivos permite una planificación adecuada de las actividades del campo. De esta manera, se fortalecen competencias orientadas a la sostenibilidad, el uso responsable de los recursos naturales y la comprensión integral de los sistemas agrícolas.
          br
       
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

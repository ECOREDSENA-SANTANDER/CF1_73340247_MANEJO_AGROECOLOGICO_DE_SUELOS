<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Recursos para la producción agrícola

    .fondo01(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11.col-11
            .row.justify-content-center.mb-2
              .col-lg-8.mb-3
                p.bg01.p-4 La producción agrícola requiere diferentes recursos que permiten desarrollar las actividades relacionadas con la preparación del terreno, siembra, manejo y cosecha de los cultivos. Entre estos recursos se encuentran los insumos, herramientas y equipos utilizados para facilitar las labores agrícolas y mejorar las condiciones de producción.
                p El conocimiento y manejo adecuado de estos recursos favorece la eficiencia de las actividades agrícolas, contribuye a la seguridad durante el trabajo y promueve prácticas sostenibles acordes con los principios de la agroecología. Asimismo, permite optimizar el uso de materiales y fortalecer los procesos productivos en el territorio.
              .col-lg-4.col-8.col-md-6
                img(src='@/assets/curso/temas/t3/img01.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
      h5 Figura 1. 
      span Recursos agrícolas
    img.mb-3(src='@/assets/curso/temas/t3/fig1.svg', alt='Representa la articulación de diferentes componentes del sistema productivo, incluyendo agricultura, ganadería, economía, tecnología agraria, historia e integrantes.')

    p El conocimiento y manejo adecuado de estos recursos favorece la eficiencia de las actividades agrícolas, contribuye a la seguridad durante el trabajo y promueve prácticas sostenibles acordes con los principios de la agroecología. Asimismo, permite optimizar el uso de materiales y fortalecer los procesos productivos en el territorio.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Insumos utilizados en la producción agrícola









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

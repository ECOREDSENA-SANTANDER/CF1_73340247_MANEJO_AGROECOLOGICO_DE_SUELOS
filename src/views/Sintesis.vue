<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El reconocimiento agroecológico del entorno y del suelo permite comprender las relaciones entre los recursos naturales, las actividades productivas y las dinámicas sociales del territorio, favoreciendo sistemas agrícolas más sostenibles y adaptados a las condiciones locales. El suelo es un recurso fundamental que aporta soporte, agua y nutrientes, y su análisis físico, químico y biológico permite identificar su fertilidad, aplicar prácticas de conservación y reconocer problemáticas como la erosión, la compactación y la pérdida de cobertura vegetal. Asimismo, el uso de herramientas como la cartografía social facilita el análisis participativo del territorio, identificando recursos, problemáticas y potencialidades, y fortaleciendo la organización comunitaria y el intercambio de saberes. De igual manera, el conocimiento de los ciclos vegetativos y productivos de los cultivos permite planificar adecuadamente las labores agrícolas, optimizar recursos e implementar buenas prácticas que mejoran la productividad y sostenibilidad. En conjunto, este proceso fortalece la interpretación del entorno, la conservación ambiental y el desarrollo de sistemas agroecológicos responsables y sostenibles.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Reconocimiento agroecológico del entorno y del suelo” se estructura en cuatro ejes principales. El primero aborda el reconocimiento del entorno agroecológico, incluyendo la biodiversidad, la vegetación y la importancia del territorio. El segundo se centra en la cartografía social y el diagnóstico territorial, con énfasis en la representación del territorio y los mapas comunitarios. El tercero trata los recursos para la producción agrícola, como insumos, herramientas y buenas prácticas de uso. Finalmente, el cuarto se enfoca en el suelo y los ciclos productivos del cultivo, considerando sus propiedades, importancia y manejo del proceso productivo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

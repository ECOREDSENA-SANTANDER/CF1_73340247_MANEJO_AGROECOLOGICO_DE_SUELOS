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

    .bloque-texto-g.bloque-texto-g--inverso.bg06.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los insumos agrícolas corresponden a los materiales y productos empleados para apoyar el crecimiento, desarrollo y manejo de los cultivos. Estos recursos son fundamentales para garantizar el establecimiento adecuado de las plantas y mejorar las condiciones de producción.

          br
          br
          | En los sistemas agrícolas pueden utilizarse semillas, abonos, compostajes, biofertilizantes y otros materiales necesarios para el desarrollo de las actividades productivas. En agroecología se prioriza el uso de insumos orgánicos o biológicos que contribuyan a la conservación del ambiente y al equilibrio de los ecosistemas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8.
      span Tipos de insumos agrícolas

    .tabla-a.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.w-25.izq.bg05 Tipo de insumo
            th.izq.w-50.bg05 Función
            th.izq.bg05 Ejemplos
          tbody
            tr
              td #[b Semillas]
              td Constituyen el material básico para el establecimiento de los cultivos, ya que permiten iniciar el proceso productivo mediante la germinación y desarrollo de las plantas. La calidad de las semillas influye directamente en el crecimiento, productividad, adaptación al entorno y resistencia de los cultivos frente a condiciones ambientales y fitosanitarias.
              td Semillas de maíz, fríjol, arroz, tomate, lechuga y cilantro.

            tr
              td #[b Abonos orgánicos]
              td Mejoran la fertilidad del suelo mediante el aporte de nutrientes esenciales y materia orgánica. Además, favorecen la actividad biológica del suelo, incrementan la capacidad de retención de humedad y contribuyen a mantener condiciones adecuadas para el desarrollo de las plantas y la sostenibilidad del sistema productivo.
              td Gallinaza, estiércol bovino, humus de lombriz, bocashi y abonos verdes.

            tr
              td #[b Compostajes]
              td Aportan nutrientes y materia orgánica provenientes de la descomposición controlada de residuos vegetales y orgánicos. Su aplicación mejora la estructura del suelo, estimula la actividad de microorganismos benéficos y favorece procesos naturales relacionados con la fertilidad y conservación del suelo agrícola.
              td Compost elaborado con residuos de cocina, hojas secas, pasto cortado y restos de cosecha.

            tr
              td #[b Biofertilizantes]
              td Favorecen procesos biológicos del suelo mediante la incorporación de microorganismos benéficos que ayudan en la transformación y disponibilidad de nutrientes para las plantas. Además, contribuyen al equilibrio biológico del suelo, fortalecen el desarrollo vegetal y promueven prácticas agrícolas sostenibles con menor impacto ambiental.
              td Microorganismos de montaña, bokashi, lixiviados orgánicos y preparados microbiológicos.

            tr
              td #[b Material vegetal]
              td Corresponde a partes de plantas utilizadas para la propagación y establecimiento de cultivos, como estacas, plántulas, esquejes o rizomas. Este material permite la reproducción de especies agrícolas conservando características productivas deseables y facilitando la adaptación de los cultivos a las condiciones del territorio.
              td Estacas de yuca, plántulas de café, esquejes de caña, rizomas de plátano y colinos de banano.

    p Los insumos agrícolas son fundamentales para el desarrollo de los cultivos, ya que aportan nutrientes y materiales que favorecen su crecimiento, mejoran la fertilidad del suelo, conservan la humedad y apoyan las labores de manejo agrícola. Además, cuando se utilizan de manera responsable, especialmente los insumos orgánicos y biológicos, contribuyen a la sostenibilidad de los sistemas productivos, protegen los recursos naturales y optimizan el rendimiento y la calidad de la producción agrícola.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Equipos y herramientas agrícolas básicas

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.mb-3 
        img(src="@/assets/curso/temas/t3/img03.png")
      .col-lg-7
        p Las herramientas y equipos agrícolas son implementos utilizados para facilitar las labores desarrolladas en el sistema productivo. Su uso permite mejorar la eficiencia del trabajo y reducir esfuerzos físicos durante las actividades agrícolas.
        p Las herramientas manuales son ampliamente utilizadas en pequeñas unidades productivas y actividades agroecológicas. Entre ellas se encuentran el azadón, la pala, el machete, el rastrillo y la regadera. También pueden emplearse equipos básicos para fumigación, riego o preparación del terreno.

    h4.bg03.p-2.col-lg-4 Herramientas y equipos agrícolas:
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/1.png' alt='')
        h4.text-center Azadón
        p.text-center Se utiliza para remover y aflojar el suelo, mejorar la aireación, facilitar la infiltración de agua y favorecer el desarrollo de las raíces.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/2.png' alt='')
        h4.text-center Pala
        p.text-center Sirve para excavar, recolectar y trasladar tierra, abonos y otros materiales necesarios en las labores agrícolas.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/3.png' alt='')
        h4.text-center Machete
        p.text-center Se emplea para limpiar, cortar vegetación, controlar arvenses y realizar podas y mantenimiento de cultivos.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/4.png' alt='')
        h4.text-center Rastrillo
        p.text-center Permite nivelar el terreno, recoger residuos vegetales y distribuir materiales sobre la superficie del suelo.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5
            img(src='@/assets/curso/temas/t3/5.png' alt='')
        h4.text-center Fumigadora
        p.text-center Se utiliza para aplicar de manera uniforme biofertilizantes, preparados orgánicos y productos para el manejo fitosanitario de los cultivos.

    p El uso adecuado de las herramientas agrícolas permite realizar labores como la preparación del terreno, la siembra y el mantenimiento de los cultivos de forma más eficiente, precisa y segura. Además, reduce el esfuerzo físico y el riesgo de accidentes, facilita el manejo adecuado del cultivo y contribuye a una mejor organización y sostenibilidad de las actividades agrícolas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Uso adecuado y mantenimiento de herramientas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 El mantenimiento de herramientas y equipos agrícolas es fundamental para garantizar su funcionamiento y prolongar su vida útil. Las herramientas en buen estado permiten realizar las labores agrícolas de manera más eficiente y segura.
          br
          br
          | El mantenimiento básico incluye limpieza, secado, afilado, lubricación y almacenamiento adecuado de los implementos utilizados en el trabajo agrícola. Estas prácticas ayudan a prevenir daños y disminuyen riesgos durante las actividades productivas

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 9.
      span Actividades de mantenimiento

    .tabla-a.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.w-25.izq.bg05 Actividad
            th.izq.bg05 Finalidad
          tbody
            tr
              td #[b Limpieza]
              td Eliminar residuos de tierra, humedad, restos vegetales y suciedad acumulada en las herramientas y equipos después de cada uso, evitando el deterioro prematuro, la proliferación de microorganismos y la disminución de la eficiencia durante las labores agrícolas.

            tr
              td #[b Secado]
              td Reducir la presencia de humedad en las herramientas y equipos para prevenir procesos de oxidación, corrosión y desgaste de las superficies metálicas, contribuyendo a conservar su estado y prolongar su vida útil.

            tr
              td #[b Afilado]
              td Mantener en buen estado las superficies de corte de herramientas como machetes, azadones y tijeras, permitiendo realizar labores agrícolas con mayor precisión, menor esfuerzo físico y mejores condiciones de seguridad durante el trabajo.

            tr
              td #[b Lubricación]
              td Favorecer el adecuado funcionamiento de equipos y partes móviles mediante la aplicación de aceites o grasas que disminuyen la fricción, reducen el desgaste mecánico y facilitan el movimiento eficiente de los implementos agrícolas.

            tr
              td #[b Almacenamiento]
              td Proteger las herramientas y equipos frente a factores ambientales como humedad, lluvia, polvo y exposición solar, además de facilitar su organización, conservación y disponibilidad para futuras actividades agrícolas.

    p El uso adecuado de herramientas y equipos agrícolas mejora la eficiencia, seguridad y organización de las labores productivas, además de prolongar su vida útil. Es fundamental emplear cada herramienta según su función, revisar su estado antes de usarla y mantenerla limpia y en buen estado. Asimismo, el almacenamiento adecuado y el uso de elementos de protección personal ayudan a prevenir accidentes y favorecen un trabajo agrícola más seguro y sostenible.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Seguridad y buenas prácticas en el manejo de recursos
    
    .row.justify-content-center.mb-4
      .col-lg-7.mb-3
        p Las actividades agrícolas requieren la aplicación de medidas de seguridad orientadas a proteger la salud de las personas y prevenir accidentes durante el trabajo en el campo. Las buenas prácticas agrícolas permiten desarrollar labores de manera más organizada, segura y sostenible.
        p El manejo responsable de herramientas, equipos e insumos contribuye a reducir riesgos y favorece la conservación del ambiente. Asimismo, el cumplimiento de normas básicas de seguridad fortalece las condiciones de trabajo y mejora la eficiencia de las actividades productivas.
      .col-lg-5
        img(src="@/assets/curso/temas/t3/img05.png")

    h4.bg03.p-2.col-lg-4.mb-4 a) Medidas básicas de seguridad
    p Las medidas básicas de seguridad son acciones preventivas que buscan proteger la salud e integridad de las personas durante el desarrollo de las actividades agrícolas, reduciendo riesgos de accidentes, lesiones y afectaciones al ambiente.

    .tarjeta.bgslyder.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Uso de elementos de protección personal (EPP)
            p El uso de guantes, botas, gafas de seguridad, tapabocas y ropa adecuada permite disminuir los riesgos asociados a las labores agrícolas. Estos elementos protegen frente a herramientas cortantes, partículas, sustancias químicas y condiciones ambientales adversas, contribuyendo a preservar la salud y la seguridad de los trabajadores.
          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/01.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Manipulación adecuada de herramientas
            p El manejo correcto de herramientas y equipos agrícolas ayuda a prevenir accidentes y lesiones. Es importante utilizar cada herramienta según su función, verificar previamente su estado y aplicar técnicas adecuadas de uso para evitar cortes, golpes, caídas y esfuerzos físicos innecesarios.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/02.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Organización del espacio de trabajo
            p Mantener las áreas de trabajo ordenadas facilita la movilidad y el desarrollo eficiente de las actividades agrícolas. La correcta ubicación de herramientas, materiales e insumos reduce riesgos de accidentes y fortalece hábitos de orden y responsabilidad.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/03.png', alt='')

        .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
          .col-lg-6.mb-4.mb-md-0
            h4 Almacenamiento correcto de insumos
            p Los insumos agrícolas deben almacenarse en lugares seguros, ventilados y organizados para conservar sus propiedades y evitar riesgos de contaminación, derrames o deterioro. Un almacenamiento adecuado facilita el control de los materiales y contribuye a la protección de la salud y el ambiente.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/04.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Limpieza de las áreas de trabajo
            p La limpieza permanente de los espacios agrícolas favorece condiciones adecuadas de higiene y seguridad. La eliminación de residuos y materiales innecesarios disminuye riesgos de accidentes y contribuye a mantener ambientes saludables para las personas y los cultivos.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/05.png', alt='')

    h4.bg03.p-2.col-lg-4.mb-4 b) Buenas Prácticas Agrícolas (BPA)
    p Las Buenas Prácticas Agrícolas (BPA) son un conjunto de procedimientos orientados a garantizar una producción agrícola segura, eficiente y sostenible. Su aplicación contribuye a la protección de la salud humana, la conservación de los recursos naturales y el mejoramiento de la calidad de los procesos productivos.
    
    .tarjeta.bgslyder2.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Utilizar herramientas en buen estado
            p El mantenimiento adecuado de las herramientas agrícolas permite realizar las labores con mayor precisión, seguridad y eficiencia. Herramientas limpias, afiladas y en buen estado reducen riesgos de accidentes y prolongan su vida útil.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/06.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Aplicar correctamente los insumos agrícolas
            p La utilización adecuada de los insumos permite optimizar su aprovechamiento y minimizar impactos negativos sobre el ambiente y los cultivos. Es importante respetar las dosis recomendadas y promover el uso responsable de insumos orgánicos y biológicos.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/07.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Mantener orden y limpieza en el área de trabajo
            p El orden y la limpieza facilitan el desarrollo de las actividades agrícolas, mejoran las condiciones de seguridad y reducen riesgos asociados a accidentes, contaminación y acumulación de residuos.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/08.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Proteger los recursos naturales
            p La conservación del suelo, el agua, la vegetación y la biodiversidad es esencial para la sostenibilidad de los sistemas productivos. Las BPA promueven acciones que previenen la degradación ambiental y favorecen el equilibrio ecológico.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/09.png', alt='')

        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Promover prácticas sostenibles y responsables
            p Las prácticas sostenibles buscan satisfacer las necesidades productivas sin comprometer los recursos naturales. Esto incluye el uso eficiente del agua, la conservación del suelo, la protección de la biodiversidad y el fortalecimiento de sistemas agrícolas resilientes y responsables con el ambiente y las comunidades rurales.

          .col-lg-4.col-10.col-md-7
            figure
              img(src='@/assets/curso/temas/t3/10.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia de las BPA
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img08.png', alt='')
    p La implementación de las Buenas Prácticas Agrícolas permite mejorar la productividad, fortalecer la seguridad en el trabajo, proteger los recursos naturales y contribuir al desarrollo de sistemas agrícolas sostenibles, responsables y respetuosos con el entorno.
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

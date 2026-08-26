<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Suelo y ciclos productivos del cultivo

    .fondo01(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11.col-11
            .row.justify-content-center.mb-2
              .col-lg-8.mb-3
                p.bg01.p-4 El suelo es uno de los recursos naturales más importantes para el desarrollo de la agricultura, debido a que proporciona soporte, agua y nutrientes necesarios para el crecimiento de las plantas. Sus características físicas, químicas y biológicas influyen directamente en la productividad agrícola y en la sostenibilidad de los sistemas de producción.
                p De igual manera, los cultivos presentan ciclos vegetativos y productivos que determinan las diferentes etapas de crecimiento y manejo agrícola. El conocimiento general del suelo y de los ciclos del cultivo permite comprender las necesidades de las plantas, planificar las actividades productivas y promover prácticas sostenibles orientadas a la conservación de los recursos naturales.
              .col-lg-4.col-8.col-md-6
                img(src='@/assets/curso/temas/t4/img01.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Propiedades físicas, químicas y biológicas del suelo

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-10
          img(src='@/assets/curso/temas/t4/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.col-3.col-md-2
              img(src='@/assets/curso/temas/t4/img03.png', alt='')
            .col-lg-10
              p El suelo está compuesto por minerales, materia orgánica, agua, aire y organismos vivos que interactúan constantemente dentro del ecosistema agrícola. Sus propiedades permiten evaluar las condiciones del terreno y comprender su capacidad para sostener el desarrollo de los cultivos.
          p Las propiedades físicas están relacionadas con características como textura, estructura, porosidad y retención de agua. Las propiedades químicas incluyen aspectos relacionados con nutrientes, pH y fertilidad. Por su parte, las propiedades biológicas corresponden a la presencia de microorganismos y organismos vivos que participan en procesos de descomposición y transformación de nutrientes.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Propiedades del suelo

    p El suelo es la base de la producción agrícola, ya que proporciona a las plantas #[b soporte, agua, aire y nutrientes] necesarios para su crecimiento. Sus propiedades se clasifican en físicas, químicas y biológicas.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12.mb-3 
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="a. Propiedades físicas")
              .col-lg-7.mb-4.mb-md-0
                p Son las características relacionadas con la forma y composición del suelo.
                h5 Incluyen:
                p #[b • Textura:] cantidad de arena, limo y arcilla. 
                p #[b • Estructura:] forma en que se agrupan las partículas. 
                p #[b • Porosidad:] espacios por donde circulan el agua y el aire. 
                p #[b • Humedad:] capacidad para retener agua. 

                h5 ¿Por qué son importantes?
                p Permiten el crecimiento de las raíces, la circulación del agua y una adecuada aireación del suelo.
              .col-lg-4.col-md-8
                img(src="@/assets/curso/temas/t4/01.png")
            .row.justify-content-center(titulo="b. Propiedades químicas")
              .col-lg-7.mb-4.mb-md-0
                p Se relacionan con los nutrientes y la fertilidad del suelo.
                h5 Incluyen:
                p #[b • Nutrientes:] elementos necesarios para las plantas.
                p #[b • pH:] nivel de acidez o alcalinidad.
                p #[b • Materia orgánica:] restos vegetales y animales en descomposición.

                h5 ¿Por qué son importantes?
                p Favorecen la nutrición de las plantas y mejoran la fertilidad del suelo.

              .col-lg-4.col-md-8
                img(src="@/assets/curso/temas/t4/02.png")

            .row.justify-content-center(titulo="c. Propiedades biológicas")
              .col-lg-7.mb-4.mb-md-0
                p Corresponden a los organismos vivos que habitan en el suelo.
                h5 Incluyen:
                p #[b •] Bacterias.
                p #[b •] Hongos.
                p #[b •] Lombrices.
                p #[b •] Otros microorganismos.

                h5 ¿Por qué son importantes?
                p Ayudan a descomponer la materia orgánica y a liberar nutrientes para las plantas.

              .col-lg-4.col-md-8
                img(src="@/assets/curso/temas/t4/03.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del suelo en la productividad agrícola
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.mb-3 
        img(src="@/assets/curso/temas/t4/img04.png")
      .col-lg-7
        p El suelo cumple funciones esenciales dentro de los sistemas agrícolas, ya que sirve como soporte físico para las plantas y proporciona los nutrientes necesarios para su desarrollo. Un suelo con buenas condiciones favorece la germinación, el crecimiento de raíces y la absorción de agua y nutrientes.
        p La productividad agrícola depende en gran medida del estado del suelo y de las prácticas de manejo implementadas en el sistema productivo. Procesos como erosión, compactación y pérdida de materia orgánica pueden afectar negativamente el rendimiento de los cultivos.

    h4.bg03.p-2.col-lg-4.mb-4(data-aos="zoom-in-left") Funciones del suelo en agricultura:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5.col-lg-6
            img(src='@/assets/curso/temas/t4/1.png' alt='')
        h4.text-center Soporte físico
        p.text-center El suelo actúa como la base que sostiene y fija las raíces de las plantas, permitiendo su estabilidad y desarrollo adecuado durante todas las etapas del cultivo. Además de brindar soporte estructural, facilita el crecimiento de las raíces y su capacidad para explorar el terreno en busca de agua y nutrientes necesarios para el desarrollo vegetal.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5.col-lg-6
            img(src='@/assets/curso/temas/t4/2.png' alt='')
        h4.text-center Reserva de agua
        p.text-center El suelo tiene la capacidad de almacenar y conservar agua en sus poros, suministrando la humedad necesaria para el crecimiento y desarrollo de las plantas. Esta función es fundamental para mantener los cultivos durante períodos de poca lluvia y garantizar la disponibilidad de agua para procesos fisiológicos como la absorción de nutrientes y la fotosíntesis.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5.col-lg-6
            img(src='@/assets/curso/temas/t4/3.png' alt='')
        h4.text-center Disponibilidad de nutrientes
        p.text-center El suelo proporciona elementos minerales y nutrientes esenciales requeridos para el crecimiento de las plantas, como nitrógeno, fósforo, potasio y otros micronutrientes. Estos nutrientes son absorbidos por las raíces y participan en procesos fundamentales relacionados con el desarrollo vegetal, la formación de tejidos y la producción agrícola.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5.col-lg-6
            img(src='@/assets/curso/temas/t4/4.png' alt='')
        h4.text-center Actividad biológica
        p.text-center El suelo alberga una gran diversidad de microorganismos y organismos vivos, como bacterias, hongos, lombrices e insectos, que participan en procesos naturales de descomposición y reciclaje de materia orgánica. Esta actividad biológica favorece la transformación de nutrientes, mejora la fertilidad del suelo y contribuye al equilibrio ecológico dentro del sistema agrícola.

      .tarjeta.bgtarjeta.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-5.col-lg-6
            img(src='@/assets/curso/temas/t4/5.png' alt='')
        h4.text-center Regulación ambiental
        p.text-center El suelo participa activamente en diferentes ciclos naturales relacionados con el agua, los nutrientes y la materia orgánica, contribuyendo a la conservación de los ecosistemas y al equilibrio ambiental. Además, ayuda a filtrar agua, almacenar carbono y reducir procesos de erosión y degradación ambiental, favoreciendo la sostenibilidad de los sistemas productivos y la protección de los recursos naturales.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del suelo en la productividad agrícola
    P El suelo puede deteriorarse por causas naturales y actividades humanas que afectan su fertilidad, productividad y equilibrio ambiental.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-md-9 
        img(src='@/assets/curso/temas/t4/img06.png' alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a)" titulo="Erosión")
            .col-md-12.mb-4.mb-md-0
              p Es la pérdida de la capa superficial del suelo por acción del agua, el viento o prácticas inadecuadas. Reduce nutrientes, materia orgánica y capacidad productiva.

          .row(numero="b)" titulo="Compactación")
            .col-md-12.mb-4.mb-md-0
              p Ocurre cuando el suelo se comprime excesivamente, disminuyendo los espacios para el agua y el aire. Esto dificulta el crecimiento de las raíces y el desarrollo de los cultivos.

          .row(numero="c)" titulo="Pérdida de cobertura vegetal")
            .col-md-12.mb-4.mb-md-0
              p La eliminación de la vegetación deja el suelo expuesto a la erosión, la pérdida de humedad y el deterioro de su estructura, afectando la biodiversidad y la conservación del agua.

          .row(numero="d)" titulo="Uso inadecuado de insumos")
            .col-md-12.mb-4.mb-md-0
              p El uso excesivo o incorrecto de fertilizantes y plaguicidas puede contaminar el suelo, disminuir su fertilidad y afectar los microorganismos benéficos.

          .row(numero="e)" titulo="Contaminación ambiental")
            .col-md-12.mb-4.mb-md-0
              p La acumulación de residuos y sustancias contaminantes altera las propiedades del suelo, reduce su calidad y afecta los ecosistemas y la producción agrícola.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Ciclos vegetativos de los cultivos

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t4/img07.png', alt='')
    p Los cultivos pasan por diferentes etapas de crecimiento y desarrollo que conforman el ciclo vegetativo, desde la germinación hasta la maduración. Cada etapa tiene necesidades específicas y su conocimiento permite un mejor manejo agrícola.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Etapas del ciclo vegetativo

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-md-9 
        img(src='@/assets/curso/temas/t4/img08.png' alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a)" titulo="Germinación")
            .col-md-12.mb-4.mb-md-0
              p Es la primera etapa, cuando la semilla inicia su crecimiento al tener agua, oxígeno, luz y temperatura adecuada. Se activa el desarrollo de la raíz y el brote inicial, marcando el establecimiento del cultivo.

          .row(numero="b)" titulo="Desarrollo vegetativo")
            .col-md-12.mb-4.mb-md-0
              p Ocurre el crecimiento de raíces, tallos y hojas. La planta se fortalece y realiza procesos como la fotosíntesis. En esta fase requiere agua, nutrientes y buenas condiciones ambientales.

          .row(numero="c)" titulo="Floración")
            .col-md-12.mb-4.mb-md-0
              p Es la etapa reproductiva en la que aparecen las flores. Se forman los órganos reproductivos que permiten la fecundación y la futura producción de frutos y semillas.

          .row(numero="d)" titulo="Fructificación")
            .col-md-12.mb-4.mb-md-0
              p Se presenta cuando se desarrollan los frutos después de la floración. La planta dirige nutrientes y energía a su formación, determinando el rendimiento del cultivo.

          .row(numero="e)" titulo="Maduración")
            .col-md-12.mb-4.mb-md-0
              p Corresponde a la etapa final, cuando los frutos o semillas alcanzan las condiciones para la cosecha. Se presentan cambios en color, textura y sabor.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del ciclo vegetativo

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-md-9
        img(src='@/assets/curso/temas/t4/img09.png' alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a)" titulo="Facilita la planificación agrícola")
            .col-md-12.mb-4.mb-md-0
              p Permite organizar actividades como siembra, riego, fertilización y cosecha en el momento adecuado.

          .row(numero="b)" titulo="Identifica necesidades del cultivo")
            .col-md-12.mb-4.mb-md-0
              p Ayuda a reconocer requerimientos de agua, nutrientes y manejo en cada etapa.

          .row(numero="c)" titulo="Favorece el uso eficiente de recursos")
            .col-md-12.mb-4.mb-md-0
              p Permite optimizar agua, insumos y herramientas, reduciendo costos y desperdicios.

          .row(numero="d)" titulo="Mejora la productividad")
            .col-md-12.mb-4.mb-md-0
              p Facilita aplicar manejos oportunos que aumentan el rendimiento y la calidad del cultivo.

          .row(numero="e)" titulo="Permite el seguimiento del cultivo")
            .col-md-12.mb-4.mb-md-0
              p Ayuda a evaluar el desarrollo de las plantas y tomar decisiones oportunas ante problemas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Etapas del ciclo productivo y manejo del cultivo
    p El ciclo productivo agrupa las actividades desde la preparación del terreno hasta el almacenamiento de la producción agrícola. Cada etapa es clave para garantizar un cultivo saludable, productivo y sostenible.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-md-9
        img(src='@/assets/curso/temas/t4/img10.png' alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a)" titulo="Preparación del terreno")
            .col-md-12.mb-4.mb-md-0
              p Es la adecuación del suelo antes de la siembra. Incluye limpieza del área, eliminación de residuos y acondicionamiento del suelo. Esto mejora sus condiciones físicas, facilita la infiltración de agua y favorece el desarrollo de las raíces.

          .row(numero="b)" titulo="Siembra")
            .col-md-12.mb-4.mb-md-0
              p Consiste en la colocación de semillas o material vegetal en el terreno preparado. Requiere condiciones adecuadas de humedad, profundidad y distancia entre plantas para asegurar una buena germinación y crecimiento inicial.

          .row(numero="c)" titulo="Manejo del cultivo")
            .col-md-12.mb-4.mb-md-0
              p Incluye todas las labores necesarias para el desarrollo del cultivo, como riego, fertilización, control de arvenses y monitoreo. Estas acciones garantizan el crecimiento adecuado de las plantas y mejoran la productividad.

          .row(numero="d)" titulo="Cosecha")
            .col-md-12.mb-4.mb-md-0
              p Es la recolección de los productos agrícolas cuando alcanzan su madurez. Se realiza en el momento oportuno para evitar pérdidas y asegurar la calidad del producto.

          .row(numero="e)" titulo="Almacenamiento")
            .col-md-12.mb-4.mb-md-0
              p Comprende la conservación de los productos después de la cosecha mediante limpieza, clasificación, empaque y almacenamiento adecuado. Esto evita daños por humedad, plagas o contaminación.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg02.py-1.w-card-text Importancia del manejo del cultivo

    .row.justify-content-center.mb-3.bgt4.g-0(data-aos="zoom-in-left")
      .col-lg-5.p-0.d-none.d-lg-block
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img11.png', alt='')
      .col-lg-7
        .row.mb-0.p-4
          .col-lg-2.mb-3.col-4.col-md-3
            img.wid15(src='@/assets/curso/temas/t4/pala.png', alt='')
          .col-lg-12
            p El manejo del cultivo comprende todas las actividades realizadas durante el proceso productivo, como riego, fertilización, control de arvenses y monitoreo, con el fin de garantizar el crecimiento adecuado de las plantas y mejorar la productividad.
            p Su importancia radica en que mejora las condiciones de producción, favorece el desarrollo de las plantas y permite un uso eficiente de los recursos agrícolas como agua, suelo e insumos. Además, contribuye a la sostenibilidad del sistema productivo al promover prácticas responsables con el ambiente y la conservación de los recursos naturales.
            p También facilita la aplicación de buenas prácticas agrícolas, asegurando sistemas productivos más organizados, seguros, eficientes y sostenibles.































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

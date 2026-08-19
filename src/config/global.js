export default {
  global: {
    Name: 'Reconocimiento agroecológico del entorno y del suelo',
    Description:
      'Este componente formativo desarrolla capacidades para identificar las características del entorno agroecológico, la vegetación asociada, las propiedades generales del suelo y los ciclos productivos de los cultivos. Asimismo, promueve el uso de cartografía social y el reconocimiento de insumos, equipos y herramientas necesarias para apoyar procesos agrícolas sostenibles y contextualizados al territorio.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Reconocimiento del entorno agroecológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cartografía social y diagnóstico territorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recursos para la producción agrícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Suelo y ciclos productivos del cultivo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Enfoque de producción agrícola que integra principios ecológicos, sociales y culturales para desarrollar sistemas sostenibles.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de especies vegetales, animales y microorganismos presentes en un ecosistema.',
    },
    {
      termino: 'Cartografía social',
      significado:
        'Herramienta participativa utilizada para representar y analizar el territorio y sus características.',
    },
    {
      termino: 'Cobertura vegetal',
      significado:
        'Conjunto de plantas o residuos orgánicos que protegen la superficie del suelo.',
    },
    {
      termino: 'Compactación',
      significado:
        'Problema del suelo causado por la presión excesiva que reduce los espacios porosos.',
    },
    {
      termino: 'Compostaje',
      significado:
        'Proceso de descomposición de residuos orgánicos para obtener abono natural.',
    },
    {
      termino: 'Conservación',
      significado:
        'Acciones orientadas a proteger y mantener los recursos naturales y el equilibrio ambiental.',
    },
    {
      termino: 'Cultivo',
      significado:
        'Conjunto de plantas sembradas y manejadas con fines productivos o alimentarios.',
    },
    {
      termino: 'Erosión',
      significado:
        'Desgaste y pérdida de la capa superficial del suelo por acción del agua, viento o actividades humanas.',
    },
    {
      termino: 'Fertilidad',
      significado:
        'Capacidad del suelo para proporcionar nutrientes y condiciones adecuadas para el crecimiento de las plantas.',
    },
    {
      termino: 'Germinación',
      significado:
        'Etapa inicial del desarrollo de la planta en la que la semilla comienza a crecer.',
    },
    {
      termino: 'Insumos agrícolas',
      significado:
        'Materiales utilizados en la producción agrícola, como semillas, abonos y biofertilizantes.',
    },
    {
      termino: 'Materia orgánica',
      significado:
        'Restos de origen vegetal o animal presentes en el suelo que mejoran su fertilidad.',
    },
    {
      termino: 'Suelo',
      significado:
        'Recurso natural compuesto por minerales, materia orgánica, agua y organismos vivos que sustenta las plantas.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio geográfico donde interactúan elementos ambientales, sociales, culturales y productivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ciencias sin Límites. (s. f.). Estrategias para el uso eficiente de recursos en la agricultura.',
      link: '',
    },
    {
      referencia:
        'Jacto. (2024, 16 de julio). Cultivos. Blog Latinoamérica Jacto.',
      link: '',
    },
    {
      referencia:
        'Pulido Arredondo, L. J. (2026, 17 de febrero). Política pública de agroecología en Colombia: logros, aprendizajes y desafíos. Heinrich Böll Stiftung.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2022). Experiencias de transición agroecológica en Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (s. f.). ¿Qué es la agroecología?',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2021). El estado de los recursos de tierras y aguas del mundo para la alimentación y la agricultura: sistemas al límite.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2012). Documento académico disponible en el repositorio institucional.',
      link: '',
    },
    {
      referencia:
        'Universidad Distrital Francisco José de Caldas. (s. f.). Documento académico sobre agroecología y sostenibilidad rural. Revista Biografía.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

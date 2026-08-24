<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos sobre agroecología y suelo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos relacionados con el reconocimiento agroecológico del entorno y del suelo, mediante la identificación de conceptos sobre territorio, propiedades del suelo, biodiversidad, cartografía social y prácticas agrícolas sostenibles.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué permite el reconocimiento agroecológico del entorno?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el uso de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender las características ambientales y productivas del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la biodiversidad del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 2,
          texto: '¿Cuál es una propiedad física del suelo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'pH.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Textura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nutrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 3,
          texto: '¿Qué elemento corresponde a una propiedad química del suelo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porosidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Humedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Materia orgánica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 4,
          texto: '¿Qué favorece la actividad biológica del suelo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La compactación del terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El reciclaje de nutrientes y descomposición de materia orgánica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La pérdida de cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La erosión hídrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 5,
          texto: '¿Cuál es una práctica que favorece la biodiversidad?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tala de bosques.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monocultivo permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asociación de cultivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 6,
          texto: '¿Qué busca la cartografía social?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el trabajo comunitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar y analizar el territorio de manera participativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar las prácticas agrícolas tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el uso de maquinaria pesada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 7,
          texto: '¿Cuál es una función del suelo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar combustibles fósiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la contaminación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servir como soporte físico para las plantas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la biodiversidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 8,
          texto: '¿Qué puede causar la erosión del suelo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La conservación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aumento de microorganismos benéficos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La pérdida de nutrientes y materia orgánica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 9,
          texto: '¿Qué ocurre durante la germinación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formación de frutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inicio del crecimiento de la planta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aparición de flores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maduración del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 10,
          texto:
            '¿Qué actividad se realiza en la etapa de preparación del terreno?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recolección de frutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificación de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adecuación del suelo para la siembra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Comercialización agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },
        {
          id: 11,
          texto: '¿Qué favorece el manejo adecuado del cultivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La degradación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El crecimiento saludable de las plantas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La pérdida de fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El desperdicio de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 12,
          texto: '¿Cuál es un ejemplo de insumo agrícola?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cemento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Semillas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Combustible fósil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vidrio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 13,
          texto: '¿Qué permite el uso adecuado de herramientas agrícolas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar accidentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la eficiencia del trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar las labores agrícolas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Deteriorar el cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 14,
          texto:
            '¿Qué elemento ayuda a proteger la biodiversidad del territorio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación de árboles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contaminación de quebradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compactación del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protección de fuentes hídricas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 15,
          texto:
            '¿Cuál es una recomendación para el uso adecuado de herramientas?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizarlas para cualquier función.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guardarlas húmedas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantenerlas limpias y organizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exponerlas permanentemente al sol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 16,
          texto: '¿Qué favorecen las coberturas vegetales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La conservación de humedad y protección del suelo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La erosión del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La pérdida de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La contaminación ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 17,
          texto: '¿Qué permite identificar la cartografía social?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente áreas urbanas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recursos y problemáticas del territorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solamente vías de acceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente cultivos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 18,
          texto: '¿Qué función cumple la materia orgánica en el suelo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Favorecer la fertilidad y actividad biológica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compactar el terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la humedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 19,
          texto: '¿Qué favorecen las buenas prácticas agrícolas?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El deterioro ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El uso inadecuado del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La producción segura y sostenible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La contaminación del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },

        {
          id: 20,
          texto:
            '¿Por qué es importante conocer el ciclo vegetativo de los cultivos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque evita la planificación agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reduce la productividad agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque elimina el manejo del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite identificar las necesidades del cultivo en cada etapa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un adecuado dominio de los conceptos relacionados con el reconocimiento agroecológico del entorno y del suelo.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con el reconocimiento agroecológico del entorno y del suelo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

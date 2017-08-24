/* globals Vue, axios, ga */
/* exported app, scroll */

var app = new Vue({
  el: '#app',
  data: {
    menu: {
      items: [
        { id: 'works', name: 'Obras' },
        { id: 'biography', name: 'Biografía' },
        { id: 'contact', name: 'Contacto' }
      ],
      active: false
    },
    works: [
      {
        name: 'Abstracción²',
        category: 'Instalación',
        description: '<strong>2017</strong> La obra toma como referencia los textos de Oskar Schlemmer y su obra Triadisches Ballet (Ballet Triádico). En la misma número tres está representado por tres variables, el color, la figura geométrica y su disposición. En cuanto al color, están presentes el blanco, el negro y el rosado. A la vez, son tres las figuras geométricas representadas, el cuadrado, el triángulo y el círculo. Con respecto a su disposición, la obra esta compuesta por tres filas y tres columnas.',
        details: '',
        cover: [
          { src: '/images/works/abstraccion/0.png', align: 'right' },
          { src: '/images/works/abstraccion/1.png', align: 'right' },
          { src: '/images/works/abstraccion/2.png', align: 'right' }
        ]
      },
      {
        name: 'Retrospectiva',
        category: '365 Geometrical Days',
        description: '<strong>2017</strong> 365 Geometrical Days es una obra que abarca el recorrido de un año completo de producción artística realizada y compartida cada día. Casi un año después de haber terminado este recorrido, surgió la posibilidad de exponer 365 Geometrical Days. Para esta muestra retrospectiva se expusieron las micro-esculturas, fotografías, dibujos y pinturas que fueron creadas en torno a 365 Geometrical Days, en relación al camino recorrido y a lo aprendido al transitar el mismo.',
        details: '',
        cover: [
          { src: '/images/works/365-retrospective/0.png', align: 'right' },
          { src: '/images/works/365-retrospective/1.png', align: 'right' },
          { src: '/images/works/365-retrospective/2.png', align: 'right' }
        ],
        conected: true
      },
      {
        name: '',
        category: '',
        description: '',
        details: '',
        cover: [
          { src: '/images/works/365-retrospective/3.png', align: 'center' },
          { src: '/images/works/365-retrospective/4.png', align: 'center' },
          { src: '/images/works/365-retrospective/5.png', align: 'center' }
        ]
      },
      {
        name: 'The Big Picture',
        category: 'Pintura',
        description: '<strong>2017</strong> La obra se encuadra dentro del minimalismo geométrico, al disponer sus partes en distintas posiciones se obtienen diversas obras y diversas lecturas de la misma.',
        details: '<em>Materiales: Pintura acrílica y diversos materiales sobre papel algodón 400 gr.</em> <em>Medidas: 70 x 85 cm.</em>',
        cover: [
          { src: '/images/works/the-big-picture/0.png', align: 'right' },
          { src: '/images/works/the-big-picture/1.png', align: 'right' },
          { src: '/images/works/the-big-picture/2.png', align: 'right' }
        ]
      },
      {
        name: 'Balance I y II',
        category: 'Escultura',
        description: '<strong>2016</strong> Cada cúpula, dentro de su fragilidad, guarda un significado único e inalterable al paso del tiempo. A través de estas esculturas busco generar un alfabeto visual que al conjugar las pequeñas piezas que las componen, plasmen un poema visual.',
        details: '<em>Materiales: Madera, cartón, pintura acrílica, laca sintética.</em> <em>Medidas: Cada una de 12 x 18 x 12 cm.</em>',
        cover: [
          { src: '/images/works/balance/0.png', align: 'right' },
          { src: '/images/works/balance/1.png', align: 'right' }
        ]
      },
      {
        name: '365 Geometrical Days',
        category: 'Obra Temporal',
        description: '<strong>2015 - 2016</strong> Un proyecto que nació con la idea de crear y compartir una pequeña pieza de arte todos los días durante un año. El proyecto nace el 1 de agosto del año 2015, finaliza el 31 de julio del 2016 y comprende 365 mini-esculturas. Cada una de ellas corresponde a un día específico del año en el cual fue creada.',
        details: '',
        cover: [
          { src: '/images/works/365-geometrical-days/0.png', align: 'right' },
          { src: '/images/works/365-geometrical-days/1.png', align: 'right' },
          { src: '/images/works/365-geometrical-days/2.png', align: 'right' }
        ],
        conected: true
      },
      {
        name: '',
        category: '',
        description: 'El proyectó se compone de dos secciones, la primera de ellas esta materializada en las esculturas que se exponen en tres cuadros de gran tamaño, cada uno de ellos contiene 100 micro-esculturas, exponiendo un total de 300 mini-esculturas. La segunda sección del proyecto es la fotografía. Cada una de las piezas fue fotografiada el mismo día en que fue realizada con la idea de compartirla a través de las redes sociales. Utilicé Instagram como plataforma de difusión del proyecto complementando la narrativa de cada una de las piezas y aprovechando la literalidad que planteaban las esculturas para compartir las fotografías de forma creativa. A través de este proyecto me interesa investigar distintas interacciones que surgen en el espectador al momento del encuentro con las obras.',
        details: '',
        cover: [
          { src: '/images/works/365-geometrical-days/3.png', align: 'left' },
          { src: '/images/works/365-geometrical-days/4.png', align: 'left' },
          { src: '/images/works/365-geometrical-days/5.png', align: 'left' }
        ],
        mirrored: true,
        conected: true
      },
      {
        name: '',
        category: '',
        description: '',
        details: '',
        cover: [
          { src: '/images/works/365-geometrical-days/6.png', align: 'center' },
          { src: '/images/works/365-geometrical-days/7.png', align: 'center' },
          { src: '/images/works/365-geometrical-days/8.png', align: 'center' }
        ]
      },
      {
        name: 'Hats',
        category: 'Escultura',
        description: '<strong>2014</strong> La obra corresponde a cinco sombreros geométricos y a su fotografía.',
        details: '<em>Materiales: Cartón, pintura acrílica, tela, barniz sintético.</em> <em>Fotografía: Nik Lanús.</em>',
        cover: [
          { src: '/images/works/hats/0.png', align: 'right' }
        ],
        conected: true
      },
      {
        name: '',
        category: '',
        description: '',
        details: '',
        cover: [
          { src: '/images/works/hats/1.png', align: 'center' },
          { src: '/images/works/hats/2.png', align: 'center' },
          { src: '/images/works/hats/3.png', align: 'center' }
        ]
      }
    ],
    contact: {
      name: '',
      email: '',
      message: '',
      status: '',
      submit: 'Enviar'
    }
  },
  computed: {
    contact_form_valid: function () {
      var email_regex = /.+@.+\..+/i;
      if (this.contact.name.length > 4 || email_regex.test(this.email) || this.contact.message.length > 8) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    send_message: function () {
      var that = this;
      if (that.contact_form_valid) {
        that.contact.status = 'loading';
        that.contact.submit = 'Enviando...';
        axios.post('/contact.php', {
          name: that.contact.name,
          email: that.contact.email,
          message: that.contact.message
        })
        .then(function (response) {
          window.console.log(response);
          ga('send', 'event', 'contact', 'submitted');
          that.contact.status = 'success';
          that.contact.submit = 'Enviado :)';
          window.alert('¡Muchas gracias por ponerse en contacto! Su mensaje fue enviado con éxito, le responderemos a la brevedad.');
          that.contact.name = '';
          that.contact.email = '';
          that.contact.message = '';
        })
        .catch(function (error) {
          ga('send', 'event', 'contact', 'failed', error);
          that.contact.status = 'error';
          that.contact.submit = 'No enviado :(';
          window.alert('Ha ocurrido un error al enviar su mensaje, vuelva a intentarlo en unos momentos.');
        });
        window.setTimeOut(function() {
          that.contact.status = '';
          that.contact.submit = 'Enviar';
        }, 5000);
      } else {
        window.alert('Por favor, revise que los datos del mensaje estén completos y su dirección de correo electrónico sea correcta.');
      }
    }
  }
});
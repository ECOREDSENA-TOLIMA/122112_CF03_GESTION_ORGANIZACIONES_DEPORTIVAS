export default {
  global: {
    componenteFormativo: 'Implementación de un proyecto deportivo',
    descripcionCurso:
      'Este componente comprende conceptos y herramientas que se deben tener en cuenta para la implementación de un proyecto en una organización deportiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/00.svg'),
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
        titulo: 'Ejecución de un proyecto deportivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión de comunicaciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de conflictos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión de riesgos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión de la calidad y aseguramiento de la calidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de adquisiciones, compras y contrataciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de requerimientos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Selección de proveedores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control y seguimiento de cumplimiento de proveedores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Fuentes de financiación de la propuesta',
            hash: 't_2_4',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Selección, evaluación y reevaluación de proveedores',
      referencia:
        'Miguel, R. (2020). Procedimientos generales de proveedores. Grupo Lebbyac.',
      tipo: 'Manual de procedimiento',
      link:
        'http://www.lebbyac.com/manual2/Procedimientos_generales/proveedores.html',
    },
  ],
  glosario: [
    {
      termino: 'Proveedor',
      significado:
        'persona natural o jurídica que cumple con las exigencias establecidas por el laboratorio para prestar servicios o entregar suministros.',
    },
    {
      termino: 'Productos',
      significado:
        'corresponde a clasificación genérica para compras generales de bienes y productos tangibles (insumos, suministros, equipos, productos terminados, etc.).',
    },
    {
      termino: 'Servicios',
      significado:
        'clasificación genérica para compras de servicios, obras, contratistas, consultorías y otros servicios.',
    },
    {
      termino: 'Calidad',
      significado:
        'proceso continuo, sin fin, de mejora aplicable a todas las fases y componentes del proyecto, con el fin de mejorar los productos y servicios que la organización oferta.',
    },
    {
      termino: 'Aseguramiento de la calidad',
      significado:
        'aplicación de actividades planificadas y sistemáticas relativas a la calidad para asegurar que el proyecto emplee todos los procesos necesarios para cumplir con los requisitos.',
    },
    {
      termino: 'Conflicto',
      significado:
        'litigio o disputa percibe que la otra parte le ha afectado o perjudicado sus intereses.',
    },
  ],
  referencias: [
    {
      referencia:
        'IPMA - International Project Management Association. (2006). ICB Competence Baseline Version 3.0. IPMA.',
      link: '',
    },
    {
      referencia:
        'PMI - Project Management Institute. (2008). Organizational Project Management Maturity Model. Project Management Institute',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

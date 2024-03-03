<template lang="pug">
.btns
  img(src='@/assets/curso/16.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover")
      .col-md-12.p-2
        p.mb-0(v-html="boton.texto")
    
    

</template>

<script>
export default {
  name: 'BotonesC',
  data: () => ({
    indicador: true,
    hover: null,
    size: '5%',
    botones: [
      {
        pos_x: '38%',
        pos_y: '11%',
        texto:
          'Vertical (hacia arriba o abajo dentro de la jerarquía organizacional).',
      },
      {
        pos_x: '55.5%',
        pos_y: '11%',
        texto: 'Informales (correos electrónicos, conversaciones).',
      },
      {
        pos_x: '31.2%',
        pos_y: '29.5%',
        texto: 'Horizontal (entre miembros de un mismo rango o nivel).',
      },
      {
        pos_x: '63.9%',
        pos_y: '29.5%',
        texto: 'Formal (informes, memorando).',
      },
      {
        pos_x: '31.2%',
        pos_y: '55%',
        texto: 'Escrita y oral.',
      },
      {
        pos_x: '63.9%',
        pos_y: '55%',
        texto: 'Interna (dentro del proyecto).',
      },
      {
        pos_x: '38%',
        pos_y: '78%',
        texto: 'Verbal y no verbal.',
      },
      {
        pos_x: '56.6%',
        pos_y: '78%',
        texto: 'Externa (clientes, otros proyectos).',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    top: -20%
    left: 200%
    background-color: $color-acento-contenido
    width: 300px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, para la implementación exitosa de un proyecto deportivo en una organización, es esencial considerar conceptos y herramientas fundamentales. Se abordaron temas clave, como la ejecución del proyecto, la gestión de adquisiciones y contrataciones, la gestión de conflictos y riesgos, la selección de proveedores y las fuentes de financiación. Además, se enfatizó en la importancia de una eficiente gestión de comunicaciones para asegurar una fluida transmisión de información y coordinación en todas las etapas del proceso. A continuación, presentamos un mapa conceptual que resume estos aspectos de vital importancia para el éxito del proyecto deportivo.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

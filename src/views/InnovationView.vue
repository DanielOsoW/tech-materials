<template>
  <v-container>
    <br>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" lg="10">
        <v-card
        class="mx-auto fade-in"
        rounded="xl"
        elevation="6"
        >

        <v-row no-gutters>
            <v-col
            cols="12"
            lg="8"
            class="pa-8 text-left"
            style="background-color: #ffffff;"
            >
          <h1 class="text-black">
            Innovación
          </h1>

          <h3 class="text-black mt-3 font-weight-regular">
                En <span class="font-weight-bold">Tech Materials</span> la innovación es el motor de nuestro desarrollo. Buscamos estar a la vanguardia en tecnología, aplicando las últimas tendencias y metodologías en nuestros procesos de diseño, manufactura y pruebas.
          </h3>
          <h3 class="text-black mt-3 font-weight-regular">
                Nos enorgullece ofrecer soluciones innovadoras que optimicen la eficiencia, sostenibilidad y funcionalidad de los productos electrónicos. Colaboramos con investigadores y expertos en diversas disciplinas para crear productos que marquen la diferencia en la industria.
          </h3>
            <h3 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Áreas de Innovación:</span> 
          </h3>
          <h4 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Materiales Avanzados:</span> Investigación y desarrollo de materiales con propiedades mejoradas para optimizar el rendimiento de los dispositivos electrónicos.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Electrónica Flexible:</span> Soluciones tecnológicas que permiten la fabricación de productos electrónicos con materiales flexibles, ideales para dispositivos portátiles y aplicaciones wearables.
          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Inteligencia Artificial:</span> Integración de AI para automatizar procesos y mejorar la toma de decisiones en la fabricación de productos electrónicos.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Sostenibilidad:</span> Tecnologías ecoamigables y prácticas sostenibles para minimizar el impacto ambiental de nuestros productos.

          </h4>
          <h3 class="text-black mt-3 font-weight-regular">
                Descubre cómo podemos ayudarte a transformar tus ideas en soluciones innovadoras.
          </h3>
        </v-col>
    
      <v-col
          cols="12"
          lg="4"
          class="d-flex flex-column align-center justify-center pa-8"
          style="background-color: #a5701f;"
        >
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--lightbulb-on.png"  height="250">
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--chart-box-multiple-outline.png"  height="250">
       </v-col>
    </v-row>
    </v-card>

    </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
// @ is an alias to /src

export default {
}
</script>

<style>
.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
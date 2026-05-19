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
            Servicios
          </h1>

          <h3 class="text-black mt-3 font-weight-regular">
            En Tech Materials ofrecemos una gama completa de servicios orientados a cubrir cada etapa del desarrollo, producción y mejora de productos electrónicos. Nos especializamos en brindar soluciones integrales a empresas de distintas industrias que requieren innovación, precisión y eficiencia tecnológica.
          </h3>
          <h4 class="text-black mt-3 font-weight-regular">
            <span class="font-weight-bold">- Diseño Electrónico:</span> Desarrollo de circuitos impresos (PCB), esquemáticos, simulaciones y diseño de hardware a medida.
          </h4>
            <h4 class="text-black mt-2 font-weight-regular">
            <span class="font-weight-bold">- Prototipado Rápido:</span> Fabricación de prototipos funcionales para validar conceptos y acelerar los procesos de innovación.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
            <span class="font-weight-bold">- Producción en Serie:</span> Ensamblaje automatizado de placas electrónicas bajo estándares de calidad ISO.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
            <span class="font-weight-bold">- Integración de Sistemas:</span> Desarrollo de soluciones llave en mano, integrando hardware y software según requerimientos específicos.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
            <span class="font-weight-bold">- Pruebas y Control de Calidad:</span> Validación técnica, pruebas funcionales y verificación de estándares antes del despacho.

          </h4>
          <h4 class="text-black mt-2 font-weight-regular">
            <span class="font-weight-bold">- Asesoría Técnica:</span> Acompañamiento especializado en procesos de diseño, manufactura y escalabilidad de productos.

          </h4>
          <h3 class="text-black mt-3 font-weight-regular">
            Nuestros servicios están diseñados para optimizar costos, mejorar tiempos de entrega y garantizar confiabilidad en entornos exigentes. Trabajamos como socios estratégicos para nuestros clientes, impulsando su crecimiento con soluciones tecnológicas de alto impacto.
          </h3>
      </v-col>
    
      <v-col
          cols="12"
          lg="4"
          class="d-flex flex-column align-center justify-center pa-8"
          style="background-color: #1F2933;"
        >
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--clipboard-list-outline.png"  height="250">
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--account-service.png"  height="250">
        
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
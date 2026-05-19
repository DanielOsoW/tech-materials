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
            lg="4"
            class="d-flex flex-column align-center justify-center pa-8"
            style="background-color: #0F3057;"
            >
                <img  class="ml-5" alt="checklist" src="@/assets/mdi--tools.png"  height="250">
                <img  class="ml-5" alt="checklist" src="@/assets/mdi--computer-classic.png"  height="250">
            </v-col>
            <v-col
                cols="12"
                lg="8"
                class="pa-8 text-left"
                style="background-color: #ffffff;"
                >
        
                <h1 class="text-black">
                    Productos
                </h1>

                <h3 class="text-black mt-3 font-weight-regular">
                        En Tech Materials desarrollamos y fabricamos productos electrónicos innovadores, diseñados para adaptarse a las necesidades específicas de cada industria. Nuestra línea de productos se caracteriza por su precisión, eficiencia y alta durabilidad, cumpliendo con los más altos estándares internacionales.
                </h3>
                <h4 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Placas de Circuito Impreso (PCB):</span> Fabricación de PCBs de simple, doble cara y multicapa con acabados profesionales y personalización total.
                </h4>
                    <h4 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Módulos Electrónicos Integrados:</span> Sistemas embebidos listos para implementar en soluciones industriales, automotrices o energéticas.

                </h4>
                <h4 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Sensores y Actuadores:</span> Componentes especializados para medición, automatización y control de procesos industriales.

                </h4>
                <h4 class="black-white mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Fuentes de Alimentación:</span> Soluciones robustas de conversión y distribución de energía para equipos electrónicos de alta exigencia.

                </h4>
                <h4 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Kits de Desarrollo Electrónico:</span> Herramientas para pruebas, capacitación y desarrollo de prototipos personalizados.

                </h4>
                <h4 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold">- Equipos Electrónicos Personalizados:</span> Diseño y manufactura de productos a medida según los requerimientos técnicos de nuestros clientes.

                </h4>
                <h3 class="text-black mt-3 font-weight-regular">
                        Todos nuestros productos están respaldados por estrictos controles de calidad y un proceso de trazabilidad completo. Nuestro objetivo es entregar soluciones electrónicas confiables que impulsen el rendimiento y la innovación en cada proyecto.
                </h3>
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
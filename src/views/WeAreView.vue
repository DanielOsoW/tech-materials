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
            style="background-color: #6c0070;"
            >
                <img  class="ml-5" alt="checklist" src="@/assets/tech-blanco.png"  height="250">
                <img  class="ml-5" alt="checklist" src="@/assets/mdi--computer-classic.png"  height="250">
            </v-col>
            <v-col
                cols="12"
                lg="8"
                class="pa-8 text-left"
                style="background-color: #ffffff;"
                >
        
                <h1 class="text-black">
                    Quienes Somos
                </h1>

                <h3 class="text-black mt-3 font-weight-regular">
                    En <span class="font-weight-bold">Tech Materials</span>, somos una empresa líder en el diseño, manufactura y desarrollo de productos electrónicos de alta precisión. Con más de una década de experiencia en la industria, combinamos tecnología de vanguardia, procesos eficientes y un equipo humano altamente capacitado para entregar soluciones innovadoras y confiables.
                </h3>
                <h3 class="text-black mt-2 font-weight-regular">
                    Nuestra misión es impulsar el crecimiento de nuestros clientes a través de componentes electrónicos de calidad superior, fabricados bajo los más exigentes estándares internacionales.
                </h3>
                <h3 class="text-black mt-2 font-weight-regular">
                        Desde nuestros inicios, nos hemos comprometido con la <span class="font-weight-bold">innovación continua</span>, la <span class="font-weight-bold">sustentabilidad</span> y la <span class="font-weight-bold">excelencia operativa</span>. Hoy, Tech Materials se posiciona como un referente tecnológico en sectores como la automatización industrial, telecomunicaciones, energía y desarrollo electrónico.

                </h3>
                <h2 class="text-black mt-2 font-weight-regular">
                        <span class="font-weight-bold font-italic">Transformamos ideas en soluciones electrónicas concretas que mueven el mundo.</span>
                </h2>
                
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
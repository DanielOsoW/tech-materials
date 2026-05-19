<template>
  <v-container>
   
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="12" lg="11">
        <v-carousel cycle class="fade-in">
        <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/carrucel1.jpg" height="550"></v-carousel-item>
        <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/carrucel2.jpg" height="550"></v-carousel-item>
        <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/carrucel3.jpg" height="550"></v-carousel-item>
        <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/carrucel4.jpg" height="550"></v-carousel-item>

        
          <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/tech-color2.png" height="550"></v-carousel-item>

        <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/equipo.png" height="510"></v-carousel-item>

            <v-carousel-item
          cover
        > <img class="ml-5" alt="TM logo" src="@/assets/desarrollo.png" height="600"></v-carousel-item>
        </v-carousel>
        <br>
        
      </v-col>
    </v-row>


    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="12" lg="11">
        <v-card
          class="mx-auto pa-8 text-center fade-in2"
          rounded="xl"
          elevation="4"
          color="#4FA28C"
        >
          <h1 class="text-white">
            Soluciones en Manufactura de Productos Electrónicos
          </h1>

          <h3 class="text-white mt-3">
            Innovación tecnológica, materiales de alta calidad y desarrollo de ingeniería.
          </h3>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="12" lg="6">
          <v-card class="pa-6" elevation="3" rounded="xl">
        <h2 class="text-h5 mb-4 text-center font-weight-bold">
          Socios de Desarrollo y Tecnología
        </h2>

        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows="hover"
          height="260"
        >
          <v-carousel-item
            cover
          > <img class="mt-10" alt="TM logo" src="@/assets/usach-logo.png" height="150"></v-carousel-item>

          <v-carousel-item
            cover
          > <img class="mt-10" alt="TM logo" src="@/assets/logoMutual.png" height="100"></v-carousel-item>

              <v-carousel-item
            cover
          > <img class="mt-10" alt="TM logo" src="@/assets/google-logo.png" height="100"></v-carousel-item>
          
        </v-carousel>
      </v-card>
    </v-col>
      
      <v-col cols="12" md="12" lg="6">
          <v-card class="pa-6 fade-in3" elevation="3" rounded="xl">
        <h2 class="text-h5 mb-4 text-center font-weight-bold">
          Opiniones de Nuestros Clientes
        </h2>

        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows="hover"
          height="260"
        >
          <v-carousel-item
            v-for="(review, i) in reviews"
            :key="i"
          >
            <v-sheet
              class="d-flex flex-column justify-center align-center text-center pa-6"
              height="100%"
            >
              <div class="text-subtitle-1 font-italic mb-4">
                "{{ review.comment }}"
              </div>

              <div class="mb-2">
                <v-icon
                  v-for="n in 5"
                  :key="n"
                  :color="n <= review.stars ? 'amber-darken-2' : 'grey-lighten-1'"
                >
                  mdi-star
                </v-icon>
              </div>

              <div class="font-weight-medium">
                {{ review.name }}
              </div>

              <div class="text-caption text-grey">
                {{ review.company }}
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
    </v-row>

    <!--v-row justify="center" class="mt-6">
      <v-col cols="12" md="12" lg="11">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </v-col>
    </v-row-->
      

  </v-container>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  },

  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    console.log("Usuario en Home:", this.user)
  },
  data() {
    return {
      reviews: [
        {
          name: "Carlos Muñoz",
          company: "Constructora Andrés",
          stars: 5,
          comment:
            "Excelente servicio y rapidez en la entrega. Tech Materials siempre cumple con los plazos establecidos."
        },
        {
          name: "María González",
          company: "Ingeniería del Pacífico",
          stars: 4,
          comment:
            "Muy buena atención y soporte técnico. Destaco la calidad de los materiales suministrados."
        },
        {
          name: "Jorge Herrera",
          company: "Altatechnologyc Ltda.",
          stars: 5,
          comment:
            "Proveedor confiable y profesional. Hemos mejorado nuestros procesos gracias a sus soluciones."
        },
        {
          name: "Valentina Ríos",
          company: "Energía del Sur",
          stars: 4,
          comment:
            "Gran experiencia trabajando con el equipo. Siempre disponibles para resolver cualquier incidencia."
        },
        {
          name: "Patricio López",
          company: "Servicios Industriales Maule",
          stars: 5,
          comment:
            "Productos de excelente calidad y atención personalizada. Totalmente recomendados."
        },
        {
          name: "Daniela Soto",
          company: "Metropolitana Solutions",
          stars: 4,
          comment:
            "Muy satisfechos con el servicio. Proceso de compra claro y entrega eficiente."
        }
      ]
    };
  }
}



</script>
<style>
.v-carousel .v-sheet {
  background: #f5f7f6;
  border-radius: 16px;
}

.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

.fade-in2 {
  animation: fadeIn 2s ease forwards;
  opacity: 0;
}

.fade-in3 {
  animation: fadeIn 3s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
<template>
  <v-container>
   
    <v-row justify="center" class="mt-6">
      <v-col cols="12" md="12" lg="11">
        <br>
        <br>
        <br>
        <h3>La presente página web está desarrollada con el único propósito de ser un 
            recurso y apoyo en la docencia universitaria. La empresa "Tech Materials S.A" 
            es una empresa ficticia creada para la simulación del caso a estudiar.
        </h3>
        
      </v-col>
        <v-col cols="12" md="12" lg="11">
        <img class="ml-5" alt="TM logo" src="@/assets/fing-usach.png" height="200">
        
      </v-col>
      <v-col cols="12" md="12" lg="11">
        <h3>
            Para cualquier duda o consulta puede contactase con el Equipo de Armonización Curricular
            de la Facultad de Ingeniería de la Universidad de Santiago de Chile: 
            armonizacioncurricular.fing@usach.cl
        </h3>        
      </v-col>
      <br>
        <br>
        <br><br>
        <br>
        <br>
    </v-row>

      

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
  },
  
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
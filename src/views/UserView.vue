<template>
  <v-container>
    <br>

    <v-row justify="center" class="mt-6">
      <v-col cols="12" lg="10">

        <v-card
          class="mx-auto pa-8"
          rounded="xl"
          elevation="6"
        >

          <!-- 🔹 Título -->
          <h1 class="text-black">
            Bienvenido a la Intranet
          </h1>

          <v-divider
            class="my-4"
            thickness="2"
            style="border-color: #4FA28C;"
          ></v-divider>

          <!-- 🔹 Información del Usuario -->
          <v-row>

            <v-col cols="12" md="6">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <h3 class="font-weight-bold text-viridian">
                  Nombre de Usuario
                </h3>
                <p class="mt-2">
                  {{ user.nombre }} {{user.apellido}}
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <h3 class="font-weight-bold text-viridian">
                  Cargo
                </h3>
                <p class="mt-2">
                  Consultor
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <h3 class="font-weight-bold text-viridian">
                  Correo Corporativo
                </h3>
                <p class="mt-2">
                  {{ user.correo}}
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <h3 class="font-weight-bold text-viridian">
                  Gerencia
                </h3>
                <p class="mt-2">
                  Operaciones
                </p>
              </v-card>
            </v-col>

          </v-row>

          <!-- 🔹 Información Importante -->
          <h2 class="mt-8 text-black">
            Información Importante
          </h2>

          <v-divider
            class="my-4"
            thickness="2"
            style="border-color: #C2901C;"
          ></v-divider>

          <v-card
            class="pa-6"
            rounded="lg"
            elevation="2"
            style="background-color: #f8f9fa;"
          >
            <p>
              • Recuerda actualizar tu contraseña cada 90 días.<br>
              • La próxima reunión general será el lunes a las 09:00 hrs.<br>
              • Revisa la bandeja interna para nuevas comunicaciones.
            </p>
          </v-card>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IntranetView",

  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

.text-viridian {
  color: #4FA28C;
}

</style>

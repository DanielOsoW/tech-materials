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
            Recursos Humanos y Documentación Personal
          </h1>

          <v-divider
            class="my-4"
            thickness="2"
            style="border-color: #4FA28C;"
          ></v-divider>

          <!-- 🔹 Información del Usuario -->
          <v-row>

            <v-col cols="12" md="12">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <v-row>
                    <v-col cols="12" md="6">
                        <h3 class="font-weight-bold text-viridian">
                            Contrato
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            @click="inconstr()"
                            color="#4FA28C"
                            class="text-white"
                            >
                            </v-btn>
                    </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" md="12">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <v-row>
                    <v-col cols="12" md="6">
                        <h3 class="font-weight-bold text-viridian">
                            Liquidaciones de Sueldo
                        </h3>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select 
                          class= "pa-2 mr-4 ml-4"
                          color="orange-darken-2"
                          v-model="anho"
                          :items="sanhos"
                          label="Seleccionar mes"
                      ></v-select>
                      <v-select 
                          v-if="anho=='2025'"
                          class= "pa-2 mr-4 ml-4"
                          color="orange-darken-2"
                          v-model="mes"
                          :items="smeses"
                          label="Seleccionar mes"
                      ></v-select>
                      <v-select 
                          v-if="anho=='2026'"
                          class= "pa-2 mr-4 ml-4"
                          color="orange-darken-2"
                          v-model="mes"
                          :items="smeses2"
                          label="Seleccionar mes"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-btn
                            v-if="mes!=null"
                            icon="mdi-file-download"
                            @click="inconstr()"
                            color="#4FA28C"
                            class="text-white"
                            >
                      </v-btn>
                    </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" md="12">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <v-row>
                    <v-col cols="12" md="6">
                        <h3 class="font-weight-bold text-viridian">
                            Permisos
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h4 class="text-black">
                            2 de 3 Permisos Disponibles
                        </h4>
                    </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" md="12">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <v-row>
                    <v-col cols="12" md="6">
                        <h3 class="font-weight-bold text-viridian">
                            Evaluación de Desempeño
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h4 class="font-weight-bold text-black">
                            Evaluación en Proceso
                        </h4>
                    </v-col>
                </v-row>
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
              • Las reuniones generales son los lunes a las 09:00 hrs.<br>
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
  data() {
    return {
      mes: null,
      smeses: [
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
      ],
      smeses2: [
        'Enero','Febrero','Marzo'
      ],
      anho:null,
      sanhos: [
        "2025","2026"
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    inconstr() {
        this.$router.push('/inconstruction');
      },
  }
}
</script>

<style scoped>

.text-viridian {
  color: #4FA28C;
}

</style>

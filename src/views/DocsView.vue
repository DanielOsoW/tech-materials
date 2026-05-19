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
            Documentación Oficial
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
                          Información General Tech Materials S.A.
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            href="/documents/INFO General EMPRESA.docx.pdf" 
                            download="INFO-GENERAL-EMPRESA_TECH.pdf"
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
                        Flujo Operativo Ampliado
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            href="/documents/_Flujo operativo ampliado de TechMaterials S .docx.pdf" 
                            download="FLUJO-OPERATIVO-AMPLIADO_TECH.pdf"
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
                          Protocolos de Seguridad
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            href="/documents/PROTOCOLOS DE SEGURIDAD Technic-materials.docx.pdf" 
                            download="PROCOTOLOS-SEGURIDAD_TECH.pdf"
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
                          Certificación ISO 9001 - Gestión de la Calidad
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            href="/documents/certificación ISO - 9001 Gestión de la calidad .pdf" 
                            download="CERT-ISO9001_TECH.pdf"
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
                          Certificación ISO 45001 - Sistemas de gestión de la seguridad y la salud en el trabajo
                        </h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn
                            icon="mdi-file-download"
                            href="/documents/certificación ISO - 45001- Sistemas de gestión de la seguridad y la salud en el trabajo.pdf" 
                            download="CERT-ISO45001_TECH.pdf"
                            color="#4FA28C"
                            class="text-white"
                            >
                            </v-btn>
                    </v-col>
                </v-row> 
              </v-card>
            </v-col>

            <!--v-col cols="12" md="12">
              <v-card
                class="pa-6"
                rounded="lg"
                elevation="2"
              >
                <h3 class="font-weight-bold text-viridian">
                  Gerencia
                </h3>
                <p class="mt-2">
                  Informática
                </p>
              </v-card>
            </v-col-->

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
  data(){
  },
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

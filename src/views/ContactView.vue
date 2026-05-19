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
            style="background-color: #fa7000;"
            >
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--card-account-phone.png"  height="250">
            <img  class="ml-5" alt="checklist" src="@/assets/mdi--google-maps.png"  height="250">
        </v-col>
            <v-col
                cols="12"
                lg="8"
                class="pa-8 text-left"
                style="background-color: #ffffff;"
                >
          <h1 class="text-black">
            Contacto
          </h1>

          <h3 class="text-black mt-3 font-weight-regular">
                ¿Tienes alguna pregunta o deseas conocer más sobre nuestros productos y servicios? No dudes en ponerte en contacto con nosotros. Nuestro equipo está listo para ayudarte.
          </h3>
          <v-form v-model="valid">
            <v-container>
            <v-row>
                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    v-model="name"
                    :counter="30"
                    :rules="nameRules"
                    label="Nombre"
                    required
                    color="#000000"
                    bg-color="#FFFFFF"
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    v-model="email"
                    :counter="50"
                    :rules="emailRules"
                    label="Correo"
                    required
                    color="#000000"
                    bg-color="#FFFFFF"
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="12"
                height="20"
                >
                <v-text-field
                    v-model="message"
                    :rules="messageRules"
                    label="Mensaje"
                    required
                    :counter="200"
                    density="comfortable"
                    class="custom-height"
                    color="#000000"
                    bg-color="#FFFFFF"
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="12"
                height="20"
                >
                <v-btn
                    class="text-button mr-2"  
                    color="#fa7000">
                        Enviar
                </v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
            <h3 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Dirección:</span> Calle Ficticia 123, Ciudad Tecnológica, País.
            </h3>
            <h3 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Teléfono:</span> +123 456 789
            </h3>
            <h3 class="text-black mt-2 font-weight-regular">
                <span class="font-weight-bold">Email:</span> contacto@techmaterials.com
            </h3>
        </v-col>
        </v-row>
       </v-card>
        </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
 export default {
    data: () => ({
      valid: false,
      name:'',
      nameRules: [
        value => {
          if (value) return true

          return 'El nombre y apellido son requeridos.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'Ingrese su nombre y apellido.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'Debe ingresar su correo.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'El correo debe ser válido.'
        },
      ],
      message:'',
      messageRules: [
        value => {
          if (value) return true

          return 'Debe escribir un mensaje.'
        },
        value => {
          if (value?.length >= 10) return true

          return 'El mensaje debe tener mínimo 10 caracteres.'
        },
      ],
    }),
  }
</script>


<style>
.custom-height .v-field {
  min-height: 200px !important;
}
.custom-height input {
  font-size: 18px;
}

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
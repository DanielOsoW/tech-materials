<template>
  <v-container>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" lg="12">

        <v-card class="mx-auto pa-8" rounded="xl" elevation="6">

          <h1>Organigrama Tech Materials S.A</h1>

          <v-divider class="my-4"></v-divider>

          <v-row>
            <v-col cols="12">

              <!-- Imagen pequeña -->
              <v-img
                :src="imagen"
                max-width="1400"
                @click="dialog = true"
                style="cursor: zoom-in"
              />

              <!-- Modal -->
              <v-dialog v-model="dialog" max-width="110%">
                <v-card>
                  <v-img
                    :src="imagen"
                    contain
                  />
                </v-card>
              </v-dialog>

            </v-col>
          </v-row>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import imagen from '@/assets/Nuevo organigrama.png'

export default {
  name: "IntranetView",

  data() {
    return {
      dialog: false,
      imagen
    }
  }
}
</script>
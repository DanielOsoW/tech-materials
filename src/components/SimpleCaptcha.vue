<template>
  <div class="captcha-container">

    <div class="captcha-box">
      {{ captcha }}
    </div>

    <v-text-field
      v-model="userInput"
      label="Ingresa el código"
      variant="outlined"
      density="comfortable"
      class="mt-3"
    />

    <v-btn
      size="small"
      variant="text"
      class="mt-1"
      @click="generateCaptcha"
    >
      Cambiar código
    </v-btn>

    <p v-if="error" class="text-red mt-2">
      Código incorrecto
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      captcha: '',
      userInput: '',
      error: false
    }
  },

  mounted() {
    this.generateCaptcha()
  },

  methods: {
    generateCaptcha() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      let result = ''
      for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      this.captcha = result
      this.userInput = ''
      this.error = false
    },

    validateCaptcha() {

      const input = this.userInput.trim().toUpperCase()
      const code = this.captcha.toUpperCase()

      if (input === code) {
        this.error = false
        return true
      }

      this.error = true
      this.generateCaptcha()
      return false
    }
  }
}
</script>

<style scoped>
.captcha-box {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 6px;
  background: #f2f2f2;
  padding: 10px 20px;
  border-radius: 8px;
  user-select: none;
  text-align: center;
}
</style>
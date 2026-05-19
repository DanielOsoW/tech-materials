<template> 
<v-container>

    <form @submit.prevent="handleSubmit"> 
		<error v-if="error" :error="error"/> 
		<v-content> 
			<v-card width="500" class="mx-auto mt-15"> 
				<v-card-title> Acceda a su cuenta </v-card-title> 
				<v-card-text> 
					<v-text-field label="Correo" class="form-control" v-model="correo" prepend-icon="mdi-account-circle"/> 
					<v-text-field label="Contraseña" class="form-control" v-model="password"   
					:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"  
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  
					@click:append="showPassword = !showPassword"/> 
				</v-card-text> 
                <SimpleCaptcha ref="captchaRef" class="mt-4" />
                
 
				<v-divider></v-divider> 
				<v-card-actions> 
					<v-btn @click="handleSubmit" > Acceder </v-btn> 
				</v-card-actions> 
			</v-card> 
		</v-content> 
	</form>
    
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</v-container>
	
</template> 
 
<script> 
    import Error from './errorView.vue'
    import SimpleCaptcha from '@/components/SimpleCaptcha.vue'
    
    export default { 
 
        components: { 
            Error,
            SimpleCaptcha
        }, 
        data() { 
            return{
                snackbar:false, 
                correo: '', 
                password: '', 
                error: '', 
                showPassword:false,
                text: 'Usuario/contraseña erroneos' 
            } 
        }, 
        methods: {
            capitalize: function(text) {
                return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            },
            async handleSubmit() { 
                try { 
                    if (!this.$refs.captchaRef.validateCaptcha()) {
                        return
                    }
                    else{
                        var largo = this.correo.length;
                        console.log(largo);
                        const [userPart] = this.correo.split("@");
                        var [nombre1, apellido1] = userPart.split(".");

                        nombre1 = this.capitalize(nombre1);
                        apellido1 = this.capitalize(apellido1);
                        const fakeUser = {
                            correo: this.correo,
                            nombre: nombre1,
                            apellido: apellido1,
                            rol: "Admin"
                        }

                        this.$store.dispatch('user', fakeUser)

                        console.log("Usuario guardado:", this.$store.state.user)

                        this.$router.push('/')    
                    }
                    
                } catch(e) { 
                        this.snackbar = true; 
                } 
                
            } 
        } 
    } 
</script>
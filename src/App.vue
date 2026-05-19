<template>
  <v-app>
  <v-app-bar color="#336858" density="comfortable" height="90">
    <v-app-bar-nav-icon icon="mdi-menu" @click="drawer = true"/>
    <img class="ml-5" alt="TM logo" src="@/assets/tech-bar-logo2.png" height="180" @click="home()">
    <v-toolbar-title class="app-title"></v-toolbar-title>

  <v-spacer />
  <v-btn variant="tonal" class="text-button mr-2"  @click="weare()">Quienes Somos</v-btn>
  <v-btn variant="tonal" class="text-button mr-2"  @click="services()">Servicios</v-btn>
  <v-btn variant="tonal" class="text-button mr-2"  @click="products()">Productos</v-btn>
  <v-btn variant="tonal" class="text-button mr-2"  @click="innovation()">Innovación</v-btn>
  <v-btn variant="tonal" class="text-button mr-2"  @click="contact()">Contacto</v-btn>
  <v-btn variant="tonal" class="text-button mr-2" unable v-if="user!=null">Bienvenid@ {{user.nombre}}!</v-btn>
  
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        icon="mdi-dots-vertical"
        v-bind="props"
        v-if="user!=null"/>
    </template>

    <v-list>
      <v-list-item
        prepend-icon="mdi-account"
        title="Perfil"
      />

      <v-list-item
        prepend-icon="mdi-cog"
        title="Configuración"
      />

      <v-divider />

      <v-list-item
        prepend-icon="mdi-logout"
        title="Salir"
        @click="logout"
      />
    </v-list>
  </v-menu>
</v-app-bar>

    <br>

    

        <!--router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link-->
    
    <router-view/>
    
    <v-footer class="d-flex flex-column" color="#336858" rounded="">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Siguenos en nuestras redes y crezcamos juntos!</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>Tech Materials S.A</strong>
    </div>
  </v-footer>
  </v-app>
  <v-layout>
      <v-navigation-drawer
      v-model="drawer"
      temporary
      width="310"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-btn variant="tonal" class="text-button mr-2" color="#20433A" v-if="user==null" @click="login()">INTRANET</v-btn>
        
        <br><br>
        
        <v-divider></v-divider>
          <v-list-item @click="home()">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="loguser()" v-if="user!=null">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mi Datos</v-list-item-title>
          </v-list-item>
          <v-divider v-if="user!=null"></v-divider>
          <v-list-item @click="email()" v-if="user!=null">
            <v-list-item-icon>
              <v-icon>mdi-email-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Correo</v-list-item-title>
          </v-list-item>
          <v-divider v-if="user!=null"></v-divider>
          <v-list-item @click="docs()" v-if="user!=null">
            <v-list-item-icon>
              <v-icon>mdi-file-document</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Documentación</v-list-item-title>
          </v-list-item>
          <v-divider v-if="user!=null"></v-divider>
          <v-list-item @click="organigram()" v-if="user!=null">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Organigrama</v-list-item-title>
          </v-list-item>
          <v-divider v-if="user!=null"></v-divider>
          <v-list-item @click="humanresourses()" v-if="user!=null">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Recursos Humanos</v-list-item-title>
          </v-list-item>
          <v-divider v-if="user!=null"></v-divider>

          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br v-if="user==null"><br v-if="user==null">
          <br><br>
          
          <v-divider></v-divider>
          
          <v-list-item prepend-icon="mdi-help-circle-outline" title="Ayuda" value="ayuda" @click="disclaimer()"></v-list-item>
          <v-list-item color="red" v-if="user" prepend-icon="mdi-logout" title="Cerrar Sesión" value="logout" @click="logout()"></v-list-item>
         

          <!--v-list-item @click="enunciados()">
            <v-list-item-icon>
              <v-icon>mdi-file-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Enunciados</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user.rol==1" @click="revisarenunciados()">
            <v-list-item-icon>
              <v-icon>mdi-filter-check-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Revisar Enunciados</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user.rol<3 && user.nombres!='invitado'" @click="agregarenunciados()">
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Agregar Enunciados</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user.nombres!='invitado'" @click="progress()">
            <v-list-item-icon>
              <v-icon>mdi-widgets</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mi Progreso</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user.rol==1" @click="datos()">
            <v-list-item-icon>
              <v-icon>mdi-database-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Datos</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user.rol==1" @click="asignarroles()">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Asignar Roles</v-list-item-title>
          </v-list-item>

          <router-link to="area">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Área de Trabajo</v-list-item-title>
          </v-list-item>
          </router-link-->
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-layout>
    
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  methods: {

    //Función asíncrona para consultar los datos
        getData: async function(){
          try {
              this.cosas = this.$cookies.get("token");
              if(this.user==null && this.cosas!=null){

                  if(this.cosas.nombres == 'invitado'){
                    this.$store.dispatch('user',this.cosas);
                  }
                  
                  else{
                    var result2 = await this.$http.post('/user', { jwt: this.cosas.jwt});
                    let response2 = result2.data; 
                    this.$store.dispatch('user', response2);
                  }
                  
              } 
              var result = await this.$http.get('/usuarios/all');
              let response = result.data;
              this.items = response;
                
            }catch (error) {
                console.log('error', error);
            }
        },

    handleClick() { 
        this.$store.dispatch('user',null); 
        this.$router.push('/'); 
      },
    login() {
        this.$router.push('/login');
      },
    logout() {
      this.$store.dispatch('logout')
      // si usas persistencia
      localStorage.removeItem('user')
      this.$router.push('/')
    },
    services() {
        this.$router.push('/services');
      },
    home() {
        this.$router.push('/');
      },
    products() {
        this.$router.push('/products');
      },
    innovation() {
        this.$router.push('/innovation');
      },
    contact() {
        this.$router.push('/contact');
      },
    weare() {
        this.$router.push('/weare');
      },
    loguser() {
        this.$router.push('/loguser');
      },
    email() {
        this.$router.push('/email');
      },
    docs() {
        this.$router.push('/documents');
      },
    humanresourses() {
        this.$router.push('/hhrr');
      },
    organigram() {
        this.$router.push('/organization');
      },
    progress() {
        this.$router.push('/progress');
      },
    disclaimer() {
        this.$router.push('/disclaimer');
      },
    cerrar() {
        this.$store.dispatch('user',null);
        this.$cookies.remove("token");
        this.$router.push('/');
      },
  },
  
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    console.log("Usuario en Home:", this.user)
  },

  data: () => ({
    //
    cosas:null,
    drawer: false,
    group: null,
    icons: [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ],
    options: [
        {
        titulo:'Mis Datos',
        color:'primary',
        },
        {
        titulo:'Estadísticas',
        color:'secondary',
        },
        {
        titulo:'Cerrar sesión',
        color:'',
        },
      ],
  }),

   //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData();
    }
};
</script>

<style>
#app .app-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

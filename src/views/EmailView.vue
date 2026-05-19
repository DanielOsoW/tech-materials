<template>
  <v-container>
    <br>
    <br>
    <br>

    <!-- 🔹 Título -->
          <h1 class="text-black">
            Correo Institucional
          </h1>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" lg="22">

        <v-card
          class="mx-auto"
          rounded="xl"
          elevation="6"
        >

          <v-row no-gutters>

            <!-- 🔹 Bandeja -->
            <v-col
              cols="12"
              lg="5"
              class="pa-6"
              style="background-color: #4FA28C;"
            >

              <h1 class="text-white mb-4">
                Bandeja de Entrada
              </h1>

              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Buscar correo"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                bg-color="white"
              />

              <v-list lines="two">

                <v-list-item
                  v-for="mail in filteredMails"
                  :key="mail.id"
                  @click="selectMail(mail)"
                  :class="selectedMail?.id === mail.id ? 'selected-mail' : ''"
                >

                  <v-list-item-title >
                    {{ mail.subject }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="font-weight-bold">
                    {{ mail.sender }}
                  </v-list-item-subtitle>

                  <template #append>
                    <v-icon
                      size="20"
                      :color="mail.starred ? '#C2901C' : ''"
                      @click.stop="mail.starred = !mail.starred"
                    >
                      {{ mail.starred ? 'mdi-star' : 'mdi-star-outline' }}
                    </v-icon>
                  </template>

                </v-list-item>

              </v-list>

            </v-col>

            <!-- 🔹 Vista del correo -->
            <v-col
            cols="12"
            lg="7"
            class="pa-8"
            style="background-color: #FFFFFF;"
            >

            <div v-if="selectedMail && selectedMail.thread">

                <!-- 🔹 Asunto -->
                <h2 class="text-black font-weight-bold mb-6">
                {{ selectedMail.subject }}
                </h2>

                <!-- 🔹 Conversación tipo Gmail -->
                <div
                v-for="message in selectedMail.thread"
                :key="message.id"
                class="mb-4"
                >

                <v-card
                    rounded="lg"
                    elevation="2"
                    class="pa-4"
                    :style="{
                    borderLeft: '4px solid #4FA28C'
                    }"
                >

                    <!-- Header del mensaje -->
                    <div
                    class="d-flex"
                    @click="toggleMessage(message.id)"
                    style="cursor: pointer;"
                    >

                    <div>
                        <h5><strong>De: {{ message.sender }}</strong></h5>
                        <h5><strong>Para: {{ message.to }}</strong></h5>
                        <h5 v-if="message.cc!=''
                        "><strong>CC: {{ message.cc }}</strong></h5>
                        <h5><strong>Fecha: {{ message.date }}</strong></h5>
                        <span class="text-caption text-grey">
                        &lt;{{ message.email }}&gt;
                        </span>
                    </div>

                   

                    </div>

                    <!-- Contenido expandible -->
                    <v-expand-transition>
                    <div v-if="message.expanded" class="mt-4 text-left">
                        <p class="text-black email-body">
                            {{ message.body }}
                        </p>
                    </div>
                    </v-expand-transition>
                    <v-divider></v-divider>
                    <v-expand-transition>
                    <div v-if="message.expanded" class="mt-4">
                        <p class="email-signature">
                        {{ message.sign }}
                        </p>
                      <img v-if="message.corp=='tech-old'" class="ml-5" alt="TM logo" src="@/assets/tech-antiguo.jpeg" height="100">
                      <img v-if="message.corp=='tech'" class="ml-5" alt="TM logo" src="@/assets/tech-color.png" height="140">
                      <img v-if="message.corp=='mutual'" class="ml-5 mt-5" alt="TM logo" src="@/assets/logoMutual.png" height="50">
                     <a
                     v-if="message.document==1"
                      href="/documents/Informe-Diag.pdf"
                      download="INFORME DIAGNÓSTICO TECHNIC-MATERIALS.pdf"
                      class="pdf-link"
                    >
                      <v-icon class="mr-2" color="red">
                        mdi-file-pdf-box
                      </v-icon>

                      INFORME DIAGNÓSTICO TECHNIC-MATERIALS.pdf 120K
                    </a>
                    <a
                     v-if="message.document==3"
                      href="certificación ISO - 9001 Gestión de la calidad .pdf"
                      download="certificación ISO - 9001 Gestión de la calidad .pdf"
                      class="pdf-link"
                    >
                      <v-icon class="mr-2" color="red">
                        mdi-file-pdf-box
                      </v-icon>

                      certificación ISO - 9001 Gestión de la calidad .pdf 140K
                    </a>
                    <a
                     v-if="message.document==3"
                      href="certificación ISO - 45001- Sistemas de gestión de la seguridad y la salud en el trabajo.pdf"
                      download="certificación ISO - 45001- Sistemas de gestión de la seguridad y la salud en el trabajo.pdf"
                      class="pdf-link"
                    >
                      <v-icon class="mr-2" color="red">
                        mdi-file-pdf-box
                      </v-icon>

                      certificación ISO - 45001- Sistemas de gestión de la seguridad y la salud en el trabajo.pdf 118K
                    </a>
                    <a
                     v-if="message.document==2 || message.document==3"
                      href="/documents/Informe-Mutual.pdf"
                      download="INFORME DE ACCIDENTES LABORALES mutual de seguridad.pdf"
                      class="pdf-link"
                    >
                      <v-icon class="mr-2" color="red">
                        mdi-file-pdf-box
                      </v-icon>

                      INFORME DE ACCIDENTES LABORALES mutual de seguridad.pdf 138K
                    </a>
                    <a
                     v-if="message.document==2 || message.document==3"
                      href="/documents/Informe-Mutual.pdf"
                      download="INFORME DE ACCIDENTES LABORALES mutual de seguridad.pdf"
                      class="pdf-link"
                    >
                      <v-icon class="mr-2" color="red">
                        mdi-file-pdf-box
                      </v-icon>

                      INFORME DE ACCIDENTES LABORALES mutual de seguridad.pdf 138K
                    </a>
                    </div>
                    </v-expand-transition>

                </v-card>

                </div>

                <!-- 🔹 Responder -->
                <v-divider class="my-6"></v-divider>

                <v-textarea
                v-model="replyText"
                label="Responder"
                variant="outlined"
                rows="3"
                class="mb-4"
                />

                <v-btn
                color="#4FA28C"
                class="text-white"
                @click="sendReply"
                >
                Enviar
                </v-btn>

            </div>

            <div
                v-else
                class="d-flex flex-column align-center justify-center fill-height"
            >
                <v-icon size="80" color="grey">
                mdi-email-outline
                </v-icon>

                <h3 class="text-grey mt-4">
                Selecciona un correo
                </h3>
            </div>

            </v-col>

          </v-row>

        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {

  data() {
    return {
      search: '',
      selectedMail: null,
      mails: [
        {
          id: 5,
          sender: "José <j.zenteno@technic-materials.cl>",
          subject: "REUNIÓN DEL INFORME GENERAL DE LA SITUACIÓN DE LA EMPRESA",
          starred: true,
          thread: [
            {
                id: 501,
                sender: "José <j.zenteno@technic-materials.cl>",
                to: "José <jp.gutierrez.@technic-materials.cI>",
                cc: "Catalina Herrera. <c.herrera@technic-materials.cl>",
                email:" <j.zenteno@technic-materials.cl>",
                body: "Estimado José Patricio Gutiérrez,\n\n Junto con saludar, y esperando encontrarle bien, solicito una reunión con el equipo de gerencia para analizar los datos entregados por los departamentos de nuestra empresa y con esto generar el informe correspondiente.\n\n Saludos cordiales, ",
                sign: "José Pedro Zenteno X.\nGerencia de Operaciones\nGerente de Operaciones\nwww.technic-materials.cl\nj.zenteno@technic-materials.cl",
                corp:"tech",
                date: "30-04-2026",
                expanded: true,
                document: 0
            },
            {
                id: 502,
                sender: "Catalina <c.herrera@technic-materials.cl>",
                to: "José <jp.gutierrez.@technic-materials.cI>, José Pedro<j.zenteno@technic-materials.cl>",
                cc: "",
                email:"<c.herrera@technic-materials.cl>",
                body: "Estimado José Pedro,\n\n Junto con saludar, tenemos tiempo para la reunión el próximo martes, dejé agendada la reunión a las 14:00 horas.\n\n Saludos cordiales,",
                sign: "Catalina Herrera D.\nGerencia General\nAuditora\nwww.technic-materials.cl\nc.herrera@technic-materials.cl",
                corp:"tech",
                date: "05-05-2026",
                expanded: true,
                document: 0
            },
            {
                id: 503,
                sender: "José <j.zenteno@technic-materials.cl>",
                to: "Catalina Herrera. <c.herrera@technic-materials.cl>, José <jp.gutierrez.@technic-materials.cI>",
                cc: "",
                email:" <j.zenteno@technic-materials.cl>",
                body: "Estimada Catalina,\n\n Ok muchas gracias, nos vemos ese día.\n\n Saludos cordiales,",
                sign: "José Pedro Zenteno X.\nGerencia de Operaciones\nGerente de Operaciones\nwww.technic-materials.cl\nj.zenteno@technic-materials.cl",
                corp:"tech",
                date: "05-05-2026",
                expanded: true,
                document: 0
            },
            {
                id: 504,
                sender: "José <j.zenteno@technic-materials.cl>",
                to: "José <jp.gutierrez.@technic-materials.cI>",
                cc: "Catalina Herrera. <c.herrera@technic-materials.cl>",
                email:" <j.zenteno@technic-materials.cl>",
                body: "Asunto:\n\nActa de Reunión (poner fecha)\n\nEstimado José Patricio Gutiérrez,\n\nAdjunto el acta de reunión que sintetiza las principales problemáticas identificadas en Technic-Materials a partir de los reportes de cada área.\n\nSe detallan los desafíos en producción, mantenimiento, seguridad y gestión comercial, así como las medidas acordadas para su resolución.\nAsí mismo adjunto una propuesta de proyecto para abordar la problemática que está presente la empresa.\n\nSolicito su revisión y coordinación para implementar los próximos pasos a seguir.\n\nQuedo atento a la retroalimentación.\nAtentamente,",
                sign: "José Pedro Zenteno X.\nGerencia de Operaciones\nGerente de Operaciones\nwww.technic-materials.cl\nj.zenteno@technic-materials.cl",
                corp:"tech",
                date: "09-05-2026",
                expanded: true,
                document: 10
            },
            {
                id: 505,
                sender: "José <jp.gutierrez.@technic-materials.cI>",
                to: "José <j.zenteno@technic-materials.cl>",
                cc: "",
                email:"<jp.gutierrez.@technic-materials.cI>",
                body: "Estimado José Pedro,\n\nVoy a pedir un consultor externo para que te apoye en este proceso y puedas solucionar esto. Así que le tendrás que dar todos los accesos a nuestros documentos y nuestra página web.",
                sign: "José Patricio Gutierrez del Pino\nGerencia General\nCEO\nwww.technic-materials.cl\njp.gutierrez@technic-materials.cl",
                corp:"tech",
                date: "15-05-2026",
                expanded: true,
                document: 0
            },

          ]
        },
        {
          id: 4,
          sender: "José <j.zenteno@technic-materials.cl>",
          subject: "Solicitud de Informes por Departamento [Asunto]",
          starred: true,
          thread: [
            {
                id: 401,
                sender: "José <j.zenteno@technic-materials.cl>",
                to: "Mario <m.aguilar@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>, Jonathan <j.lund@technic-materials.cl>,  Gabriela <g.hernandez@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:" <j.zenteno@technic-materials.cl>",
                body: "Estimados(as),\n\nJunto con saludar y esperando que estén bien, a solicitud del Gerente, don José Patricio Gutiérrez de Pino, se les solicita enviar un informe de con las problemáticas que han identificado en sus área de trabajo para que esto nos permite analizar la información adecuadamente y enfrentar las dificultades que enfrenta nuestra empresa, en la cual hemos sido una familia que ha crecido y es nuestro deber aprovechar estas instancias para ser una empresa de nivel mundial.\nEspero que esta información esté lista en menos de 5 días máximo.\n\nQuedo atento a sus comentarios,",
                sign: "José Pedro Zenteno X.\nGerencia de Operaciones\nGerente de Operaciones\nwww.technic-materials.cl\nj.zenteno@technic-materials.cl",
                corp:"tech",
                date: "03-04-2026",
                expanded: true,
                document: 0
            },
            {
                id: 402,
                sender: "Mario <m.aguilar@technic-materials.cl>",
                to: "José <j.zenteno@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>, Jonathan <j.lund@technic-materials.cl>,  Gabriela <g.hernandez@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"  <m.aguilar@technic-materials.cl>",
                body: "Estimados miembros de la Gerencia y Equipos de las Unidades\n\nMe dirijo a ustedes para compartir un análisis detallado sobre los problemas que hemos identificado en el Departamento de Recursos Humanos.\n\nHemos recibido información acerca de la baja productividad, las preocupaciones sobre la seguridad de nuestros trabajadores y la alta rotación de operarios.\n\nQuedo a su disposición para cualquier consulta adicional o para coordinar las acciones necesarias.",
                sign: "Mario Aguilar J.\nDepartamento de Recursos Humanos\nGestor de operaciones y capital humano\nwww.technic-materials.cl\nm.aguilar@technic-materials.cl",
                corp:"tech",
                date: "05-04-2026",
                expanded: true,
                document: 4
            },
            {
                id: 403,
                sender: "Daniel <d.wilson@technic-materials.cl>",
                to: " José <j.zenteno@technic-materials.cl>, Mario <m.aguilar@technic-materials.cl>, Jonathan <j.lund@technic-materials.cl>,  Gabriela <g.hernandez@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"<d.wilson@technic-materials.cl>",
                body: "Estimado José,\n\nDesde el departamento de Mantenimiento de equipos y logística operativa, adjunto.\n\nQuedo atento,",
                sign: "Daniel Wilson A.\nDepartamento de Mantenimiento y Logística Operativa\nJefe de Mantenimiento de equipos\nwww.technic-materials.cl\nd.wilson@technic-materials.",
                corp:"tech",
                date: "08-04-2026",
                expanded: true,
                document: 5
            },
            {
                id: 404,
                sender: "Jonathan <j.lund@technic-materials.cl>",
                to: " José <j.zenteno@technic-materials.cl>, Mario <m.aguilar@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>,  Gabriela <g.hernandez@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"<j.lund@technic-materials.cl>",
                body: "Estimado José,\n\nDesde el departamento de Sistemas eléctricos y automatización, se lo mando por acá\nQuedo atento,",
                sign: "Jonathan Lund M.\nDepartamento de Sistemas Eléctricos y Automatización\nEncargado de Sistemas eléctricos y Automatización\nwww.technic-materials.cl\nj.lund@technic-materials.cl.",
                corp:"tech",
                date: "10-04-2026",
                expanded: true,
                document: 6
            },
            {
                id: 405,
                sender: "Agustina <a.rosselott@technic-materials.cl>",
                to: " José <j.zenteno@technic-materials.cl>, Mario <m.aguilar@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>,  Jonathan <j.lund@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>, Gabriela <g.hernandez@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"<a.rosselott@technic-materials.cl>",
                body: "Estimados miembros de la Gerencia General y Equipos de las Unidades,\n\nEn base a la solicitud me dirijo a ustedes con el propósito de presentar un análisis detallado de los efectos que los desafíos actuales en la producción desde el área Comercial y de Marketing.\nVemos claramente que realmente el problema se encuentra en la unidad de manufactura y de recursos humanos de la empresa.\n\nExigimos se hagan cargo las personas que tienen una real responsabilidad en el asunto.\n\nAtentamente",
                sign: "Agustina Rosselott H.\nDepartamento de Gestión Comercial, Marketing y Post Venta\nGerente Comercial\nwww.technic-materials.cl\na.rosselott@technic-materials.cl",
                corp:"tech",
                date: "12-04-2026",
                expanded: true,
                document: 7
            },
            {
                id: 406,
                sender: "Gabriela <g.hernandez@technic-materials.cl>",
                to: " José <j.zenteno@technic-materials.cl>, Mario <m.aguilar@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>,  Jonathan <j.lund@technic-materials.cl>, Natalia <n.osorio@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"<g.hernandez@technic-materials.cl>",
                body: "José,\n\nEsperando que te encuentres bien, me encuentro muy preocupada por la situación de la empresa,\nDesde el departamento de Procesos y manufactura, te lo adjunto.\nPD: podrían informar si la empresa está en riesgo de quiebra como se comenta en los pasillos.\n\nSiempre atenta para ti,",
                sign: "Gabriela Hernández B.\nDepartamento de Procesos y Manufactura\nJefe de procesos y Manufactura\nwww.technic-materials.cl\ng.hernandez@technic-materials.cl",
                corp:"tech",
                date: "15-04-2026",
                expanded: true,
                document: 8
            },
            {
                id: 407,
                sender: "Natalia <n.osorio@technic-materials.cl>",
                to: " José <j.zenteno@technic-materials.cl>, Mario <m.aguilar@technic-materials.cl>, Daniel <d.wilson@technic-materials.cl>,  Jonathan <j.lund@technic-materials.cl>, Gabriela <g.hernandez@technic-materials.cl>",
                cc: "José Patricio Gutiérrez del Pino <jp.gutierrez@technic-materials.cl>",
                email:"<n.osorio@technic-materials.cl>",
                body: "Estimado Don José,\n\nEsperando que te encuentres bien, desde el departamento de Prevención de riesgos y Seguridad, enviamos la información solicitada.\n\nPD: Gabriela esas cosas no se comentan en correos institucionales, más respeto por favor.\n\nAtentamente,",
                sign: "Natalia Osorio V.\nDepartamento de Prevención de Riesgo y Seguridad\nJefa de prevención de Riesgo y Seguridad\nwww.technic-materials.cl\nn.osorio@technic-materials.cl",
                corp:"tech",
                date: "16-04-2026",
                expanded: true,
                document: 9
            },

          ]
        },
        {
          id: 3,
          sender: "José Pedro Gutierrez <jp.gutierrez.@technic-materials.cI>",
          subject: "Urgente- Problemas Situación sector Operativo y Productivo",
          starred: true,
          thread: [
            {
                id: 301,
                sender: "José Patricio Gutierrez <jp.gutierrez.@technic-materials.cI>",
                to: "José Pedro <j.zenteno@technic-materials.cI >",
                cc: "",
                email:" <jp.gutierrez.@technic-materials.cI>",
                body: "Estimado José Pedro,\n\nEspero que este mensaje lo encuentre bien.\nMe veo en la obligación de expresar mi profunda preocupación por la situación que estamos enfrentando en la operación de la planta.\nLa baja productividad, los retrasos en entregas, los problemas en manufactura y mantenimiento, junto con los reclamos constantes de clientes, están generando un impacto inaceptable en nuestra estabilidad comercial y en la totalidad de la empresa.\n\nNo podemos permitir que esta situación continúe. Es imprescindible que tomemos medidas correctivas.\n\nNECESITO UN PLAN DE ACCIÓN CONCRETO EN UN PLAZO MÁXIMO DE 48 HORAS, que contemple soluciones efectivas para revertir los problemas que identificamos desde el directorio, y garantizar que la producción vuelva a niveles más óptimos en el menor tiempo posible. Además, la problemática de mantenimiento eléctrico y los incidentes laborales recientes parecen ser señales de errores cometidos de forma prolongada.\n\nESPERO UN INFORME DETALLADO SOBRE LAS CAUSAS Y LAS ACCIONES A IMPLEMENTAR A MÁS TARDAR MAÑANA POR PARTE DE TODAS LAS UNIDADES.\n\nPor otro lado, es muy importante que mantengamos los lineamientos y protocolos correspondientes a la empresa, los cuales nos permitieron certificarnos en ISO 9001 y 45001 (adjuntos) durante los años anteriores, y sumado a esto, adjunto el reporte de accidentes enviado desde la Mutual de Seguridad.\n\nQuedo a la espera de su pronta respuesta y de medidas concretas para normalizar esta situación sin más demoras.",
                sign: "José Patricio Gutierrez del Pino\nGerencia General\nCEO\nwww.technic-materials.cl\njp.gutierrez@technic-materials.cl",
                corp:"tech",
                date: "21-03-2026",
                expanded: true,
                document: 3
            },
            {
                id: 302,
                sender: "José Pedro <j.zenteno@technic-materials.cI >",
                to: "José Patricio Gutierrez < jp.gutierrez.@technic-materials.cI >",
                cc: "Catalina Herrera. <c.herrera@technic-materials.cl>",
                email:" <j.zenteno@technic-materials.cI >",
                body: "Estimado José Patricio Gutiérrez,\n\nJunto con saludar, y esperando encontrarle bien, acuso recibo de su mensaje y comprendo la urgencia de la situación planteada.\nProcederé a solicitar informes detallados a cada área relevante para analizar el origen del problema y estructurar soluciones viables.\nLe haré llegar un informe consolidado en el menor plazo posible.\n\nSaludos cordiales, ",
                sign: "José Pedro Zenteno X.\nGerencia de Operaciones\nGerente de Operaciones\nwww.technic-materials.cl\nj.zenteno@techmaterials.cl",
                corp:"tech",
                date: "26-03-2026",
                expanded: true,
                document: 0
            },

          ]
        },
        {
          id: 2,
          sender: "Alejandro Vargas < a.vargas@mutualdeseguridad.cl >",
          subject: "Informe de Accidentes y Recomendaciones de Seguridad-Technic-Materials",
          starred: true,
          thread: [
            {
                id: 201,
                sender: "Alejandro Vargas < a.vargas@mutualdeseguridad.cl >",
                email:"a.vargas@mutualdeseguridad.cl",
                to: "José Patricio <jp.gutierrez.@technic-materials.cl>",
                cc: "",
                body: "Junto con saludar, adjunto el informe de accidentes laborales correspondientes al último período en Technic-Materials.\n\nSe ha identificado un aumento en los incidentes, lo que podría estar relacionado con fatiga laboral, fallas en protocolos de seguridad y falta de capacitación continua.\nEs fundamental reforzar las medidas de prevención mediante la actualización de reglamentos internos, capacitaciones periódicas y el cumplimiento de los estándares y certificaciones actualizadas ISO 9001 y 45001.Recomendamos una revisión inmediata de los protocolos de seguridad para reducir riesgos operacionales ya existentes.\n\nQuedo atento a sus comentarios y coordinación para próximas acciones.\nAtentamente",
                sign: "Alejandro Vargas\nEncargado de Prevención y Gestión de Riesgos\nMutual de Seguridad",
                corp:"mutual",
                date: "11-10-2025",
                expanded: true,
                document: 2
            },
            {
                id: 202,
                sender: "Alejandro Vargas < a.vargas@mutualdeseguridad.cl >",
                email:"a.vargas@mutualdeseguridad.cl",
                to: "José Patricio <jp.gutierrez.@technic-materials.cl>",
                cc: "",
                body: "Estimado José Patricio,\n\nMe comunico con usted nuevamente para recordar el acuso de recibo del Informe de Accidentes Laborales del año anterior, ya que hasta la fecha no ha habido ninguna respuesta por parte de ustedes ni algún plan de acción para subsanar la preocupante situación de la empresa en cuanto a accidentes laborales.\n\nEsperamos su pronta respuesta para evitar multas asociadas al incumplimiento de la Ley 16744 que establece normas sobre accidentes del trabajo y enfermedades profesionales.\n\nAtentamente,",
                sign: "Alejandro Vargas\nEncargado de Prevención y Gestión de Riesgos\nMutual de Seguridad",
                corp:"mutual",
                date: "14-01-2026",
                expanded: true,
                document: 2
            },

          ]
        },
        {
          id: 1,
          sender: "Catalina Herrera. <c.herrera@technic-materials.cl>",
          subject: "Informe de Situación en Planta - Technic-Materials S.A.",
          starred: false,
          thread:[
            {
                id: 101,
                sender: "Catalina Herrera. <c.herrera@technic-materials.cl>",
                to: "José <jp.gutierrez@technic-materials.cI>",
                cc: "",
                email:"c.herrera@technic-materials.cl",
                body: "Estimado Sr. Gutiérrez,\n\nJunto con saludarlo, le remito el presente informe sobre la situación actual en la planta de Technic-Materials S.A., basado en indicadores clave de productividad, mantenimiento, cumplimiento de entregas y percepción de clientes.\nEste informe proporciona una base para la toma de decisiones estratégicas enfocadas en la estabilización de la operación de la planta en el período 2024-2025.\n\nQuedo atenta a sus comentarios y a coordinar las medidas necesarias para abordar estas problemáticas, espero su pronta respuesta.\nSaludos cordiales,",
                sign: "Catalina Herrera D.\nGerencia General\nAuditora\nwww.technic-materials.cl\nc.herrera@technic-materials.cl",
                corp:"tech-old",
                date: "20-08-2025",
                expanded: true,
                document: 1
            }
          ]
        },
        
        
        
        
      ]
    }
  },

  computed: {
    filteredMails() {
        return this.mails.filter(mail => {

            const firstSender = mail.thread?.[0]?.sender || ''

            return (
            firstSender.toLowerCase().includes(this.search.toLowerCase()) ||
            mail.subject.toLowerCase().includes(this.search.toLowerCase())
            )
        })
        }
  },

  methods: {
    selectMail(mail) {
      this.selectedMail = mail
    },
    toggleMessage(id) {
        const message = this.selectedMail.thread.find(m => m.id === id)
        if (message) {
            message.expanded = !message.expanded
        }
    }
  }

}
</script>

<style scoped>

.selected-mail {
  background-color: #e8f5f1;
  border-left: 4px solid #4FA28C;
}
.email-body {
  white-space: pre-line;
  line-height: 1.6;
  
}
.email-signature {
  white-space: pre-line;
  margin-top: 20px;
  font-weight: 500;
}
.pdf-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1976D2;
  transition: color 0.3s ease;
}

.pdf-link:hover {
  color: black;
}
</style>

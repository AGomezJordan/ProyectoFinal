<template>
    <div class="divtwitter twitter white--text text-center">

        <!-- TITULO -->
        <div class="nosotros mb-6">ÚLTIMOS TWEETS</div>

        <!-- TWEETS -->
        <div class="tweets mb-8">
                <div class="tweet pa-2 mb-5" v-for="tweet in tweets">
                    <!-- URL -->
                    <a
                            :href="'https://twitter.com/infoo_red/status/'+tweet.id"
                            target="_blank"
                            class="white--text"
                    >
                        <!-- TITULO -->
                        <div class="titulo">
                            <img width="40" class="mb-1 mr-6 logo" src="../assets/logo.png"> @infoo_red
                        </div>
                        <!-- TWEET -->
                        <div class="texto text-justify pa-2">
                            {{tweet.tweet}}
                        </div>
                        <!-- FECHA -->
                        <div class="fecha">
                            <span class="fechaDato">{{tweet.fecha}}</span>
                            <v-icon class="white--text icono">mdi-twitter</v-icon>
                        </div>
                    </a>
                </div>
        </div>

        <!-- FOOTER -->
        <div class="lastFooter">

            <!-- REDES SOCIALES -->
            <div class="redes">

                <!-- INSTAGRAM -->
                <v-tooltip bottom color="success">
                    <template v-slot:activator="{ on }">
                        <a v-on="on" href="https://www.instagram.com/alvaro_agj/" target="_blank">
                            <img width="50" src="../assets/instagram.png">
                        </a>
                    </template>
                    <span class="textTool">@alvaro_agj</span>
                </v-tooltip>
                <!-- TWITTER -->
                <v-tooltip bottom color="success">
                    <template v-slot:activator="{ on }">
                        <a v-on="on" href="https://twitter.com/infoo_red" target="_blank">
                            <img class="ml-12" width="50" src="../assets/twitter.png">
                        </a>
                    </template>
                    <span class="textTool">@infoo_red</span>
                </v-tooltip>
                <!-- FACEBOOK -->
                <v-tooltip bottom color="success">
                    <template v-slot:activator="{ on }">
                        <a v-on="on" href="https://www.facebook.com/gomezagj" target="_blank">
                            <img class="ml-12 face" width="50" src="../assets/facebook.png">
                        </a>
                    </template>
                    <span class="textTool">Alvaro Gomez</span>
                </v-tooltip>
            </div>

            <!-- ALVARO GOMEZ -- GITHUB -->
            <v-tooltip right allow-overflow>
                <template v-slot:activator="{ on }">
                    <a href="https://github.com/AGomezJordan" target="_blank">
                        <v-btn color="secondary" class="footer" height="50">
                            PROYECTO FINAL<br>ALVARO GOMEZ 2020
                        </v-btn>
                    </a>
                </template>
                <span class="textTool">Alvaro Gomez</span>
            </v-tooltip>
        </div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import axios from 'axios'
    export default {
        name: "twitter",
        data(){
          return{
              tweets: []
          }
        },
        methods:{
            async obtenerTweets(){
                console.log("entra")
                let host= 'http://localhost/'
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {func: 'tweets'}; //Datos de JWT
                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT
                //console.log(jwt)

                let formd = new FormData();
                formd.append("jwt", jwt)

                let response = await axios.post(host+'server/api.php', formd)
                let datos = response.data
                this.tweets = datos.data
            },
        },
        created() {
            this.obtenerTweets()
        }

    }
</script>

<style scoped>
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: rgba(41, 41, 41, 0);
    }

    ::-webkit-scrollbar-thumb{
        background: #024059;
        border-radius: 29px 29px 29px 29px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: #4ebfb4;
    }
    ::-webkit-scrollbar-track-piece{
        background-color: rgba(41, 41, 41, 0);
    }
    ::-webkit-scrollbar-corner{
        background-color: rgba(41, 41, 41, 0);
    }

    .divtwitter{
        width: 100%;
        padding: 6%;
        height: 100%;
        position: absolute;
    }
    .tweets{
        overflow: scroll;
        height: 55%;
    }
    .logo{
        vertical-align: middle;
    }
    .tweet{
        background-color: rgba(2, 51, 115, 0.70);
        border-radius: 10px 10px 10px 10px;
    }
    .tweet:hover{
        background-color: rgb(2, 51, 115);
    }
     .nosotros, .footer{
        background-color: rgba(2, 51, 115, 0.80);
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0px 0px 23px -1px rgba(0,0,0,0.75);
    }
    .nosotros{
        width: 100%;
        height: 40px;
        padding-top:5px;
        font-size: 20px;
        letter-spacing: 4px;
        background-color: rgba(2, 64, 89, 0.80);
    }
    .titulo{
        letter-spacing: 4px;
        font-size: 22px;
    }
    .texto{
        letter-spacing: 1px;
    }
    .icono{
        float: right;
    }
    .fecha{
        text-align: left;
    }
    .face{
        border-radius: 10px 10px 10px 10px;
        overflow: hidden;
    }
    .footer{
        font-size: 15px;
        letter-spacing: 4px;
        width: 100%;
        margin-top: 10px;
    }
    .lastFooter{
        position: relative;
        width: 310px;
    }
    .textTool{
        font-size: 18px;
        letter-spacing: 2px;
    }
    a{
        text-decoration: none;
    }
</style>
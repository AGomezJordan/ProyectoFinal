<template>
    <div class="divtwitter twitter white--text text-center">
            <div class="nosotros mb-6">ÚLTIMOS TWEETS</div>
            <div class="tweets mb-8">
                    <div class="tweet pa-2 mb-5" v-for="n in 5">
                        <a
                                href="https://twitter.com/infoo_red/status/1263594430683942915"
                                target="_blank"
                                class="white--text"
                        >
                            <div class="titulo">
                                <img width="40" class="mb-1 mr-6 logo" src="../assets/logo.png"> @infoo_red
                            </div>
                            <div class="texto text-justify pa-2">
                                Es posible que el estado de alarma no se prorrogue a causa de no haber llegado a un acuerdo
                                Es posible que el estado de alarma no se prorrogue a causa de no haber llegado a un acuerdo
                                Es posible que el estado de alarma no se prorrogue a causa de no haber llegado a un acuerdo
                            </div>
                            <div class="fecha">
                                <span class="fechaDato">20/03/2020 18:30</span>
                                <v-icon class="white--text icono">mdi-twitter</v-icon>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="lastFooter">
                <div class="redes">
                    <v-tooltip bottom color="success">
                        <template v-slot:activator="{ on }">
                            <a v-on="on" href="https://www.instagram.com/alvaro_agj/" target="_blank">
                                <img width="50" src="../assets/instagram.png">
                            </a>
                        </template>
                        <span class="textTool">@alvaro_agj</span>
                    </v-tooltip>
                    <v-tooltip bottom color="success">
                        <template v-slot:activator="{ on }">
                            <a v-on="on" href="https://twitter.com/infoo_red" target="_blank">
                                <img class="ml-12" width="50" src="../assets/twitter.png">
                            </a>
                        </template>
                        <span class="textTool">@infoo_red</span>
                    </v-tooltip>
                    <v-tooltip bottom color="success">
                        <template v-slot:activator="{ on }">
                            <a v-on="on" href="https://www.facebook.com/gomezagj" target="_blank">
                                <img class="ml-12 face" width="50" src="../assets/facebook.png">
                            </a>
                        </template>
                        <span class="textTool">Alvaro Gomez</span>
                    </v-tooltip>
                </div>
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
    export default {
        name: "twitter"
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
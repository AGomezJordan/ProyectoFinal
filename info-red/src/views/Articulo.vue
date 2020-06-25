<template>
    <div class="white--text c">
        <div
                class="menuLateral"
                :class="{'d-none':movil, 'd-sm-none': movil, 'd-md-block': movil}"
        >
            <twitter></twitter>
        </div>
        <div class="content align-content-center" :class="{'escritorio':!movil}">
            <div class="cajonTarjeta">
                <v-card
                    class="tarjeta pa-3"
                    dark
                >
                    <v-card-text align="center">
                        <div class="foto">
                            <img src="../assets/portada.jpg">
                        </div>
                    </v-card-text>
                    <v-card-title class="headline">{{this.$route.params.titular}}</v-card-title>
                    <v-card-subtitle class="title">Esto puede causar mucho revuelo a quien no lo quiera ver</v-card-subtitle>
                    <v-card-text class="text-justify informacion">
                        El director adjunto operativo de la Guardia Civil, Laurentino Ceña, ha presentado su
                        dimisión ante el Ministerio del Interior como gesto de apoyo a Diego Pérez de los Cobos.
                        Ceña tenía previsto jubilarse la semana que viene, pero ha adelantado su retiro tras
                        la polémica ocasionada por el cese del jefe de la Comandancia de Madrid.<br><br>

                        Caña era el segundo de la Benemérita por detrás de la directora general, María Gámez,
                        cuyo nombramiento es político. Ceña tenía que haberse jubilado el pasado mes de marzo,
                        pero acordó con el Ministerio del Interior que permanecería en su cargo hasta el 2 de
                        junio. Ahora, ha decidido marcharse como gesto de apoyo con Pérez de los Cobos, que fue
                        destituido ayer por el ministro del ramo, Fernando Grande-Marlaska.<br><br>

                        Pérez de los Cobos redactó un informe para el Juzgado de Instrucción número 51 de Madrid
                        sobre los presuntos contagios de coronavirus en los actos públicos del pasado 8 de marzo
                        como la manifestación feminista. El jefe de la Comandancia de Madrid no informó de sus
                        pesquisas al Ministerio, por lo que Grande-Marlaska le destituyó por “pérdida de confianza”.<br><br>

                        “El teniente general director adjunto operativo de la Guardia Civil acaba de presentar su
                        dimisión irrevocable al Ministerio. Lo hace por no estar de acuerdo con el cese del coronel
                        Pérez de los Cobos por lo injusto del mismo. Opta por la honra en vez de por los barcos.
                        Los guardias civiles aplaudimos el gesto que le honra. El cargo exige dignidad como la
                        demostrada”, han señalado fuentes de la Guardia Civil.
                    </v-card-text>
                    <v-card-text>
                        Autor: Pedro gonzalez<br>
                        Fecha: 26-02-2020 15:21
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Twitter from "../components/twitter";
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Articulo",
        data(){
            return{
                movil: false
            }
        },
        components: {
            Twitter,
            ...mapState(['back'])
        },
        created() {
            this.setBack(true)
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.movil = true;
            }
        },
        mounted(){
            this.setBack(true)
            window.scroll(0,0)
        },
        destroyed(){
            this.setBack(false)
        },
        methods:{
            ...mapMutations(['setBack'])
        }
    }
</script>

<style scoped>
    .c{
        display: flex;
        height: 100%;
    }
    .menuLateral{
        width: 350px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.50);
        box-shadow: 10px 0px 31px -2px rgba(0,0,0,0.75);
        position: fixed;
    }
    .content{
        padding: 2%;
        width: 100%;
    }
    .escritorio{
        margin-left: 350px;
    }
    .redimensionarFOTO{
        height: 70%;
    }
    .foto img{
        width: 100%;
        height: 100%;
    }
    .cajonTarjeta, .foto{
        overflow: hidden;
        border-radius: 18px 18px 18px 18px;
    }
    .tarjeta{
        background-color: rgba(2, 64, 89, 0.90);
    }
    .informacion{
        letter-spacing: 2px;
        line-height: 25px;
        font-size: 1.08em;
    }
</style>
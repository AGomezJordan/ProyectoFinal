<template>
    <div class="white--text c">
        <!-- ACCIONES -->
        <div class="acciones">
            <v-row class="text-center">
                <v-col cols="6" md="3">
                    <v-btn
                        color="info"
                        @click="$router.push({name: 'EditarArticulo', params:{id: '121asd1231asd'}})"
                    >
                        EDITAR
                    </v-btn>
                </v-col>
                <v-col cols="6" md="3">
                    <v-btn
                        color="success"
                        @click="publicar()"
                        v-if="user.tipo === 'administrador'"
                    >
                        PUBLICAR
                    </v-btn>
                </v-col>
                <v-col cols="6" md="3">
                    <v-btn
                        color="accent"
                        @click="despublicar()"
                        v-if="user.tipo === 'administrador'"
                    >
                        DESPUBLICAR
                    </v-btn>
                </v-col>
                <v-col cols="6" md="3">
                    <v-btn
                    color="error"
                    @click="dialog = true"
                    v-if="user.tipo === 'administrador'"
                    >
                        BORRAR
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        <!-- DIALOG -->
        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <div class="tarjeta">
                <v-card class="text-center" color="secondary" dark>
                    <v-card-text class="headline titulo pt-3 white--text">
                        ¿QUIERES ELIMINAR EL ARTICULO?
                    </v-card-text>

                    <v-card-text class="text-center">
                        <v-btn
                                color="success darken-1"
                                @click="eliminar()"
                        >
                            SI
                        </v-btn>
                        <v-btn
                                color="error darken-1"
                                @click="dialog = false"
                        >
                            NO
                        </v-btn>
                    </v-card-text>
                </v-card>
            </div>
        </v-dialog>

        <!-- ARTÍCULO -->
        <div class="content align-content-center">
                <v-row>
                    <v-col cols="0" md="1"></v-col>
                    <v-col cols="12" md="10">
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
                            <v-card-title class="headline">ESTE ES EL TITULAR</v-card-title>
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
                                <v-row>
                                    <v-col cols="6" md="3">
                                        Categoria: Política
                                    </v-col>
                                    <v-col cols="6" md="3">
                                        Autor: Pedro Juan Ramirez
                                    </v-col>
                                    <v-col cols="6" md="3">
                                        Estado: Publicado
                                    </v-col>
                                    <v-col cols="6" md="3">
                                        Fecha: 2020-06-15 15:31
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        </div>
                    </v-col>
                    <v-col cols="0" md="1"></v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import router from '@/router'
    export default {
        name: "Articulo",
        data(){
            return{
                dialog: false,
            }
        },
        computed: {
            ...mapState(['user'])
        },
        created() {
            this.setBack(true)
        },
        mounted(){
            this.setBack(true)
            window.scroll(0,0)
        },
        destroyed(){
            this.setBack(false)
        },
        methods:{
            ...mapMutations(['setBack']),
            eliminar(){
                alert("eliminado")
                this.dialog = false
                router.push({name: 'ConsultarArticulos'})
            },
            publicar(){
                alert("Publicado")
                router.push({name: 'ConsultarArticulos'})
            },
            despublicar(){
                alert("Despublicado")
                router.push({name: 'ConsultarArticulos'})
            },
        }
    }
</script>

<style scoped>
    .c{
        display: flex;
        height: 100%;
    }
    .content{
        padding: 2%;
        width: 100%;
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
    .acciones{
        position: fixed;
        z-index: 2;
        width: 100%;
    }
</style>
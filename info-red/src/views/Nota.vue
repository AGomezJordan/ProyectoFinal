<template>
    <div class="white--text c">
        <div class="content align-content-center" :class="{'escritorio':!movil}">
            <div class="cajonTarjeta">
                <v-card
                    class="tarjeta pa-3"
                    dark
                >
                    <v-card-title class="headline">TITULO</v-card-title>
                    <v-card-text class="text-justify informacion">
                        KAJsdklaj sdaklsd jaklsdj alksdj askldj aslkñdj asd asd
                         asd
                        as dasd
                        asd asdlña sjdlaksd ñask askd askd la
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Articulo",
        components: {
            ...mapState(['back'])
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
            ...mapMutations(['setBack'])
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
</style>
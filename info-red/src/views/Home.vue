<template class="tem">
    <div class="white--text c">
        <div
            class="menuLateral"
           :class="{'d-none':movil, 'd-sm-none': movil, 'd-md-block': movil}"
        >
            <twitter></twitter>
        </div>
        <div class="content align-content-center" :class="{'escritorio':!movil}">
            <v-row>
                <v-col
                    v-for="n in 50"
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <div class="articulo">
                        <v-card
                            class="tarjeta"
                            dark
                            :to="{
                                name: 'Articulo',
                                params:
                                    {titular: 'Maroto pone coto a la cuarentena para extranjeros: “Acabará a la vez que el estado de alarma”'}}"
                        >
                            <v-card-text>
                                <div class="foto">
                                    <img src="../assets/portada.jpg">
                                </div>
                            </v-card-text>
                            <v-card-text class="text-justify title white--text">
                                Maroto pone coto a la cuarentena para extranjeros: “Acabará a la vez que el estado de alarma”
                            </v-card-text>
                            <v-card-text>15-05-2020</v-card-text>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Twitter from "../components/twitter";

export default {
  name: 'Home',
    data(){
      return{
          movil: false
      }
    },
    components: {Twitter},
    methods: {
      ...mapActions(['tweet'])
  },
    created() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.movil = true;
        }
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
    .articulo{
        border-radius: 29px 29px 29px 29px;
        overflow: hidden;
    }
    .foto{
        overflow: hidden;
        border-radius: 15px 15px 15px 15px;
    }
    .foto img{
        width: 100%;
        height: 100%;
    }
    .tarjeta{
        background-color: rgba(2, 64, 89, 0.90);
    }
    .tarjeta:hover{
        background-color: rgb(2, 64, 89);
    }
</style>

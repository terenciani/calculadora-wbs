<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout wrap>
        <v-flex md12>
          <h1 class="text-xs-center">Cálculo da Área do Círculo</h1>
        </v-flex>
        <v-flex md6>
          <v-card 
            class="ma-5 pa-5 blue lighten-3"
          >
            <v-text-field
              v-model="raio"
              type="number"
              label="Informe o raio"
              class="ma-5"
            >
            </v-text-field>
            <v-select
              :items="unidades"
              item-value="valor"
              item-text="mostrar"
              v-model="unidade"
              label="Informe a unidade de medida do raio"
              class="ma-5"
            ></v-select>
          </v-card>

          <v-card 
            class="ma-5 pa-5 blue lighten-2"
            v-if="raio.length > 0 && raio >= 0"
            blue lighten-3
            >
            <h1 class="text-xs-center">Resposta</h1>
            <v-card-text class="mx-5">
              <h3>A = &pi; . r<sup>2</sup> </h3>
              <h3>A = 3,14 . {{raio}}<sup>2</sup> </h3>
              <h3>A = 3,14 . {{raio * raio}} </h3>
              <h3>A = {{3.14 * raio * raio}} {{unidade}}</h3>
            </v-card-text>
            
          </v-card>
        </v-flex>
        <v-flex md6 class="pa-5">
          <p>Para calcular a área do círculo devemos utilizar a seguinte fórmula:</p>
          <h1>A = &pi; . r<sup>2</sup> </h1>
          <p>Onde,</p>
          <p><strong>A:</strong> Área - (unidade de medida de acordo com o raio)</p>
          <p><strong>&pi;:</strong> constante Pi (3,14)</p>
          <p><strong>r:</strong> raio</p>
          <h3>ATENÇÃO:</h3>
          <p>Lembre-se que o <strong> raio </strong> (r) corresponde a distância entre o centro e a extremidade do círculo.</p>
          <div class="text-xs-center">
            <img src="../../static/img/area-circulo.png" alt="Área do Círculo" width="300px" class="ma-5">
          </div>
          <p>Já o <strong>diâmetro</strong> é um segmento de reta que passa pelo centro do círculo, dividindo-o em duas metades iguais. Dito isso, o diâmetro equivale duas vezes o raio (2r).</p>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      raio : '',
      unidade: "cm",
      unidades:[
        {
          mostrar: "Milímetros(mm)",
          valor: "mm"
        },
        {
          mostrar: "Centímetros(cm)",
          valor: "cm"
        }
      ]
    }
  }
}
</script>

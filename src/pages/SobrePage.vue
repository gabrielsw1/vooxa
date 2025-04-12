<template>
  <q-page>
    <MainNavbar />

    <div class="sobre-page">
      <div class="container">
        <h2 class="text-center q-mb-xl">Quem somos</h2>

        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <p class="text-h6 text-center q-mb-xl">
              A Vooxa é uma startup focada em levar inovação e eficiência para empresas por meio da automação de processos com RPA e soluções baseadas em Inteligência Artificial. Nosso propósito é eliminar tarefas repetitivas, reduzir custos operacionais e permitir que pessoas se concentrem no que realmente importa.
            </p>
          </div>
        </div>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
            <q-card class="destaque-card">
              <q-card-section>
                <div class="text-h3 text-center q-mb-md">🚀</div>
                <h3 class="text-h5 text-center q-mb-sm">Tecnologia de ponta</h3>
                <p class="text-center">
                  Utilizamos as mais avançadas tecnologias de automação e IA para entregar resultados excepcionais.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="destaque-card">
              <q-card-section>
                <div class="text-h3 text-center q-mb-md">⚙️</div>
                <h3 class="text-h5 text-center q-mb-sm">Soluções sob medida</h3>
                <p class="text-center">
                  Desenvolvemos soluções personalizadas que se adaptam perfeitamente às necessidades do seu negócio.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="destaque-card">
              <q-card-section>
                <div class="text-h3 text-center q-mb-md">🤝</div>
                <h3 class="text-h5 text-center q-mb-sm">Atendimento consultivo</h3>
                <p class="text-center">
                  Nossa equipe está sempre pronta para entender suas necessidades e propor as melhores soluções.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import MainNavbar from 'components/MainNavbar.vue'
</script>

<style scoped>
.sobre-page {
  padding: 100px 0;
  background-color: var(--color-light);
}

.destaque-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.destaque-card:hover {
  transform: translateY(-5px);
}

.destaque-card .q-card-section {
  padding: 30px;
}
</style>

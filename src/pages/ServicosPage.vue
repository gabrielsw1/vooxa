<template>
  <q-page>
    <MainNavbar />

    <div class="servicos-page bg-primary text-white">
      <div class="container">
        <h2 class="text-center q-mb-xl">O que fazemos</h2>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6 col-lg-3">
            <q-card class="servico-card">
              <q-card-section>
                <q-icon name="smart_toy" size="xl" class="q-mb-md" />
                <h3 class="text-h5 q-mb-sm">Automação Robótica (RPA)</h3>
                <p>
                  Desenvolvemos robôs que executam tarefas repetitivas com agilidade e precisão.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <q-card class="servico-card">
              <q-card-section>
                <q-icon name="psychology" size="xl" class="q-mb-md" />
                <h3 class="text-h5 q-mb-sm">Inteligência Artificial aplicada</h3>
                <p>
                  Usamos IA para classificar documentos, interpretar dados e apoiar decisões.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <q-card class="servico-card">
              <q-card-section>
                <q-icon name="engineering" size="xl" class="q-mb-md" />
                <h3 class="text-h5 q-mb-sm">Consultoria Técnica</h3>
                <p>
                  Avaliamos processos e criamos soluções tecnológicas alinhadas ao seu negócio.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <q-card class="servico-card">
              <q-card-section>
                <q-icon name="school" size="xl" class="q-mb-md" />
                <h3 class="text-h5 q-mb-sm">Treinamentos Corporativos</h3>
                <p>
                  Capacitamos equipes para adotarem automações de forma eficiente e segura.
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
.servicos-page {
  padding: 100px 0;
}

.servico-card {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.servico-card:hover {
  transform: translateY(-5px);
}

.servico-card .q-card-section {
  padding: 30px;
}

.servico-card .q-icon {
  color: var(--color-secondary);
}
</style>

<template>
  <q-page>
    <div class="portfolio-page">
      <div class="container">
        <h2 class="text-center q-mb-xl">Resultados que falam por si</h2>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="portfolio-card">
              <q-img
                src="https://picsum.photos/800/450?random=1"
                :ratio="16/9"
                class="rounded-borders"
              />
              <q-card-section>
                <h3 class="text-h5 q-mb-sm">Redução de 92% no tempo de cadastro de notas fiscais</h3>
                <p>
                  Automatizamos o processo de leitura e inserção de NFSe com integração a ERP.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card class="portfolio-card">
              <q-img
                src="https://picsum.photos/800/450?random=2"
                :ratio="16/9"
                class="rounded-borders"
              />
              <q-card-section>
                <h3 class="text-h5 q-mb-sm">Aprovação de reembolsos com IA</h3>
                <p>
                  Usamos IA para interpretar documentos e liberar reembolsos com validação automática.
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
// Removendo imports desnecessários
</script>

<style scoped>
.portfolio-page {
  padding: 100px 0;
  background-color: var(--color-light);
}

.portfolio-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
}

.portfolio-card .q-img {
  border-radius: 8px 8px 0 0;
}

.portfolio-card .q-card-section {
  padding: 20px;
}
</style>

<template>
  <q-page>
    <MainNavbar />

    <div class="contato-page bg-primary text-white">
      <div class="container">
        <h2 class="text-center q-mb-xl">Vamos conversar?</h2>

        <div class="row justify-center">
          <div class="col-12 col-md-8">
            <p class="text-center text-h6 q-mb-xl">
              Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
            </p>

            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                v-model="form.nome"
                label="Nome"
                :rules="[val => !!val || 'Campo obrigatório']"
                outlined
                dark
              />

              <q-input
                v-model="form.email"
                label="E-mail"
                type="email"
                :rules="[
                  val => !!val || 'Campo obrigatório',
                  val => /.+@.+\..+/.test(val) || 'E-mail inválido'
                ]"
                outlined
                dark
              />

              <q-input
                v-model="form.empresa"
                label="Empresa"
                :rules="[val => !!val || 'Campo obrigatório']"
                outlined
                dark
              />

              <q-input
                v-model="form.mensagem"
                label="Mensagem"
                type="textarea"
                :rules="[val => !!val || 'Campo obrigatório']"
                outlined
                dark
              />

              <div class="text-center">
                <q-btn
                  type="submit"
                  label="Enviar mensagem"
                  class="btn-primary"
                  size="lg"
                />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import MainNavbar from 'components/MainNavbar.vue'

const $q = useQuasar()

const form = ref({
  nome: '',
  email: '',
  empresa: '',
  mensagem: ''
})

const onSubmit = () => {
  $q.notify({
    color: 'positive',
    message: 'Mensagem enviada com sucesso!',
    icon: 'check'
  })
  form.value = {
    nome: '',
    email: '',
    empresa: '',
    mensagem: ''
  }
}
</script>

<style scoped>
.contato-page {
  padding: 100px 0;
}

.btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-dark);
}
</style>

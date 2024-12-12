<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-input
        filled
        v-model="username"
        label="Korisničko Ime"
        id="name"
        name="name"
        type="text"
      />

      <q-input
        filled
        v-model="password"
        label="Lozinka"
        id="password"
        name="password"
        type="password"
      />

      <q-btn label="Prijava" color="primary" class="full-width q-mt-md" @click="onSubmit" />

    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {

      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>

<style scoped>
.q-pa-md {
  max-width: 400px;
  margin: 0 auto;
}
</style>

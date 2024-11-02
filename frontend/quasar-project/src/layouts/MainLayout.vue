<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Naslovnica',
    caption: 'Naslovnica',
    icon: 'book',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis knjiga u knjiznici',
    icon: 'book',
    link: '#/popisKnjiga'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Pretrazivanje',
    icon: 'book',
    link: '#/TraziKnjigu'
  },
  {
    title: 'O nama',
    caption: 'O nama',
    icon: 'rss_feed',
    link: '#/ONama'
  },
  {
    title: 'Lokacija',
    caption: 'Lokacija',
    icon: 'record_voice_over',
    link: '#/Lokacija'
  },
  {
    title: 'Login',
    caption: 'Login',
    icon: 'code',
    link: '#/Login'
  },
  {
    title: 'Registracija',
    caption: 'Registracija',
    icon: 'code',
    link: '#/Registracija'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

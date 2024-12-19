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
          
          Knjiznica Admin
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
import { computed,ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'AdminLayout'
})
/*
let title = computed(() => {
  return "Knjiznica (admin)";
})

PANDORA'S BOX, CRASHES EVERYTHING WITHOUT computed,ref
*/
const linksList = [
  {
    title: 'Admin Naslovnica',
    caption: 'Admin Naslovnica',
    icon: 'book',
    link: '#/admin'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis knjiga u knjiznici',
    icon: 'book',
    link: '#/admin/popisKnjiga'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Pretrazivanje',
    icon: 'book',
    link: '#/admin/pretrazivanje'
  },
  {
    title: 'Popis Korisnika',
    caption: 'Popis korisnika',
    icon: 'rss_feed',
    link: '#/admin/popis_korisnika'
  },
  {
    title: 'Unos Knjiga',
    caption: 'Unos knjiga',
    icon: 'record_voice_over',
    link: '#/admin/unos_knjiga'
  },
  {
    title: 'Logout',
    caption: 'Logout',
    icon: 'code',
    link: '#/logout'
  }
  
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

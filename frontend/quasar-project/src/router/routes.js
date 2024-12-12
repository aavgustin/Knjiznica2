const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/popisKnjiga', component: () => import('src/pages/PopisKnjigaPageNew.vue')},
      { path: '/TraziKnjigu', component: () => import('pages/TraziKnjiguPage.vue')},
      { path: '/ONama', component: () => import('pages/ONamaPage.vue')},
      { path: '/Lokacija', component: () => import('pages/LokacijaPage.vue')},
      { path: '/Login', component: () => import('pages/LoginPage.vue')},
      { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue')},
      { path: '/Popisknjigabaze', component: () => import('pages/PopisKnjigaBazePage.vue')},
      { path: '/Rezervacije', component: () => import('pages/RezervacijePage.vue')}

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

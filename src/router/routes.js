const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue')
  },
  {
    path: '/sobre',
    component: () => import('pages/SobrePage.vue')
  },
  {
    path: '/servicos',
    component: () => import('pages/ServicosPage.vue')
  },
  {
    path: '/portfolio',
    component: () => import('pages/PortfolioPage.vue')
  },
  {
    path: '/contato',
    component: () => import('pages/ContatoPage.vue')
  },
  {
    path: '/privacidade',
    component: () => import('pages/PrivacidadePage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

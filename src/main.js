import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import VueDisqus from 'vue-disqus'
import './assets/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(VueDisqus)
  Vue.component('Layout', DefaultLayout)
}

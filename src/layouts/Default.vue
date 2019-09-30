<template>
  <div class="layout">
    <headroom>
    <Header/>
    </headroom>
    <transition name="fade" appear>
        <main>
    <slot id="page-content"/>
    </main>
      </transition>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <p>Copyright &copy; 2019 Manas Paul</p>
            <g-link to="/">Home</g-link> |
            <g-link to="/about">About</g-link> |
            <g-link to="/privacy-policy">Privacy Policy</g-link> | 
            <g-link to="/contact">Contact</g-link> 
    </div>
  </footer>
  </div>
</template>


<script>
import { headroom } from 'vue-headroom'
import Header from '../components/Header'
export default {
  components: {
    headroom,
    Header,
  }
}
</script>
<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
body{
  background-color: rgb(248, 248, 248)!important;
}
#sticky-footer {
  flex-shrink: none;
}

#page-content {
  flex: 1 0 auto;
}
</style>

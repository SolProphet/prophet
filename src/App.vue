<template>
  <div class="app-page">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
    
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    components: { Header, Footer },

  }
</script>

<style lang="scss">

  @media screen and (min-width: 801px) {
    .mb-show {
      display: none!important;
    }
  }
  

  @media screen and (max-width: 800px) {
    .mb-hide {
      display: none!important;
    }
  }
</style>

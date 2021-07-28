<template>
  <div class="home">
    <HeadInfo msg="Welcome to Your Vue.js App"/>
    <Header msg="Welcome to Your Vue.js App"/>
    <Slider p1="Nuestros" p2="Productos" p3="" />      
    <CardA msg="Welcome to Your Vue.js App"/>
    <SliderA msg="Welcome to Your Vue.js App"/>
    <CardB msg="Welcome to Your Vue.js App"/>
    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadInfo from '@/components/HeadInfo.vue'
import Header from '@/components/Header.vue'
import Slider from '@/components/Slider.vue'
import CardA from '@/components/CardA.vue'
import SliderA from '@/components/SliderA.vue'
import CardB from '@/components/CardB.vue'
import Footer from '@/components/Footer.vue'

export default { 
  name: 'Home',
  components: {
    HeadInfo,
    Header,
    Slider,
    CardA,
    SliderA,
    CardB,
    Footer,
  }
}
</script> 

<template>
<div>
  <headInfo></headInfo>
  <Header></Header>
  <Slider></Slider>
  <CardA></CardA>
  <SliderA></SliderA>
  <CardB></CardB>
  <Footer></Footer>

</div>
</template>

<script>
import HeadInfo from './components/HeadInfo.vue'//
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import CardA from './components/CardA.vue'
import SliderA from './components/SliderA.vue'
import CardB from './components/CardB.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
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

<style>

</style>

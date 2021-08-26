<template>
  <div class="main-container">
    <div class="main-container-slider">
      <img src="../../public/img/1.jpg" alt="" />
      <div class="main-container-slider_text">
        <p v-if="p1">{{p1}}</p>
        <p v-if="p2">{{p2}}</p>
        <p v-if="p3">{{p3}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    p1: String,
    p2: String,
    p3: String,
  },
  data: () => ({
    x: "sd",
  }),
  methods: {
    showP: () => {
       console.log("method excecuted!!!") 
    },
  },
  mounted() {
    this.x = "1";
  },
};
</script>
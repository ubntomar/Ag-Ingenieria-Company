<template>
  <div class="main-container">
    <div class="main-container-slider">
      <img src="../../public/img/1.jpg" alt="" />
      <div class="main-container-slider_text">
        <p>Internet</p>
        <p>&</p>
        <p>Services</p>
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
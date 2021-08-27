<template>
  <div>
    <div class="head">
      <div class="head_logo">
        <div>
          <router-link to="/"><img src="../../public/img/Logo3.png" alt="" /></router-link>  
        </div>
        <div>
          <p>> AG INGENIERIA</p>
        </div>
      </div>
      <div class="head_navbar">
        <ul>
          <li><router-link to="/products"> > Productos</router-link></li>
          <li><router-link to="/services"> > Servicios</router-link></li>
          <li><router-link to="/costumers"> > Clientes</router-link></li>
          <li><router-link to="/contact"> > Contactanos</router-link></li>
        </ul>
      </div>
      <div class="head_account">
        <img src="../../public/img/account.png" alt="" />
      </div>
      <div class="head_small-menu" onclick="tmp()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="body-small-menu" id="body-small-menu">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="/products">Productos</router-link></p>
      <p><router-link to="/services">Servicios</router-link></p>
      <p><router-link to="/costumers">Clientes</router-link></p>
      <p><router-link to="/contact">Contacto</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
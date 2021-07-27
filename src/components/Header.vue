<template>
  <div>
    <div class="head">
      <div class="head_logo">
        <img src="../../public/img/Logo3.png" alt="" />
        <div>
          <p>> AG INGENIERIA</p>
        </div>
      </div>
      <div class="head_navbar">
        <ul>
          <li><a href="#">> Productos</a></li>
          <li><a href="#">> Servicios</a></li>
          <li><a href="#">> Clientes</a></li>
          <li><a href="#">> Contactos</a></li>
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
      <p><a href="#">Home</a></p>
      <p><a href="#">Productos</a></p>
      <p><a href="#">Servicios</a></p>
      <p><a href="#">Clientes</a></p>
      <p><a href="#">Contacto</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<script setup>
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2>トップページ</h2>
    <ul>
      <li><router-link to="/usertable">〇〇一覧</router-link></li>
      <li><router-link to="/form">フォーム</router-link></li>
    </ul>

    <div class="cart">
      <h1>pinia入門(カート)</h1>
      <hr />
      <h2>商品一覧</h2>
      <ProductList />
      <hr />
      <ShoppingCart />
    </div>
  </div>
</template>

<style>
.cart {
  font-family: Avenir, Helvetica, Ariel, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

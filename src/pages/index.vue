<script setup>
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1>トップページ</h1>
    <p>テスト画面一覧</p>
    <ul>
      <li>
        <router-link to="/usertable">テスト一覧(JSONデータ取得)</router-link>
      </li>
      <li>
        <router-link to="/form"
          >フォーム(形、動作確認のみ、送信処理未作成)</router-link
        >
      </li>
      <li>
        <router-link to="/login"
          >サインアップ、サインイン(supabase+pinia)</router-link
        >
      </li>
      <li>
        <router-link to="/blog">テスト記事一覧(JSONデータ取得)</router-link>
      </li>
    </ul>

    <div class="cart">
      <h2>pinia入門(カート)</h2>
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

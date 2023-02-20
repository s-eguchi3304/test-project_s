<script setup>
import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">テストプロジェクト</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard" v-if="auth.isLoggedIn"
              >ダッシュボード</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup" v-if="!auth.isLoggedIn"
              >サインアップ</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin" v-if="!auth.isLoggedIn"
              >サインイン</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/usertable">一覧</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">フォーム</router-link>
          </li>
          <!--<li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="#">Action</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Another action</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Something else here</router-link
                >
              </li>
            </ul>
          </li>-->

          <!--<li class="nav-item">
            <router-link
              class="nav-link disabled"
              to="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</router-link
            >
          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

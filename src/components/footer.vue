<template>
  <footer class="footer py-3 mt-auto bg-primary">
    <div class="container">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 text-white"
            >ホーム</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/usertable" class="nav-link px-2 text-white"
            >一覧</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/form" class="nav-link px-2 text-white"
            >フォーム</router-link
          >
        </li>
      </ul>
      <p class="text-center text-white">&copy; 2023 テストプロジェクト</p>
    </div>
  </footer>
</template>

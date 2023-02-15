<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRouter();

const text = ref('送信が完了しました');
const topbtn = () => {
  router.replace('/');
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row border rounded">
          <div class="col-md">
            <h2 class="mt-3 mb-3">{{ text }}</h2>
            <button type="button" class="btn btn-primary mb-3" @click="topbtn">
              トップに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

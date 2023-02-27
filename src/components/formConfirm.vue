<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const title = ref('確認画面');

const submitForm = () => {
  console.log('submit', formData);
  router.push('/thanks');
};

const backbtn = () => {
  router.back();
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row border rounded">
          <div class="col-md">
            <h1 class="mt-3 mb-3">{{ title }}</h1>
            <form @submit.prevent="submitForm">
              <p></p>
              <div class="row justify-content-center text-center mb-3">
                <div class="col-md-4">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="backbtn"
                  >
                    戻る
                  </button>
                </div>
                <div class="col-md-4">
                  <button type="submit" class="btn btn-primary">送信</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: #8a0421;
  border-color: #dd0f3b;
  background-color: #ffd9d9;
}
</style>

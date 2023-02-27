<script setup>
import inputForm from '../components/InputForm.vue';
import formConfirm from '../components/formConfirm.vue';
</script>
<template>
  <div v-if="!isconfirm">
    <inputForm />
  </div>
  <div v-else="isconfirm">
    <formConfirm />
  </div>
</template>

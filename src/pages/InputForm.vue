<script setup>
import { ref } from 'vue';

const title = ref('テストフォーム');
const textInput = ref('');
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row border">
          <div class="col-md">
            <h2 class="mt-3 mb-3">{{ title }}</h2>
            <form>
              <div class="form-group mb-3">
                <label>フォームテキスト</label>
                <input
                  class="form-control"
                  type="text"
                  id="text"
                  :value="textInput"
                  @input="textInput = $event.target.value"
                />
              </div>

              <div class="form-group mb-3">
                <label>テキストエリア</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>

              <div class="form-group mb-3">
                <label>部署：</label>
                <select class="form-control">
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label>住所：</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
              <div class="form-group mb-3">
                <label>電話番号：</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="XXX-XXXX-XXXX"
                />
              </div>
            </form>
            <div class="row justify-content-center text-center mb-3">
              <div class="col-md-4">
                <button type="submit" class="btn btn-outline-primary btn-block">
                  送信
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

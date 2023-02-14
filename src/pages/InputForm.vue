<script setup>
import { ref, reactive } from 'vue';

const title = ref('テストフォーム');

const formDate = reactive({
  text: '',
  textArea: '',
  check: [],
  radio: '',
  select: '',
  selects: [],
  tel: '',
});

const submitForm = () => {
  console.log('submit', formDate);
};

/*const textInput = ref('');
const textAreaInput = ref('');
const checkValue = ref([]);
const radioValue = ref('');
const selectValue = ref('');
const selectValues = ref([]);
const telValue = ref('');*/
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row border">
          <div class="col-md">
            <h2 class="mt-3 mb-3">{{ title }}</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <label>フォームテキスト</label>
                <input
                  class="form-control"
                  type="text"
                  id="text"
                  v-model="formDate.text"
                />
              </div>

              <div class="form-group mb-3">
                <label>テキストエリア</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="formDate.textarea"
                  id="textarea"
                ></textarea>
              </div>

              <div class="mb-3">
                <p class="mb-0">チェックボックス</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox1"
                    v-model="formDate.check"
                    value="ラグビー"
                  />
                  ラグビー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox2"
                    v-model="formDate.check"
                    value="サッカー"
                  />
                  サッカー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox3"
                    v-model="formDate.check"
                    value="バスケットボール"
                  />
                  バスケットボール
                </div>
              </div>

              <div class="mb-3">
                <p class="mb-0">ラジオボタン</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn1"
                    v-model="formDate.radio"
                    value="ラグビー"
                  />
                  ラグビー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn2"
                    v-model="formDate.radio"
                    value="サッカー"
                  />
                  サッカー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn3"
                    v-model="formDate.radio"
                    value="バスケットボール"
                  />
                  バスケットボール
                </div>
              </div>

              <div class="form-group mb-3">
                <label>セレクトボックス</label>
                <select class="form-select" v-model="formDate.select">
                  <option disabled value="">選択</option>
                  <option>値1</option>
                  <option>値2</option>
                  <option>値3</option>
                </select>
              </div>

              <div class="form-group mb-3">
                <label>複数選択ボックス</label>
                <select
                  class="form-select"
                  v-model="formDate.selects"
                  multiple
                  size="3"
                >
                  <option>値1</option>
                  <option>値2</option>
                  <option>値3</option>
                  <option>値4</option>
                  <option>値5</option>
                </select>
              </div>

              <div class="form-group mb-3">
                <label>電話番号：</label>
                <input
                  type="tel"
                  size="15"
                  maxlength="15"
                  class="form-control"
                  placeholder="XXX-XXXX-XXXX"
                  v-model="formDate.tel"
                />
              </div>

              <div class="row justify-content-center text-center mb-3">
                <div class="col-md-4">
                  <button
                    type="submit"
                    class="btn btn-outline-primary btn-block"
                  >
                    送信
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

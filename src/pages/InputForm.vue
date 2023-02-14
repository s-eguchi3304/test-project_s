<script setup>
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
//import { required, email } from '@vuelidate/validators';
import { required, email } from '../utils/i18n-validators.js';

const title = ref('テスト　　　フォーム');

const formData = reactive({
  text: '',
  textArea: '',
  check: [],
  radio: '',
  select: '',
  selects: [],
  tel: '',
  email: '',
});

const rules = {
  text: { required },
  textArea: { required },
  check: { required },
  radio: { required },
  select: { required },
  selects: { required },
  tel: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  console.log('submit', formData);
  v$.value.$validate();
  console.log('$errors', v$.value.$errors);
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row border rounded">
          <div class="col-md">
            <h2 class="mt-3 mb-3">{{ title }}</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <label>フォームテキスト</label>
                <input
                  class="form-control"
                  type="text"
                  id="text"
                  v-model="formData.text"
                />
                <div v-for="error of v$.text.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>テキストエリア</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="formData.textArea"
                  id="textarea"
                ></textarea>
                <div v-for="error of v$.textArea.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="mb-3">
                <p class="mb-0">チェックボックス</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox1"
                    v-model="formData.check"
                    value="ラグビー"
                  />
                  ラグビー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox2"
                    v-model="formData.check"
                    value="サッカー"
                  />
                  サッカー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Checkbox3"
                    v-model="formData.check"
                    value="バスケットボール"
                  />
                  バスケットボール
                </div>
                <div v-for="error of v$.check.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="mb-3">
                <p class="mb-0">ラジオボタン</p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn1"
                    v-model="formData.radio"
                    value="ラグビー"
                  />
                  ラグビー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn2"
                    v-model="formData.radio"
                    value="サッカー"
                  />
                  サッカー
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="radiobtn3"
                    v-model="formData.radio"
                    value="バスケットボール"
                  />
                  バスケットボール
                </div>
                <div v-for="error of v$.radio.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>セレクトボックス</label>
                <select class="form-select" v-model="formData.select">
                  <option disabled value="">選択</option>
                  <option>値1</option>
                  <option>値2</option>
                  <option>値3</option>
                </select>
                <div v-for="error of v$.select.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>複数選択ボックス</label>
                <select
                  class="form-select"
                  v-model="formData.selects"
                  multiple
                  size="3"
                  id="multiSelect"
                >
                  <option>値1</option>
                  <option>値2</option>
                  <option>値3</option>
                  <option>値4</option>
                  <option>値5</option>
                </select>
                <div v-for="error of v$.selects.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>電話番号</label>
                <input
                  type="tel"
                  id="tel"
                  size="15"
                  maxlength="15"
                  class="form-control"
                  placeholder="XXX-XXXX-XXXX"
                  v-model="formData.tel"
                />
                <div v-for="error of v$.tel.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>e-mail</label>
                <input
                  type="email"
                  id="email"
                  size="30"
                  maxlength="50"
                  class="form-control"
                  placeholder="@example.com"
                  v-model="formData.email"
                />
                <div v-for="error of v$.email.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
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

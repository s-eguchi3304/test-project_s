<script setup>
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useRouter } from 'vue-router';
import { required, email } from '../utils/i18n-validators.js';
import { supabase } from '/supabase';

const router = useRouter();
const title = ref('テストフォーム');
const formData = reactive({
  text: '',
  textArea: '',
  check: [],
  radio: '',
  select: '',
  selects: [],
  tel: '',
  email: '',
  file: '',
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
  file: { required },
};

const handleFile = (event) => {
  const file = event.target.files[0];
  formData.file = file;
};

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  v$.value.$validate();
  if (v$.value.$invalid) {
    console.log('バリデーションエラー発生');
    console.log('$errors', v$.value.$errors);
  } else {
    /*console.log('バリデーションパス、リクエスト送信');*/
    console.log('submit', formData);

    const sendData = async () => {
      await supabase.from('inputtest').insert({
        text: formData.text,
        textArea: formData.textArea,
        check: formData.check,
        radio: formData.radio,
        select: formData.select,
        selects: formData.selects,
        tel: formData.tel,
        email: formData.email,
      });
    };
    sendData();
    router.push('/thanks');
  }
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
                  type="text"
                  id="text"
                  v-model="formData.text"
                  @blur="v$.text.$touch()"
                  :class="{ error: v$.text.$error, 'form-control': true }"
                />
                <div v-for="error of v$.text.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>テキストエリア</label>
                <textarea
                  rows="3"
                  v-model="formData.textArea"
                  id="textarea"
                  @blur="v$.textArea.$touch()"
                  :class="{ error: v$.textArea.$error, 'form-control': true }"
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
                <select
                  v-model="formData.select"
                  @blur="v$.select.$touch()"
                  :class="{ error: v$.select.$error, 'form-select': true }"
                >
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
                  @blur="v$.selects.$touch()"
                  :class="{ error: v$.selects.$error, 'form-select': true }"
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
                  placeholder="XXX-XXXX-XXXX"
                  v-model="formData.tel"
                  @blur="v$.tel.$touch()"
                  :class="{ error: v$.tel.$error, 'form-control': true }"
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
                  placeholder="@example.com"
                  v-model="formData.email"
                  @blur="v$.email.$touch()"
                  :class="{ error: v$.email.$error, 'form-control': true }"
                />
                <div v-for="error of v$.email.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="form-group mb-3">
                <label>ファイルアップロード</label>
                <input
                  type="file"
                  id="file"
                  v-on:change="handleFile"
                  :class="{ error: v$.file.$error, 'form-control': true }"
                />
                <div v-for="error of v$.file.$errors" :key="error.$uid">
                  <div class="text-danger fw-bold">{{ error.$message }}</div>
                </div>
              </div>

              <div class="row justify-content-center text-center mb-3">
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

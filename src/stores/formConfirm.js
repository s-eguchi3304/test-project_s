import { defineStore } from 'pinia';
export const useFormStore = defineStore('formData', {
  state: () => ({
    text: '',
    textArea: '',
    check: [],
    radio: '',
    select: '',
    selects: [],
    tel: '',
    email: '',
  }),
  /*getters: {
    formconfirm: (state) => formconfirm.formData,
  },*/
  /*actions: {
    formReset() {
      store;
    },
  },*/
});

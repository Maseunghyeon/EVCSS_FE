// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

//pinia는 vuex 처럼 따로 어딘가에 등록 할 필요가 없으며 mutatiaons이 없음
//actions에서 하거나 컴포넌트 내부에서 작업해도 간단
/***
 *
 *
 *
 [[이런식으로 사용 가능]]
 import { defineStore } from "pinia";

export const storeTodo = defineStore("todo", {
  state: () => ({}),
  getters: {},
  actions: {},
});
 *
 */
import { createPinia } from "pinia";
const pinia = createPinia();

export default pinia;

<!-- Options API와 Composition API에서 각각 computed로 원본 데이터를 가공한 파생 데이터들을
    v-for 디렉티브를 이용해서 화면에 렌더링해줌
-->
<template>
  <h2>Small Items</h2>
  <p v-for="item in small_items_c" :key="item.id">{{ item.text }}</p>
  <p v-for="item in small_items_o" :key="item.id">{{ item.text }}</p>
  <h2>Big Items</h2>
  <p v-for="item in big_items_c" :key="item.id">{{ item.text }}</p>
  <p v-for="item in big_items_o" :key="item.id">{{ item.text }}</p>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  //Options API
  data() {
    return {
      arr: [
        { id: 1, text: "1번 옵션 아이템" },
        { id: 2, text: "2번 옵션 아이템" },
        { id: 3, text: "3번 옵션 아이템" },
        { id: 4, text: "4번 옵션 아이템" },
        { id: 5, text: "5번 옵션 아이템" },
      ],
    };
  },
  // computed를 이용해서 원본 배열(arr)을 가공해서 파생 데이터를 만들어 준다.
  computed: {
    small_items_o() {
      return this.arr.filter((i) => i.id < 3);
    },
    big_items_o() {
      return this.arr.filter((i) => i.id >= 3);
    },
  },
  // Composition API
  setup() {
    // 그리고 reactive로 반응형 객체 배열을 세팅해주고
    const arr = reactive([
      { id: 1, text: "1번 아이템" },
      { id: 2, text: "2번 아이템" },
      { id: 3, text: "3번 아이템" },
      { id: 4, text: "4번 아이템" },
      { id: 5, text: "5번 아이템" },
    ]);

    // Composition API로 세팅해둔 객체 배열을 Options API와 같이 computed로 배열을 가공함
    const small_items_c = computed(() => {
      return arr.filter((i) => i.id < 3);
    });
    const big_items_c = computed(() => {
      return arr.filter((i) => i.id >= 3);
    });

    return {
      small_items_c,
      big_items_c,
    };
  },
};
</script>

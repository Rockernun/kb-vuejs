<!-- click 이벤트 캡쳐를 축약된 문법을 사용해서 사용자가 버튼 클릭 시 직접 counter 프록시 변수에 접근해서 값을 증가시키고 있음
    증가된 counter 값에 따라 v-if/v-else 디렉티브로 화면에 렌더링되는 값이 달라짐
-->
<template>
  <p>{{ counter }}</p>
  <p v-if="counter < 5">5보다 작습니다.</p>
  <p v-else>5와 같거나 큽니다.</p>
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
import { ref } from "vue";

export default {
  // Composition API
  setup() {
    let counter = ref(0);
    return {
      counter,
    };
  },
};
</script>

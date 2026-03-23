<!-- reactive로 반응형 객체를 만들고, v-for 디렉티브를 이용해서 items 객체 안의 요소들을 
    하나씩 뽑아서 화면에 렌더링하는거임 ㅇㅇ
-->
<template>
  <div style="width: 200px">
    <ol>
      <li v-for="item in items">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  // Composition API
  setup() {
    const items = reactive({ 1: "1번 객체", 2: "2번 객체", 3: "3번 객체" });
    return {
      items,
    };
  },
};
</script>

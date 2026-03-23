<!-- v-bind 디렉티브는 템플릿을 통해서 변수값을 변경시킬 수 없음 
    근데 v-model는 템플릿을 통해 변수값을 변경시킬 수 있음 ㅋ
-->
<template>
  <p>줄임말과 원래말을 입력하세요.</p>
  <input type="text" v-bind:value="abbr" />
  <input type="text" v-model="normal" />
  <hr />
  <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script>
import { ref } from "vue";

export default {
  // Composition API
  setup() {
    const abbr = ref("WWW");
    const normal = ref("World Wide Web");
    return {
      abbr,
      normal,
    };
  },
};
</script>

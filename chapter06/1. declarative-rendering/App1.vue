<template>
  <div id="date">
    {{ date }}
  </div>
  <div id="date2">
    {{ date2 }}
  </div>
</template>

<script>
export default {
  // Composition API: setup() 훅은 인스턴스가 만들어지기 전에 재료 손질
  // 관련 로직을 한 곳에 모으기 좋고, 재사용성이 좋음, 근데 ref, reactive, computed 같은 걸 추가로 알아야 함
  setup() {
    const date = Date().toString();
    return {
      date,
    };
  },

  // Option API: 이 방법은 Vue3에서는 보통 사용 안 함
  // data, methods처럼 기능별로 나눠서 작성하기 때문에 구조가 꽤 직관적임, 근데 컴포넌트가 복잡해지면 곤란함
  data() {
    return {
      date2: Date().toString(),
    };
  },
};
</script>

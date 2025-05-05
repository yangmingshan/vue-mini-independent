import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('Hello World Cup!');
  console.log('World Cup page loaded');

  return {
    greeting,
  };
});

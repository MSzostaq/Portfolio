<template>
  <button @click="handleClick" class="">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    onclick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.onclick();
    },
  },
};
</script>

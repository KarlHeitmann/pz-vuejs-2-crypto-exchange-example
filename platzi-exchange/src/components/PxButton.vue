<template>
  <button
    @click="buttonClick"
    class="
      bg-transparent
      hover:bg-green-500
      text-green-700
      font-semibold
      hover:text-white
      py-2
      px-2
      border border-green-500
      hover:border-transparent
      rounded
    "
  >
    <!-- @click es un alias para v-on:click -->
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <slot v-show="isLoading"></slot>
  </button>
</template>
<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit('custom-click')
    },
  },
}
</script>

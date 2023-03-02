<template>
  <button
    :disabled="props.disabled"
    class="mz-buttton"
    :class="[props.type ? `mz-buttton--${props.type}` : '']"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
type TButton = {
  disabled?: boolean
  loading?: boolean
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | ''
}

const props = withDefaults(defineProps<TButton>(), {
  disabled: false,
  loading: false,
  type: ''
})
</script>
<style scoped lang="scss"></style>

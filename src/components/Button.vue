<script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        validator(value) {
          return ['primary', 'secondary', 'success', 'error'].includes(value)
        },
        default() {
          return 'primary';
        }
      },
      variant: {
        type: String,
        validator(value) {
          return ['flat', 'outlined', 'text'].includes(value)
        },
        default() {
          return 'flat';
        }
      },
      size: {
        type: String,
        validator(value) {
          return ['small', 'large'].includes(value)
        }
      },
    },
  }
</script>

<template>
  <v-btn
    :color="color"
    :variant="variant"
    :size="size"
  >
  {{ label }}
  </v-btn>
</template>

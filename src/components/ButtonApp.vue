<template>
    <button @click="onClickEvent" type="button" class="button-51" role="button">{{ btnText }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonApp',
  props: {
    btnText: {
        required: true,
        type: String
    }
  },
  methods: {
    onClickEvent() {
      this.$emit('clicked-btn', "")
    }
  }
});

</script>

<style scoped>
/* CSS */
.button-51 {
  background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: #00132C;
  font-family: "Avenir Next LT W01 Bold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 23px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-51:hover,
.button-51:active {
  outline: 0;
}

.button-51:hover {
  background-color: transparent;
  cursor: pointer;
}

.button-51:before {
  background-color: #D5EDF6;
  content: "";
  height: calc(100% + 3px);
  position: absolute;
  right: -7px;
  top: -9px;
  transition: background-color 300ms ease-in;
  width: 100%;
  z-index: -1;
}

.button-51:hover:before {
  background-color: #6DCFF6;
}

@media (min-width: 768px) {
  .button-51 {
    padding: 16px 32px;
  }
}

</style>
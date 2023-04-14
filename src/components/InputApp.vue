<template>
    <input @change="onChangeInputChild" id="inputForm" :type="typeInput" :placeholder="textPlaceholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        textPlaceholder: {
            required: true,
            type: String
        },
        typeInput: {
            required: true,
            type: String
        }
    },
    methods: {
    onChangeInputChild(event: any) {
      this.$emit('changeInput', event.target.value)
    },
  },
   
})
</script>


<style scoped>
    #inputForm {
        padding: 1em;
        font-family: Poppins;
        width: 30%;
    }

</style>

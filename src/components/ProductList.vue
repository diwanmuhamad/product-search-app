<template>
    <div v-for="(product,index) in productList" v-bind:key="index">
        {{ product.title }}
    </div>
    
</template>

<script lang="ts">
import { Product } from '../types/interfaceData';
import { defineComponent, PropType} from 'vue'

export default defineComponent({
    props: {
        productList: {
            type: Object as PropType<Product[]>
        }
    },
 
    
})
</script>

<style scoped>

</style>

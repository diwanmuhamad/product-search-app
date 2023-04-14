<template>
  <div class="app">
    <div id="titleText">
      <h1>ZenPy Product</h1>
    </div>
    <div id="formInput">
      <InputApp @changeInput="getValueChildSearch" :typeInput="typeInputSearch" :textPlaceholder="textPlaceholderSearch"/>
      <ButtonApp @clicked-btn="searchProduct" :btnText="btnText" />
    </div>
    <div id="listContainer">
      <ProductList :productList="productData"></ProductList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButtonApp from './components/ButtonApp.vue'
import InputApp from './components/InputApp.vue'
import {Product} from './types/interfaceData';
import {getData} from './utils/fetch'; 
import ProductList from './components/ProductList.vue';

const urlProduct = "https://dummyjson.com/products"

export default defineComponent({
  name: 'App',
  components: {
    ButtonApp, InputApp, ProductList
  },
  setup() {
    const btnText = ref<string>("Search");
    const textPlaceholderSearch = ref<string>("Search")
    const typeInputSearch = ref<string>("text")
    const productDataPromise = getData<any>(urlProduct)
    let originalData = ref<Product[]>([])
    let productData = ref<Product[]>([])
    productDataPromise.then((data: any) => {
      console.log(data)
      originalData.value = data.products
      productData.value = data.products
    })

    return { btnText, textPlaceholderSearch, typeInputSearch, productData, originalData }
  },
  data() {
    return {
      search: "" 
    }
  },
  methods: {
    getValueChildSearch(value: string) {
      this.search = value
      if (value === "") {
        this.productData = [...this.originalData]
      }
    },
    searchProduct() {
      this.productData = this.originalData.filter((el: Product) => el.title.includes(this.search))
    }
  },
});
</script>

<style>
  .app {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  #titleText > h1 {
    font-size: 6rem;
    background: -webkit-linear-gradient(rgb(11, 153, 163), rgb(31, 28, 28));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    #titleText > h1 {
      font-size: 3rem;
    
    }
  }

  #formInput {
    display: flex;
    justify-content: center;
    gap: 2em;
  };

</style>
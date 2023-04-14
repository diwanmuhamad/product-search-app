<template>
    <a href="/">
        <button style="cursor: pointer; background-color: grey; border: none; border-radius: 12px;">back</button>
    </a>
    <main class="container">
 <!-- Left Column / Headphones Image -->
 <div class="left-column">
   <img data-image="red" class="active" :src="product?.thumbnail" alt="">
 </div>


 <!-- Right Column -->
 <div class="right-column">

   <!-- Product Description -->
   <div class="product-description">
     <span>{{ product?.category }}</span>
     <h1>{{ product?.title }}</h1>
     <p style="font-size: 20px">{{ product?.description }}</p>
     <p>Stock: {{ product?.stock }}</p>
     <p style="color: yellow">Rating: {{ product?.rating }}</p>
   </div>


   <!-- Product Pricing -->
   <div class="product-price">
     <span style="color:green">{{product?.price}} $</span>
     <a href="#" class="cart-btn">Add to cart</a>
   </div>
 </div>
</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import {Product} from '../types/interfaceData';
import {getData} from '../utils/fetch'; 

const urlProduct = "https://dummyjson.com/products"

export default defineComponent({
    setup() {
        const route = useRoute();
        const id = route.params.id
        const getDataProduct = getData<Product>(urlProduct + `/${id}`)
        let product = ref<Product>()

        getDataProduct.then((data: any) => {
            console.log(data)
            product.value = data
        })

        return {product}
    },
   
})
</script>

<style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px;
        display: flex;
        gap: 30px;
    }
 
    .left-column {
        width: 65%;
        position: relative;
        }

        .right-column {
        width: 35%;
        margin-top: 60px;
    }

    .left-column img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: 12px;
    height: 100%;
    }
    
    .left-column img.active {
    opacity: 1;
    }

.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}



.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
 
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}
</style>

<template>
    <div v-if="productList?.length !== 0">
        <div v-for="(product,index) in productList" v-bind:key="index" class="card">
            <div class="imgBox">
                <img :src="product.thumbnail" alt="ZenPy" class="mouse">
            </div>
    
            <div class="contentBox">
                <h3 class="title">{{ product.title }}</h3>
                <h2 class="price">{{ product.price }} €</h2>
                <!-- <a href="#" class="buy">Buy Now</a> -->
            </div>
        </div>
    </div>
    <div class="notFound" v-else>
        Not Found
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
    .card {
        cursor: pointer;
        position: relative;
        width: 320px;
        height: 480px;
        background: #191919;
        border-radius: 20px;
        overflow: hidden;
        margin-top: 50px;
        }

        .card::before {
        content: "";
        position: absolute;
        top: -50%;
        width: 100%;
        height: 100%;
        background: #048075;
        transform: skewY(345deg);
        transition: 0.5s;
        }

        .card:hover::before {
        top: -70%;
        transform: skewY(390deg);
        }

        .card::after {
        content: "ZENPY";
        position: absolute;
        bottom: 0;
        left: 0;
        font-weight: 600;
        font-size: 6em;
        color: rgba(0, 0, 0, 0.1);
        }

        .imgBox {
            width: 80%;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            z-index: 1;
        }
        .card {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        z-index: 1;
        }
 
        .card .contentBox {
        position: relative;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        }

        .card .contentBox h3 {
        font-size: 24px;
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        }

        .card .contentBox .price {
        font-size: 20px;
        color: white;
        font-weight: 700;
        letter-spacing: 1px;
        }

        .card .contentBox .buy {
        position: relative;
        top: 100px;
        opacity: 0;
        padding: 10px 30px;
        margin-top: 15px;
        color: #000000;
        text-decoration: none;
        background: #048075;
        border-radius: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: 0.5s;
        font-family: Poppins;
        font-weight: bold;
        }

        .card:hover .contentBox .buy {
        top: 0;
        opacity: 1;
        }

        .title {
            font-size: 10em;
        }
        .mouse {
        height: min(80%, 300px);
        width: auto;
        border-radius: 12px;
        }

        .notFound {
            margin-top: 30px;
            font-family: Poppins;
            font-size: 24px;
        }

        @media only screen and (max-width: 800px) {
            .imgBox {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 20px;
                z-index: 1;
            }
            .mouse {
                width: max(70%, 300px);
            }
            .card {
       
                display: flex;
                flex-direction: column;
              
                }
        }
</style>

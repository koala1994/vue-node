<template>
    <div>
        <tab class="tab" :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="select === index" v-for="(item, index) in list" @click="select = item" :key="index">
                {{item.name}}
            </tab-item>
        </tab>
        <swiper class="swiper" auto v-model="index" height="180px" :show-dots="false">
            <swiper-item v-for="(item, index) in list" :key="index">
            <div class="tab-swiper vux-center">
                <router-link :to="item.path">
                    <img :src="item.src">
                </router-link>  
            </div>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import {Tab, TabItem,Swiper,SwiperItem} from 'vux';
    export default{
            components:{
                Tab,
                TabItem,
                Swiper,
                SwiperItem
            },
            props:['list','select'],
            data(){
                return{
                    index:0,
                }
            }
        } 
</script>
<style scoped>
    .tab a{
        color:#666
    }
    .swiper{
        font-size:.14rem
    }
    .swiper img{
        width:100%;
        height:1.8rem;
    }
</style>

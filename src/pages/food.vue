<template>
        <list :list="list" :select="select"></list>
</template>
<script>
import List from '../components/nav';
    export default{
            components:{
                List
            },
            data(){
                return{
                    select:1,
                    list:[
                        {
                            name:'精选',
                            path:'a',
							src:'../static/img/l1.jpg'
                        },
                        {
                            name:'美食',
                            path:'/food',
							src:'../static/img/l2.jpg'
                        },
                        {
                            name:'电影',
                            path:'a',
							src:'../static/img/l1.jpg'
                        },
                        {
                            name:'酒店',
                            path:'a',
							src:'../static/img/l2.jpg'
                        },
                        {
                            name:'外卖',
                            path:'a',
							src:'../static/img/l1.jpg'
                        },
                    ]
                }
            }
        } 
</script>
<style scoped>
    
</style>

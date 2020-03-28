<template>
    <div class="clearfix" :class="{linkable}" @click="onclick">
        <div class="image"><img :src="book.image"></div>
        <div class="details">
            <ul>
                <li v-if="index">{{index}}</li>
                <li>{{book.title}} ({{book.price}}円)</li>
                <li>{{book.author}}著</li>
                <li>{{book.publisher}}</li>
                <li>{{book.published}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {UPDATE_CURRENT} from '@/mutation-types'
    
    export default {
        name:'book-info',
        props:{
            index:{type:Number},
            linkable:{type:Boolean,default:false},
            book:{type:Object}
        },
        methods:{
            ...mapActions([UPDATE_CURRENT]),
            onclick(){
                if(this.linkable){
                    this[UPDATE_CURRENT](this.book)
                    this.$rooter.push('/form')
                }
            }
        }
    }
        
</script>

<style scoped>
    .linkable:hover{
        cursor: pointer;
        background-color: #ff9;
    }
</style>
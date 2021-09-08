<template>
    <div>
        <h2>blog</h2>
        <ul>
            <Blog v-for="(blog) in blogs" :key="blog.id" :blog="blog"/>
        </ul>
    </div>
</template>
<script>
import Blog from './Blog'
export default {
    data(){
        return{
            blogs:[{id:1,title:'blog1'},{id:3,title:'blog2'},{id:6,title:'blog3'}]
        }
    },
    components:{
        //注册局部组件只能当前组件使用
        Blog
    }
}
</script>
<style scoped>
    h2{
        color :red;
    }
</style>
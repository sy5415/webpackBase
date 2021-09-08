<template>
    <div>
        <h2>{{title}}</h2>
        <Blogs/>
    </div>
</template>
<script>
import Blogs from './components/Blogs'
export default {
    data:function(){
        return{
            title:'App组件'
        }
    },
    components:{
        Blogs
    }
}
</script>
<style lang="stylus">

</style>
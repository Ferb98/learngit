<template>
    <div id="anniu">
       <button @click="change3">点击改变我的爱好</button>
       <button @click="change4">点击恢复我的爱好</button>
    </div>
</template>
<style scoped>
</style>
<script>
export default {
    methods:{
       change3(){
            this.$emit('child-event','我的爱好改变了')
        },
        change4(){
            this.$emit('child-event','我的爱好')
        }
    }
}
</script>

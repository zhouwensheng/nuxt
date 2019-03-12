<template>
    <div class="VideoList">
        <div v-for='(view,index) in url' :key='index' class="VideoList-list fl">
            <video class="video" :ref='view.name' :src="view.url" controls @play='getplay(index)'></video>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                url:[]
            }
        },
        methods:{
            getplay(ind){
                var video =document.getElementsByClassName('video');
                var len = video.length,i=0;
                for(;i<len;i++){
                    if(i!=ind){
                        video[i].pause();
                    } 
                }
            }
        },
        created(){
            axios.post(`${AppUtil.http}view/videoList`).then((data) => {
                let parameter = data.data.data || [];
                this.url = parameter.map((val)=>{
                    return {url:`${AppUtil.http}view/`+val.name,name:val.name};
                })
            })
        }
    }
</script>
<style scoped>
    .VideoList{
        width: 100%;
        height: 100%;
    } 
    .VideoList .VideoList-list{
        width: calc(100% / 3);
        min-width: 333px;
        box-sizing: border-box;
        padding: 10px;
        
    }
    .VideoList .VideoList-list video{
        width: 100%;
    }
</style>



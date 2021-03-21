<template>
 <div>
     <div class="content" >
       <img src="https://sm.ign.com/ign_fr/news/b/baby-yoda-/baby-yoda-is-being-added-to-minecraft_bjqc.jpg">
       <div class="contentArticle">
         <router-link to="/blogindex"><h2>tg</h2></router-link>
         <p>
          ok connard
         </p>
       </div>
 </div>

</div>
</template>
<style scoped>
.content{
  display: flex;
  flex-direction: row;
  margin: 10%;
  border: solid 2px aqua;
  align-items: center;
  text-align: center;
}
img{
  width: 25%;
  margin: 3%;
}
p{
  width: 50%;
  margin: 3%;
  text-align: center;
}
button{
  margin: 3%;
}

.contentArticle{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;

}
</style>
<script>
export default {
  //data(){
    //return{
      //articleTitle:this.$route.params.title,
    //}
  //},
  //methods:{
//destination(){
  //return store.articles.find({
    //destination => destination.title === this.articleTitle
  //})
}
</script>
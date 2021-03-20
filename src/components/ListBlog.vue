<template>
  <div>
<div class="content" v-for="(articles, index) in this.$store.getters.Article" :key="(articles, index)" id="edit">
  <img src="https://sm.ign.com/ign_fr/news/b/baby-yoda-/baby-yoda-is-being-added-to-minecraft_bjqc.jpg">
  <div class="contentArticle">
    <h2>{{articles[0]}}</h2>
    <p>
      {{articles[3]}}
    </p>
  </div>
  <button-edit ></button-edit>
<EditPage></EditPage>
  <button class="delete is-large" v-on:click="removeArticle(index)"></button>
</div>
  </div>
</template>
<style>
.content{
  display: flex;
  flex-direction: row;
  margin: 10%;
  border: solid 2px aqua;
  align-items: center;
}
img{
  width: 25%;
  margin: 3%;
}
p{
  width: 50%;
  margin: 3%;
}
button{
  margin: 3%;
}

.contentArticle{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
  import ButtonEdit from "@/components/btn/buttonEdit";
  import EditPage from "@/components/EditPage";
  export default {
    name: 'list-blog',

    components: {ButtonEdit, EditPage},

    methods: {
      removeArticle(index) {
            this.$store.getters.Article.splice(index, 1)
        },

      }
  }

  
</script>

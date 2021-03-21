<template>
  <div>
<div class="content" v-for="(articles, index) in this.$store.getters.Article" :key="(articles, index)">
  <img src="https://sm.ign.com/ign_fr/news/b/baby-yoda-/baby-yoda-is-being-added-to-minecraft_bjqc.jpg">
  <div class="contentArticle">
    <h2>{{articles[0]}}</h2>
    <p>
      {{articles[3]}}
    </p>
  </div>
  <button-edit></button-edit>
  <button class="delete is-large" v-on:click="removeArticle(index)"></button>
</div>

<!-- <div class="content" v-for="(users, index) in this.$store.getters.User" :key="(users, index)">
  <div class="contentArticle">
    <h2>{{users[0]}}</h2>
    <p>
      {{users[1]}}
    </p>
  </div>
  <button-edit></button-edit>
  <button class="delete is-large" v-on:click="removeArticle(index)"></button>
</div> -->
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
  export default {
    name: 'list-blog',
    components: {ButtonEdit},
    methods: {
      removeArticle(index) {
            this.$store.getters.Article.splice(index, 1)
        },
    }
  }
  
</script>

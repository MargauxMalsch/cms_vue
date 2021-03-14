<template>
  <div>
    <h1><strong>Créer une nouvelle page de Blog</strong></h1>
    <div class="content">
      <div class="form">
        <div class="info">
          <label>Titre de la page</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="title">
        </div>

        <div class="info">
          <label>Meta title</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaTitle">
        </div>

        <div class="info">
          <label>Meta description</label>
          <input class="input is-link" type="text" placeholder="Link input" v-model="metaDesc">
        </div>

        <div class="info">
          <label for="content">Corps du post</label>
          <textarea name="content" id="" cols="50" rows="10" v-model="content"></textarea>
        </div>

        <input type="submit" name="" id="" v-on:click='newArticle()'>
      </div>
    
      <div class="img">
        <div class="upload">
        <img src="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=61eaea85f1aa3d065400179c78163f15">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                 <i class="fas fa-upload"></i>
              </span>
            <span class="file-label">
                  Choose a file…
            </span>
            </span>
          </label>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
        data() {
            return {
                title: '',
                metaTitle: '',
                metaDesc: '',
                content: '',
            }
        },
        methods: {
            newArticle() {
                this.$store.dispatch('addArticle', [this.title, this.metaTitle, this.metaDesc, this.content])
            },
        }
    }
</script>
<style scoped>
.content{
  display: flex;
justify-content: space-between;

}
.form{
  width: 50%;
}
.info{
  display: flex;

justify-content: center;
  margin: 5% 2% 3% 5%;
  align-items: center;
  width: 60%;

}
.img{
  width: 50%;

}

label{
  margin: 0 5%;
}
input{
  width: 60%;
  align-items: center;
  justify-content: center;
}
h1{
  margin-bottom: 5%;
  font-size: 2em;

}
img{
  border-radius: 80%;
  width: 20%;
  margin-bottom: 2%;

}
.upload{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
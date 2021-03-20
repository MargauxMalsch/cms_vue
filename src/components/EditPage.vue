<template>
  <div>

    <div class="content">
      <h1><strong>Modifier la page</strong></h1>
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
          <textarea name="content" id="text" cols="50" rows="10" v-model="content"></textarea>
        </div>


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
      <input type="submit" name="" id="validate" v-on:click='newArticle()'>
      <button class="button is-primary">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
name: "EditPage.vue"
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
}
#txt{
  margin: 5px 0;
}
.content{
  width: 100%;
  margin: 10px 20px;
  border: none;
}
.input{
  width: 50%;
  margin: auto;
}
img{
  margin: auto;
}
</style>
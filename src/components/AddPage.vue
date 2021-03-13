<template>
  <div>
    <h1><strong>Créer une nouvelle page de Blog</strong></h1>
    <div class="content">
    <div class="form">
      <div class="info">
        <label>Titre de la page</label>
        <input class="input is-link" type="text" placeholder="Link input">
      </div>

      <div class="info">
        <label>Meta title     </label>
        <input class="input is-link" type="text" placeholder="Link input">
      </div>

      <div class="info">
        <label>Meta description</label>
        <input class="input is-link" type="text" placeholder="Link input">
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

    </div>
   <div class="cont">
     <label>Corps du text</label>
     <textarea class="corps" rows="10"></textarea>
   </div>
<div class="valide">
  <button class="button is-danger">Créer la page</button>
</div>
  </div>
</template>
<script>

</script>
<style scoped>
.content{
  display: flex;
  flex-wrap: wrap;
justify-content: space-between;
  border: none;

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
.file-input{
  width: 100%;
}
.img{
  width: 50%;

}

label{
  margin: 0 5%;
  width: 50%;
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
.cont{
  display: flex;
  align-items: center;

}
.corps{
  width: 30%;

}
.valide {
  margin: 4% 3%;
}



</style>
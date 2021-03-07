<template>
  <div>
<div class="content">
  <img src="https://sm.ign.com/ign_fr/news/b/baby-yoda-/baby-yoda-is-being-added-to-minecraft_bjqc.jpg">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et consequat enim. Proin in condimentum mi. Curabitur sed nunc nisl. Nullam eu cursus velit, et hendrerit sem. Vestibulum fringilla est tortor, ac consectetur neque pretium non. Donec tincidunt leo sit amet accumsan fringilla. Integer sagittis, magna eget pulvinar scelerisque, ipsum massa ultrices justo, viverra suscipit ante magna at lectus. Morbi nulla quam, consequat in est ac, sollicitudin facilisis ante. Phasellus consequat eros arcu, in sagittis neque vestibulum non.
  </p>
  <button class="button is-warning is-light">Éditer</button>
  <button class="delete is-large"></button>
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
</style>
<script>
export default {
  name: 'list-blog',
}
</script>

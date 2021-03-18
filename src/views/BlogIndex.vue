<template>
<div>
<div>
  <img class="imgArticle" src="https://sm.ign.com/ign_fr/news/b/baby-yoda-/baby-yoda-is-being-added-to-minecraft_bjqc.jpg">
  <h2>ICI C'EST LE TITRE</h2>
</div>
<div>
  <p>
  ICI C'EST LA DESCRIPTION

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit, felis ac ultricies interdum, urna eros venenatis ipsum, sollicitudin malesuada tortor lectus vitae neque. Etiam rutrum sem in purus hendrerit, vitae molestie orci sagittis. Vivamus rhoncus volutpat enim, quis malesuada nibh tincidunt eget. Suspendisse vulputate orci id bibendum tristique. Nam tempor felis nisl, ut interdum lacus vehicula a. Pellentesque dapibus tellus a metus egestas sollicitudin. Nam malesuada ex in libero tristique, non semper nisi ornare. Proin vitae commodo risus.

  Quisque lorem augue, sodales id est in, porttitor vulputate libero. Suspendisse fermentum, mauris id finibus tincidunt, lacus justo sagittis eros, eu cursus arcu quam nec nulla. Quisque egestas blandit accumsan. Sed ornare sit amet odio et ultrices. Curabitur auctor mi eget ligula ultricies sollicitudin. Curabitur varius dignissim lorem, ac rhoncus felis suscipit ut. Vestibulum cursus sed sapien ac vestibulum. Quisque ut facilisis tortor. Aliquam sit amet dui nec tortor congue rhoncus. Praesent eu sem fringilla, hendrerit dui quis, hendrerit ex. In hac habitasse platea dictumst. Proin massa nunc, cursus ac malesuada id, porta non libero. Ut pellentesque pharetra tellus, ut finibus lorem pellentesque eu. Phasellus pharetra tempus orci eget aliquet. Etiam eu lorem euismod, volutpat risus vitae, egestas lectus.

  Mauris tempus tempus venenatis. Donec consectetur varius magna facilisis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet nunc vitae neque iaculis tristique. In ornare lacinia nibh, et finibus nulla suscipit sed. Aenean pretium leo purus, id rutrum metus posuere viverra. Duis egestas lectus eros, quis consequat nibh euismod ac. Aliquam vulputate placerat erat, ut viverra nulla malesuada vitae. Fusce tellus orci, viverra eu cursus vel, efficitur at neque. Sed vel condimentum ex. Curabitur quis dolor a ex ultricies semper.

  Fusce sit amet neque et nisi condimentum pellentesque. Curabitur eleifend eros a augue maximus congue. Duis ornare hendrerit ante et malesuada. Sed in venenatis mi, a mattis ipsum. Fusce consequat leo eros, vel aliquam risus imperdiet nec. Sed augue mi, cursus id enim at, laoreet iaculis nibh. Phasellus egestas sit amet sem sed sodales. Quisque tincidunt rhoncus nunc, sit amet vulputate lacus consequat ut. Morbi quis lectus turpis. Nullam eleifend aliquet lorem, quis maximus justo malesuada quis. Nullam felis erat, gravida a semper in, sodales non massa. In magna augue, aliquet sed est a, malesuada vulputate dolor. Vestibulum imperdiet nunc eu tellus iaculis feugiat. Pellentesque hendrerit a est quis volutpat. Etiam eu justo neque.

  Cras ac lacinia purus, quis consequat leo. Nulla facilisi. Etiam in pharetra nibh. Nullam blandit velit eget lorem euismod, cursus commodo augue porta. Donec interdum ligula ac purus volutpat accumsan. Proin vestibulum quam risus, sodales hendrerit eros posuere et. Donec pellentesque dolor pretium pellentesque faucibus. Donec neque tortor, aliquet imperdiet malesuada vel, malesuada sed purus. Sed lobortis risus eu egestas maximus. Quisque ipsum orci, efficitur faucibus suscipit a, cursus ut leo. Aenean blandit lorem quis quam maximus aliquam.

  Quisque vel metus purus. Pellentesque blandit diam nisl, non hendrerit orci maximus sit amet. Vivamus eget tellus ut diam dapibus semper sed ultricies nibh. Aenean hendrerit in purus in fermentum. Suspendisse potenti. Maecenas vel est dictum, laoreet elit vel, iaculis lacus. Phasellus lobortis purus in tincidunt malesuada.

  Morbi tincidunt dolor a velit mattis, ac luctus nisl tincidunt. Quisque suscipit aliquam libero, sit amet tincidunt sapien pretium id. Donec venenatis iaculis consectetur. Maecenas euismod dolor ac laoreet interdum. In hac habitasse platea dictumst. Aliquam at tempus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vulputate sit amet velit sed semper. Ut pellentesque convallis risus. Quisque mollis posuere commodo.
  </p>
</div>
  <div class="bas_info">
    <div class="date_time">
      <h2 class="date"> {{ date }} </h2>
    </div>
    <div class="author">
      <img class="uiface" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ">
      <h4>ABBY GROSSEMERDE</h4>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BlogIndex.vue",

  computed: {
    date: function () {
      let current = new Date();
      let day = current.toLocaleString('default', {weekday: 'long'})
      let month = current.toLocaleString('default', {month: 'long'})
      let date = current.getDate();
      let dateTime = day + ' ' + date + ' ' + month;

      return dateTime;
    },
  },
}
</script>

<style scoped>
 .imgArticle{
  width: 30%;
}
h2{
  padding: 2% 0;
}
p{
  width: 80%;

  margin: auto;
}
.uiface{
  border-radius: 100%;
  width: 100px;
}
h4{
  padding: 0 2%;
}
.author{
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 5% 0;
  width: 50%;
}
.bas_info{
  display: flex;

}
.date_time{
  margin: auto;
  width: 50%;
}
</style>
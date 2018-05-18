<template>

<!--challenge-->
<div class="bg-image">
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 t-center">
      <h1 class="md-display-1 t-center">Luis G Saavedra.</h1>
      <span class="md-body-1 t-center">UX UI Designer, Digital Designer & Frontend Designer</span>
      <md-button class="md-dense md-primary t-center" to="/portfolio">view Porfolio</md-button>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";
#index {
  .logo {
    width: auto;
    height: 220px;
    display: block;
    img {
      height: 220px;
    }
  }
}
.md-display-1,
.md-body-1 {
  text-align: left;
}
.btn {
  background: $color__black-rock;
  color: $color__white;
  margin: auto;
  padding: 0 $space--md;
}
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("http://saavedral.me/saavedral/images/welcome.png") no-repeat center center;
  background-size:50vw;
  @include md-layout-medium-and-up {
    background-size: 20vw;
  }
}
</style>

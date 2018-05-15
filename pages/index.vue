<template>

    <!--challenge-->
    <div>
      <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-size-100 md-alignment-centered">
      <div class="space-xl"></div>
      <div class="space-xl"></div>
      <div class="space-xl"></div>
      <div class="space-xl"></div>
    </div>

        <div class="md-layout-item md-small-size-20 md-xsmall-size-100 md-size-20 md-alignment-centered screens">
         <a class="logo" href="#">
          <img src="http://saavedral.me/saavedral/images/ls.svg"/>
        </a>
        </div>
      
        <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered">
        <h1 class="md-display-1">Luis G Saavedra.</h1>
      <span class="md-body-1">UX UI Designer, Digital Designer & Frontend Designer</span>
      <md-button class="md-dense md-primary" to="/projects">view Porfolio</md-button>
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
</style>

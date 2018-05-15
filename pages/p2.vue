<template>

  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-small-size-80 md-xsmall-size-100 md-size-60 md-alignment-centered">
      <div class="space-xl"></div>
      <div class="space-xl"></div>
    </div>
    <!--Porfolio-->
    <div class="block-mobile md-layout-item md-small-size-80 md-xsmall-size-100 md-size-60 md-alignment-centered">
      <h1 class="md-display-1">2plai Webapp</h1>
      <span class="md-body-1">Design, UI, Frontend, Bootstrap</span>
      <div class="md-divider"></div>
      <div class="p-mobile">
        Design and Frontend for 2Plai.com.
        <br>
        2plai.com is a new generation digital music store, built to discovering songs and albums easier than ever before.
        <br><br>
        Challenges:
        <ul>
          <Li>Redesign of the site and make it responsive</Li>
          <li>Use Bootstrap v3 and SCSS </li>
        </ul>
        <br>
      </div>
    </div>
    <div class="md-alignment-top-center">
      <div class="mobile">
        <div class="circle"></div>
        <img src="http://saavedral.me/saavedral/images/2plai-home.png"/>
      </div>
    </div>

    <div class="blue-stripe">
      <div class="macbook">
        <img src="http://saavedral.me/saavedral/images/2plai-home-mac.png"/>
      </div>
    </div>

    <div>
      <div class="space-xl"></div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100 md-size-33 md-xlarge-size-33"><img src="http://saavedral.me/saavedral/images/2ps0.png"/></div>
        <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100  md-size-33 md-xlarge-size-33"><img src="http://saavedral.me/saavedral/images/2ps1.png"/></div>
      </div>
      <div class="space-xl"></div>

    </div>
    <!--End porfolio-->
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/styles.scss';

  .logo {
    width: 120px;
    height: 120px;
    display: grid;
    img {
      height: 120px;
    }
  }
  .mobile {
    width: 300px;
    height: 605px;
    position: relative;
    display: grid;
    text-align: center;
    padding: $space--lg 0;
    background: url("http://saavedral.me/saavedral/images/iphone.png");
    background-size: cover;
    margin-top: $space--xl;
    @include md-layout-medium-and-up {
      position: relative;
      top: 0;
      margin-top: 0;
    }
    img {
      position: absolute;
      top:70px;
      left:18px;
      width: 264px;
      height: auto;
    }
  }
  .macbook {
    width: 370px;
    height: 200px;
    position: relative;
    display: grid;
    background: url("http://saavedral.me/saavedral/images/macbook.png");
    background-size: cover;
    margin: 0 auto;
    img {
      position: absolute;
      top: 14px;
      left: 34px;
      width: 302px;
      height: auto;
    }
    @include md-layout-medium-and-up {
      width: 846px;
      height: 469px;
      img {
        top:30px;
        left: 83px;
        width: 682px;
      }
    }

  }
  .screens {
    text-align: center;
    img {
      width: 360px;
      height: auto;
    }
  }
  .circle {
    display: none;
    @include md-layout-medium-and-up {
      height: 500px;
      width: 500px;
      display: block;
      position: relative;
      border-radius: 50%;
      background: $color__blue--alpha;
      top: -200px;
      right: 100px;
      z-index: -1;
    }
  }
  .block {
    background: $color__white;
    color: $color__secondary-blue;
    position: relative;
    @include md-layout-medium-and-up {
      padding: {
        top: $space--xl;
        bottom: $space--xl;
        left: $space--xl;
        right: $space--xl;
      }
    }
  }
  .block-mobile {
    position: relative;
    left: 0;
    @include md-layout-medium-and-up {
      padding: {
        top: $space--xl;
        bottom: $space--xl;
        left: $space--xl;
        right: $space--xl;
      }
      left: 150px;
    }
  }
  .p-mobile {
    padding: 0;
      @include md-layout-medium-and-up {
        padding-right: 200px;
      }
    }
  .blue-stripe {
    margin-top: $space--xl;
    padding: $space--xl 0;
    background: $color__blue--alpha;
  }
  .p1 {
  }
  .btn {
    background: $color__black-rock;
    color: $color__white;
    margin: 0;
  }

</style>

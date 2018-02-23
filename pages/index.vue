<template>
  <div class="app">
    <md-app>
      hello
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  @import '~assets/scss/styles';

  .logo {
    width: 60px;
    height: auto;
    margin: $space--sm $space--md;
  }

  .about,
  .contact,
  .portfolio {
    min-height: 900px;
    padding: $space--lg 0;
    width: 100%;
  }

  .app {
    .md-app {
      padding-top: $space--sm;
    }
    .md-app-content {
      padding: 0 $space--md;
    }
    .md-toolbar {
      box-shadow: none;
    }
  }

  .social-media {
    display: inline;
    .md-avatar-icon {
      background: $color__secondary-blue;
      color: $color__white;
      margin: $space--xs;
      :visited {
        color: $color__white;
      }
      :first-child {
        margin-left: 0;
      }
    }
  }

</style>

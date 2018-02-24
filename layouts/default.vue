<template>
    <div>
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Navigation</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <navbar></navbar>

            </md-app-drawer>
            <md-app-content>
                <nuxt/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Vue from 'vue'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.css'

    import 'assets/scss/styles.scss'

    Vue.use(VueMaterial)

    export default {
      name: 'PersistentFull',
      components: {
        Navbar
      },
      data: () => ({
        menuVisible: false
      }),
      methods: {
        toggleMenu () {
          this.menuVisible = !this.menuVisible
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/styles';

    html {
        font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .md-app {
        height: -webkit-fill-available;
        padding-top: $space--sm;
    }
    .md-app-content {
        padding: 0 $space--md;
    }
    .md-toolbar {
        box-shadow: none;
        .md-button {
            background: $color__science-blue;
        }
    }
    .md-drawer {
        @include md-layout-medium-and-up {
            width: 400px;
        }
        background: $color__white;
        color: $color__secondary-blue;
        overflow: hidden;
        position: fixed;
        width: 100%;
    }
</style>

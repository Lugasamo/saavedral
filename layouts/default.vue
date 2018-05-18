<template>
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
        scroll-padding: 30px;
    }
    .md-app-content {
        padding: 0 $space--md;
    }
    .md-toolbar {
        box-shadow: none;
        overflow-y: hidden; /* has to be scroll, not auto */
        -webkit-overflow-scrolling: touch;
        overflow-x: hidden;
        .md-button {
            background: $color__tuatara;
            border: 1px solid $color--white;
            .md-icon {
                margin-top: -2px;
            }
        }
    }
    .md-drawer {
        background: $color__tuatara;
        color: $color__white;
        overflow: hidden;
        position: fixed;
        height: 100% ;
        top:15px;
        width: 90px;
        @include md-layout-medium-and-up {
            width: 260px;
        }
    }
    .md-drawer {
        .md-toolbar {
            flex-flow: column;
            @include md-layout-medium-and-up {
                flex-flow: row wrap;
            }
            span {
                $map: (576: 16, 768: 17, 992: 16);
                font-size: least-squares-fit($map);
            }
        }
    }
    .md-app-content {
       padding: 0;
        margin: 0 20px;
    }
</style>

<template>
    <md-list>
        <md-list-item>
            <nuxt-link class="navbar-item" to="/">
                <div class="brand">
                    <img class="logo" src="~/assets/images/ls.svg"/>
                </div>
                <div class="md-divider"></div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/about">
                <md-icon class="md-size-2x">face</md-icon>
                <div>
                    <h1 class="md-subheading">About me.</h1>
                    <div class="md-body-2">A bit of me.</div>
                </div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/projects">
                <md-icon class="md-size-2x" >photo</md-icon>
                <div>
                    <h1 class="md-subheading">Portfolio.</h1>
                    <div class="md-body-2">My work in the industry.</div>
                </div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/contact">
                <md-icon class="md-size-2x">message</md-icon>
                <div>
                    <h1 class="md-subheading">Contact.</h1>
                    <div class="md-body-2"> I would love to hear from you.</div>
                </div>
            </nuxt-link>
        </md-list-item>

        <md-app-content>
            <div class="md-divider"></div>
            <md-list class="social-media">
                <md-avatar class="md-avatar-icon">
                    <a href="https://www.linkedin.com/in/luis-g-saavedra" target="_blank"><i class="fa fa-linkedin"></i></a>
                </md-avatar>

                <md-avatar class="md-avatar-icon">
                    <a href="https://github.com/Lugasamo" target="_blank"><i class="fa fa-github"></i></a>
                </md-avatar>

                <md-avatar class="md-avatar-icon">
                    <a href="https://gitlab.com/Saavedral" target="_blank"><i class="fa fa-gitlab"></i></a>
                </md-avatar>

                <md-avatar class="md-avatar-icon">
                    <a href="https://www.drupal.org/u/lugasamo" target="_blank"><i class="fa fa-drupal"></i></a>
                </md-avatar>

            </md-list>
        </md-app-content>
    </md-list>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/styles.scss';
    .logo {
        width: auto;
        display: grid;
        @include md-layout-medium-and-up {
            width: auto;
            height: 80px;
            display: grid;
            img {
                height: 80px;
            }
        }
    }

    .md-list {
        .md-subheading {
            margin-bottom: $space--sm;
            display: none;

            @include md-layout-medium-and-up {
                display: block;
            }
        }
        .md-body-2 {
            color: $color__third-blue;
            font-weight: $font__weight--medium;
            display: none;

            @include md-layout-medium-and-up {
                display: block;
            }
        }
        a {
            text-decoration: none;
            &:visited {
                color: inherit;
            }
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
    .navbar-item {
        display: table;
        .brand {
            width: 100%;
            display: block;
        }
        a, div {
            display: table-cell;
        }
        div {
            padding: 0;
            @include md-layout-medium-and-up {
                padding: 0 $space--md;
                div {
                    padding: 0;
                }
            }
        }
        .md-divider {
            display: block;
        }
    }
</style>
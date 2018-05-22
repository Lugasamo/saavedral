<template>
    <md-list>
        <md-list-item>
            <nuxt-link class="navbar-item" to="/">
                <div class="brand">
                    <img class="logo" src="http://saavedral.me/saavedral/images/ls-lines.svg"/>
                </div>
                <div class="md-divider"></div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/about">
                <md-icon class="md-size-1x">face</md-icon>
                <div>
                    <h1>About me.</h1>
                </div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/portfolio">
                <md-icon class="md-size-1x" >photo</md-icon>
                <div>
                    <h1>Portfolio.</h1>
                </div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/contact">
                <md-icon class="md-size-1x">message</md-icon>
                <div>
                    <h1>Contact.</h1>
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
        h1 {
            color: $color__linen;
            font-weight: $font__weight--medium;
            display: none;

            @include md-layout-medium-and-up {
                display: block;
            }
        }
        .md-icon {
            font-size: 30px !important;
            padding: 0 25px;
            margin-top: -$space--sm;
        }
        a {
            text-decoration: none;
            &:link { /* Essentially means a[href], or that the link actually goes somewhere */
                color: $color__white;
            }
            &:visited {
                color: $color__white;
            }
            &:hover {
                color: $color__white;
            }
            &:active {
                color: $color__white;
            }
        }
    }
    .social-media {
        display: inline;
        .md-avatar-icon {
            background: $color__black;
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
                padding: 0 $space--xs;
                div {
                    padding: 0;
                }
            }
        }
        .md-divider {
            display: block;
        }
    }
    .md-list-item {
        h1 {
            padding: 0;
            margin: 0;
        }
    }
</style>

<template>
    <md-list>
        <md-list-item>
            <nuxt-link class="navbar-item" to="/">
                <img src="~/assets/images/saavedral.svg"/>
                <div class="md-divider"></div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/about">
                <h1 class="md-subheading">About me.</h1>
                <div class="md-body-1">A bit of me.</div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/projects">
                <h1 class="md-subheading">Portfolio.</h1>
                <div class="md-body-1">My work in the industry.</div>
            </nuxt-link>
        </md-list-item>

        <md-list-item>
            <nuxt-link class="navbar-item" to="/contact">
                <h1 class="md-subheading">Contact.</h1>
                <div class="md-body-1"> I would love to hear from you.</div>
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
    .md-list {
        .md-subheading {
            margin-bottom: $space--sm;
        }
        .md-body-1 {
            color: $color__third-blue;
            font-weight: $font__weight--medium;
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
</style>
<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-xsmall-size-100 md-size-80 md-alignment-centered" id="projects">
            <div class="portfolio" id="portfolio">
                <h1 class="md-display-1">Portfolio.</h1>
                <span class="md-body-1">My work in the industry</span>
                <div class="md-divider"></div>
                <div class="md-layout md-gutter md-alignment-center">

                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 rl" to="/realityloop"></nuxt-link >
                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 plai" to="/2plai"></nuxt-link >
                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 sushi" to="/sushi"></nuxt-link >
                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 ikea" to="/ikea"></nuxt-link >
                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 vollie" to="/vollie"></nuxt-link >
                    <!--<nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 bizally" to="/p1"></nuxt-link >-->
                    <!--<nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 redgum" to="/p1"></nuxt-link >-->
                    <nuxt-link  class="md-layout-item md-medium-size-33 md-small-size-25 md-xsmall-size-100 lookatme" to="/lookatme"></nuxt-link >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/styles.scss';

    .portfolio {
        // Grid
        .md-list-item-content {
            padding: 0;
        }
        .md-layout-item {
            height: 300px;
            margin: {
                top: 0;
                bottom: $space--lg;
                right: 0;
                left: 0;
            }
            transition: .3s $md-transition-stand-timing;

            &:after {
                width: 100%;
                height: 100%;
                display: block;
                background: transparent;
                content: " ";
                margin: {
                    top: $space--xs;
                    bottom: $space--xs;
                }
            }
        }

        .md-layout.md-gutter > .md-layout-item {
            min-width: 30%;
        }

        .md-list-item-content {
            display: block;
        }
        @mixin background-ims () {
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
            box-shadow: 1px 1px 14px -3px black;
        }

        .rl {
            &::after {
                background: url("http://saavedral.me/saavedral/images/realityloop-portfolio.png");
                @include background-ims ();
            }
        }
        .plai {
            &::after {
                background: url("http://saavedral.me/saavedral/images/2plai-portfolio.png");
                @include background-ims ();
            }
        }
        .sushi {
            &::after {
                background: url("http://saavedral.me/saavedral/images/sushisushi-portfolio.png");
                @include background-ims ();
            }
        }
        .ikea {
            &::after {
                background: url("http://saavedral.me/saavedral/images/ikea-portfolio.png");
                @include background-ims ();
            }
        }
        .bizally {
            &::after {
                background: url("http://saavedral.me/saavedral/images/bizally-portfolio.png");
                @include background-ims ();
            }
        }
        .redgum {
            &::after {
                background: url("http://saavedral.me/saavedral/images/redgum-portfolio.png");
                @include background-ims ();
            }
        }
        .lookatme {
            &::after {
                background: url("http://saavedral.me/saavedral/images/lookatme-portfolio.png");
                @include background-ims ();
            }
        }
        .vollie {
            &::after {
                background: url("http://saavedral.me/saavedral/images/vollie-portfolio.png");
                @include background-ims ();
            }
        }
    }
</style>

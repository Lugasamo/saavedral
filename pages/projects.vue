<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-xsmall-size-100 md-size-80 md-alignment-centered" id="projects">
            <div class="portfolio" id="portfolio">
                <h1 class="md-display-1">Portfolio.</h1>
                <span class="md-body-1">My work in the industry</span>
                <div class="md-divider"></div>

                <div class="md-layout md-gutter md-size-100">
                    <a class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">one</a>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">two</div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">three</div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">four</div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">five</div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">six</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/styles.scss';

    .portfolio {
        // Grid
        .md-layout-item {
            height: 240px;
            margin: {
                top: $space--md;
                bottom: $space--lg;
            }
            transition: .3s $md-transition-stand-timing;

            &:after {
                width: 100%;
                height: 100%;
                display: block;
                background: $color__java;
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
    }

    // Dialog
    .md-dialog {
        box-shadow: none;
        .md-dialog-container {
            background: $color__white;
        }
    }

    .md-dialog.md-dialog-fullscreen.md-theme-default {
        background: white;
        color: $color__black-rock;
    }
</style>

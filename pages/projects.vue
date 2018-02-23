<template>
    <div class="portfolio" id="portfolio">
        <h1 class="md-display-1">Portfolio.</h1>
        <span class="md-body-1">My work in the industry</span>
        <div class="md-divider"></div>

        <div class="md-layout md-gutter">
            <a class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" @click="showDialog = true">one</a>

            <md-dialog class="md-medium-size-100" :md-active.sync="showDialog">
                <md-dialog-title>Preferences</md-dialog-title>

                <md-tabs md-dynamic-height>
                    <md-tab md-label="General">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                    </md-tab>

                    <md-tab md-label="Activity">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae
                            commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit
                            praesentium inventore ducimus ipsa aut.</p>
                    </md-tab>
                </md-tabs>
                <md-button class="md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog>

            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">two</div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">three</div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">four</div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">five</div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">six</div>
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

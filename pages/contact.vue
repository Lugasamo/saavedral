<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div class="contact md-layout-item md-size-60 md-small-size-100 md-alignment-centered" id="contact">
            <h1 class="md-display-1">Contact.</h1>
            <span class="md-body-1">I would love to hear from you.</span>
            <div class="md-divider"></div>
            <form class="md-layout" v-if="submitted === 0" @submit="formSubmit">
                <md-field>
                    <label>Name</label>
                    <md-input
                            v-model="form.name"
                            :required="true"

                            name="name"
                            type="text"/>
                </md-field>

                <md-field>
                    <label>Email</label>
                    <md-input
                            v-model="form.email"
                            :required="true"

                            name="email"
                            type="email"
                    />
                </md-field>
                <md-field>
                    <label>Message</label>
                    <md-textarea
                            v-model="form.message"

                            :max-rows="6"
                            :required="true"
                            :rows="6"

                            name="message"
                    />
                </md-field>
                <md-button class="md-dense md-primary" type="submit" value="Send">Send message</md-button>
            </form>
            <!-- Thank you message. -->
            <div class="form-message" v-else-if="submitted === 1">
                <h2>Thank you for your submission {{ form.name }}.</h2>
                <p>Someone will be in touch in the next 2 working days,<br>
                    or please give us a call on</p>
                <a href="tel:+61386096966" class="btn btn-lg button__call_lg">+61 3 8609 6966</a>
            </div>


            <!-- Failed submission message. -->
            <div class="form-message" v-else>
                <h2>Oops, it seems your form didn't submit properly.</h2>
                <p>
                    Please give us a call on
                </p>
                <a href="tel:+61405433531">+61 4 0543 3531</a>
                <p>
                    or email us <a href="mailto:luis@saavedral.me?subject=Contact us&body=Hi,
    I had a failed contact form submission, here some information about
    me project, please get in touch to discuss.">
                    luis@saavedral.com</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          api: 'https://app.99inbound.com/api/e/RfSIyIWj',
          form: {
            email: null,
            message: null,
            name: null
          },
          submitted: 0
        }
      },
      methods: {
        formSubmit (evt) {
        // Prevent default form submission behaviour.
          evt.preventDefault();

          // Send AJAX Post request to endpoint.
          this.$axios.post(this.api, this.form)
            .then((response) => {
              this.submitted = -1;
              // Ensure that the submission was received.
              if (response.status === 200 && response.data.includes('Thank You')) {
                this.submitted = 1;
              }
            })

            .catch((error) => {
            // @TODO - Catch error?
              console.log(error);
              this.submitted = -1;
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/styles.scss';

    .md-field {
        .md-input,
        .md-textarea {
            border-bottom: 1px solid $color__java;
        }
    }

    .md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
        padding: 0;
    }

    .md-textarea {
        font-size: medium;
        left: 0;
    }

    .md-has-textarea {
        label {
            margin: -16px;
        }
        textarea {
            padding: 0;
        }
    }

    .md-layout {
        .md-button {
            background: $color__black-rock;
            color: $color__white;
            margin: 0;
        }
    }
</style>

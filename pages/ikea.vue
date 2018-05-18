<template>

  <div class="md-layout md-gutter md-alignment-top-center">
    <!--Porfolio-->
    <!--intro-->
    <div class="block-mobile md-layout-item md-size-60 md-small-size-100 md-xsmall-size-100 md-alignment-centered">
      <h1 class="md-display-1">Ikea Case Study</h1>
      <span class="md-body-1">UX, UI Design, sketch and Invision</span>
      <div class="md-divider"></div>
      <div class="p-mobile">
        <h4>Brief</h4>
        IKEA is Swedish company that designs and sells furniture ready to assemble.</br>
        As a team, we conducted an end to end review of the experience in the store and website.
        With the idea of Re-imagining the web and e-commerce experience for IKEA Australia.
      </div>
    </div>
    <div class="md-alignment-top-center">
      <div class="mobile">
        <div class="circle"></div>
        <img src="http://saavedral.me/saavedral/images/ikea-home.jpg"/>
      </div>
    </div>

    <!--blue-->
    <div class="black-stripe">
      <div class="macbook">
        <img src="http://saavedral.me/saavedral/images/ikea-home-mac.png"/>
      </div>
    </div>

    <div>
      <div class="space-xl"></div>
      <div class="md-layout md-alignment-top-center">
        <h1 class="md-display-1">Solution</h1>
        <div class="md-layout-item md-size-100 md-alignment-top-center">
            <div class="md-divider t-center"></div>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
          <p class="t-center">IKEA Australia should aim to redesign the website, Allowing customers to be inspired by the shopping online, clear navigation of products and be supported by a search tool, that can provide filters in the search process.</p>
        </div>
      </div>

      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is2.png"/>Product page</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is4.png"/>Be inspired page</div>
        <div class="md-layout-item md-medium-size-30 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is5.png"/>Search and bagdes in products</div>
      </div>
    </div>

    <md-steppers md-vertical>
      <md-step id="first" md-label="Discover">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br/>
            <h1 class="t-center">Discover</h1>
            <p>In our process of identifying problems and possible outcomes, we divide our team into two groups (Springvale and Richmond) observe and talk with some customers based on our discussion guide and <a class="md-primary md-raised" @click="showDialog = true">Topic guide.</a></p>
            <ul>
              <H4>Competition analysis:</H4>
              <li>Fantastic furniture</li>
              <li>Freedom</li>
              <li>Burnings warehouse</li>
            </ul>
            <ul>
              <h4>The key findings of our competion analysis:</h4>
              <li>Better Navigation system and architecture.</li>
              <li>Better layout page.</li>
              <li>Efficient Search tool.</li>
              <li>Delivery in Victoria</li>
            </ul>
            <h4>Stores visits:</h4>
            <p>We visited both store in Melbourne, Richmond and Springvale</p>
            <h4>User research:</h4>
            <p>(7) Interviews</p>
            <p>Observations of customers in store and the website.</p>
          </div>
        </div>

        <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Topic map</md-dialog-title>

        <div><img src="http://saavedral.me/saavedral/images/topic-map.png"></div>

        <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        </md-dialog-actions>
        </md-dialog>

      </md-step>

      <md-step id="second" md-label="Define">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br>
            <h1 class="t-center">Define</h1>
            <h2>Problem statement</H2>
            <p>"How might we find a way to enable users to have the IKEA experience online without compromising what they like about the in store experience, and the way they like to shop."</p>

            <p>We used techniques to extract and prioritise information:</p>
            <ul>
              <li><a class="md-primary md-raised" @click="showDialog1 = true">Affinity map</a></li>
              <li><a class="md-primary md-raised" @click="showDialog2 = true">Ideation and - User mental map</a></li>
              <li><a class="md-primary md-raised" @click="showDialog3 = true">User Journey</a></li>
              <li><a class="md-primary md-raised" @click="showDialog4 = true">Sitemap</a></li>
              <li><a class="md-primary md-raised" @click="showDialog5 = true">User profiles</a></li>
            </ul>
          </div>
        <md-dialog :md-active.sync="showDialog1">
          <md-dialog-title>Affinity map</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/affinitymap.png"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog1 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog2">
          <md-dialog-title>Ideation and - User mental map</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/ideation-user-mental-map.png"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog2 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog3">
          <md-dialog-title>User Journey</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/user-journey.png"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog3 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog4">
          <md-dialog-title>Sitemap</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/sitemap.png"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog4 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog5">
          
          <!--User profiles<-->
          <div>
            <div class="md-layout md-gutter md-alignment-center">
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered screens">
                <img src="http://saavedral.me/saavedral/images/the-destroyer.png"/>
              </div>
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered">
                <h2>User profiles</h2>
                <h3>Search and destroyer</h3>
                The search and destroyer needs a way to efficiently and easy way to purchase the item they are looking for.
              </div>
            </div>

            <div class="md-layout md-gutter md-alignment-center">
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered">
                <h3>The Dreamer</h3>
                The dreamer needs a way to be inspired by the IKEA design rooms, in order to decorate their houses with confidence.
              </div>
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered screens">
                <img src="http://saavedral.me/saavedral/images/the-dreamer.png"/>
              </div>
            </div>

            <div class="md-layout md-gutter md-alignment-center">
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered screens">
                <img src="http://saavedral.me/saavedral/images/the-honeypot-sucker.png"/>
              </div>
              <div class="md-layout-item md-small-size-40 md-xsmall-size-100 md-size-40 md-alignment-centered">
                <h3>The honeypot sucker</h3>
                The honeypot sucker loves going to IKEA for the experience, Knowing what they want to buy and leaving with additional items they were inspired by along they way.
              </div>
            </div>

          </div>


          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog5 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>
        </div>
      </md-step>

      <md-step id="third" md-label="Develop">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br/>
            <h1 class="t-center">Develop</h1>
            <p>
We created paper sketches and Wireframes to the point we have clear our designs and to proceed to the final mockup and testing.</p>
            <ul>
              <li><a class="md-primary md-raised" @click="showDialog6 = true">Paper Prototyping</a></li>
              <li><a class="md-primary md-raised" @click="showDialog7 = true">Wireframes</a></li>
              <li>Testing</li>
            </ul>
          </div>
        </div>

        <md-dialog :md-active.sync="showDialog6">
          <md-dialog-title>Paper Prototyping</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/ikea-sketch.jpg"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog6 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog7">
          <md-dialog-title>Wireframes</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/ikea-wireframes.jpg"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog7 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>


      </md-step>

      <md-step id="fourth" md-label="Deliver">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br/>
            <h1 class="t-center">Deliver</h1>
          </div>
        </div>
      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is2.png"/>Product page</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is4.png"/>Be inspired page</div>
        <div class="md-layout-item md-medium-size-30 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is5.png"/>Search and bagdes in products</div>
      </div>
      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is3.png"/>Be inspired homepage (collections)</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/is1.png"/>Mega menu</div>
      </div>
      </md-step>
    </md-steppers>

    <!--End porfolio-->
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
      showDialog1: false,
      showDialog2: false,
      showDialog3: false,
      showDialog4: false,
      showDialog5: false,
      showDialog6: false,
      showDialog7: false
    })
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";

  .md-dialog {
    max-width: 768px;
  }
</style>

<template>

  <div class="md-layout md-gutter md-alignment-top-center">
    <!--Porfolio-->
    <!--intro-->
    <div class="block-mobile md-layout-item md-size-60 md-small-size-100 md-xsmall-size-100 md-alignment-centered">
      <h1 class="md-display-1">Vollie Case Study</h1>
      <span class="md-body-1">UX, UI Design, sketch and Invision</span>
      <div class="md-divider"></div>
      <div class="p-mobile">
        <h4>Brief</h4>
        Develop an app (for IOS and Android)<br>
        Vollie is growing well, but the communication between our charities and skilled volunteers needs to improve to ensure projects are delivered on time and to a really high standard.
        <h4>Team</h4>
        Stefanie Bayer, Justine Caldwell, Lena Sun and Luis Saavedra.
      </div>
    </div>
    <div class="md-alignment-top-center">
      <div class="mobile">
        <div class="circle"></div>
        <img src="http://saavedral.me/saavedral/images/vollie-home.png"/>
      </div>
    </div>

    <!--blue-->
    <div class="black-stripe">
      <div class="macbook">
        <img src="http://saavedral.me/saavedral/images/vollie-home-mac.png"/>
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
          <p class="t-center">As a team we made adjustments to the website to improve the readability and functionality. We improved the application process and dashboard.<br>
            We improved the communication between volunteers and charities.</p>
        </div>
      </div>

      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs1.png"/>Homepage</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs2.png"/>Directory page</div>
        <div class="md-layout-item md-medium-size-30 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs3.png"/>Volunteer Now</div>
      </div>
    </div>

    <md-steppers md-vertical>
      <md-step id="first" md-label="Discover">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br/>
            <h1 class="t-center">Discover</h1>
            <ul>
              <H4>Background research:</H4>
              <li>There are 54,000 charities in Australia</li>
              <li>Under-resourced and time poor</li>
              <li>Lack access to those with digital skills</li>
              <li>Millennials are keen to volunteer but there are issues with access/time</li>
              <li>Vollie connects skilled millennials and charities in need</li>
            </ul>
            <ul>
              <H4>Competition analysis:</H4>
              <li>Catchafire</li>
              <li>Good Company</li>
              <li>Taproot</li>
              <li>Seek Volunteers</li>
              <li>Probono</li>
              <li>UN Volunteers</li>
            </ul>
            <h4>User research:</h4>
            <p>(12) Interviews, 2 Charities (used Vollie), 2 Charities (not used Vollie), 7 Volunteers (not used Vollie) and 1 (Business considered using Vollie)</p>
            <p><h4>Key Research Finding — Volunteers:</h4>
            <b>Motivation:</b> make the world a better place / self interest (experience in industry),
            <b>Sense of camaraderie + community:</b> being with like-minded people,
            <b>Flexible:</b> Flexibility is crucial and
            <b>Good communication</b><br>
            <p><h4>Key Research Finding — Charities:</h4>
            <b>Account management</b>, <b>Messaging System</b> (not used), <b>Charity login</b> (More users), <b>Every dollar counts</b>, <b>Communication Issues</b> (so many emails) and <b>Desktop</b> (Charities use desktop).
            <h4>Key Research Findings — Business:</h4>
            <b>Team bonding</b>, <b>Remote volunteering</b>, <b>Online directories</b> and <b>Projects</b>.
            </p>

            
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
            <p>After conducting our research, we realised that most of the pain points our research uncovered were related to the website, we need to fix those problems first before we can move on to an app.<br>
            The website has a number of issues with readability and functionality. There are also issues around the application process and the dashboard.<br>
            Communication issues are caused by emails going to spam and the inability of volunteers to reach out to charities before they have been selected for a project</p>

            <p>We used techniques to extract and prioritise information:</p>
            <ul>
              <li><a class="md-primary md-raised" @click="showDialog1 = true">Affinity map</a></li>
              <li><a class="md-primary md-raised" @click="showDialog2 = true">Current user flow</a></li>
              <li><a class="md-primary md-raised" @click="showDialog3 = true">New user flow</a></li>

            </ul>
          </div>
        <md-dialog :md-active.sync="showDialog1">
          <md-dialog-title>Affinity map</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/affinitymapvollie.jpeg"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog1 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog2">
          <md-dialog-title>Ideation and - User mental map</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/user-flow-1.jpeg"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog2 = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog :md-active.sync="showDialog3">
          <md-dialog-title>User Journey</md-dialog-title>
          <div><img src="http://saavedral.me/saavedral/images/user-flow-2.jpeg"></div>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog3 = false">Close</md-button>
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
              <li>Paper Prototyping</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>
      </md-step>

      <md-step id="fourth" md-label="Deliver">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100">
            <br/>
            <h1 class="t-center">Deliver</h1>
            <p>To visit the Interactive Prototype click in the following link <a target="_blank" href="https://projects.invisionapp.com/share/9GHYHOZKWA6#/screens">Vollie website prototype</a></p>
          </div>
        </div>
      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs1.png"/>Homepage</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs2.png"/>Directory page</div>
        <div class="md-layout-item md-medium-size-30 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs3.png"/>Volunteer Now</div>
      </div>

      <div class="md-layout md-gutter md-alignment-top-center screens-md">
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs4.png"/>Volunteer Dashboard</div>
        <div class="md-layout-item md-medium-size-33 md-large-size-33 md-xlarge-size-33 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs5.png"/>Volunteer Job page</div>
        <div class="md-layout-item md-medium-size-30 md-large-size-33 md-xlarge-size-30 md-small-size-50 md-xsmall-size-100"><img src="http://saavedral.me/saavedral/images/vs6.png"/>Application in progress</div>
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
      showDialog3: false
    })
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";

  .md-dialog {
    max-width: 768px;
  }
</style>

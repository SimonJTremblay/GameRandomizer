<template>
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to GameRandomizer Local
            </h1>
            <h2 class="subtitle">
              Randomize the shit out of your gaming night!
            </h2>
          </div>
        </div>
      </section>
      <section>
          <b-field label="Email">
              <b-input 
                  type="email"
                  v-model="email"
                  maxlength="100">
              </b-input>
          </b-field>

          <b-field label="Password">
              <b-input 
                  type="password"
                  v-model="password"
                  password-reveal>
              </b-input>
          </b-field>
      </section>
    </div>
</template>

<script>
// @ is an alias to /src
  export default {
      data() {
          return {
              email: '',
              password:''
          }
      }
  }
</script>
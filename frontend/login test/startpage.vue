<template>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>King Savage</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
    >
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://unpkg.com/vuex/dist/vuex.js"></script>
  </head>

  <body>
    <section class="hero is-fullheight is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="card is-rounded">
              <div class="card-content">
                <h1 class="title">
                  <img src="logo.png" alt="logo" width="220">
                </h1>
                <p class="control has-icon">
                  <input class="input" id="name" type="text" placeholder="Username" v-model="name">
                  <i class="fa fa-user"></i>
                </p>
                <p class="control has-icon">
                  <input
                    class="input"
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  <i class="fa fa-lock"></i>
                </p>
                <p class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </p>
                <p class="control">
                  <button
                    class="button is-small is-outlined is-fullwidth"
                    v-on:click="submitLogin()"
                  >Login</button>
                </p>
                <p class="control">
                  <button
                    class="button is-small is-outlined is-fullwidth"
                    href="skapa konto sida"
                  >Register</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
</template>

<script>
import frontend from "./frontend";
export default {};
</script>

<style>
</style>



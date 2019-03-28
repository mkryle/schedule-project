<template>
<div>
    <section>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div class="column">
              <form class="box">
                <div class="field has-text-centered">
                  <img src="logo.png">
                  <p>
                    Select a username and password in order to create your account
                  </p>
                </div>
                <div class="field">
                  <label class="label">Username:</label>
                  <div class="control has-icons-left">
                    <input type="username" class="input" placeholder="ex. KalleBanana" v-model="name">
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password:</label>
                  <div class="control has-icons-left">
                    <input type="password" class="input" placeholder="******" v-model="password">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="checkbox">
                </div>
                <div class="field">
                  <button class="button is-success" v-on:click="addUser()">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>
</template>

<script>
import frontend from "../frontend";
export default {};
</script>

<style>
</style>
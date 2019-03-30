<template>
    <div class="container is-centered">
        <h1>  {{ msg }} </h1>
        <div class="hero is-large is-light">
<section class="section">

        <div class="columns">
            <div class="column"></div>
            <div class="column is-one-third">
                <h1 class="title">
                    My Company
                </h1>
                <p class="subtitle">
                    Subtitle Goes: <strong>Right Here</strong>
                </p>

                <div class="box" id="loginVue">
                    <form asp-action="Login">
                        <div asp-validation-summary="ModelOnly" class="help is-danger"></div>

                        <div class="field">
                            <div class="control">
                                <div class="select">
                                    <select v-model="selected" v-on:change="notNeeded(selected)" required>
                                        <option value="">I am ...</option>
                                        <option value="E">An Employee</option>
                                        <option value="D">A Dealer</option>
                                    </select>
                                </div>
                            </div>
                            <span asp-validation-for="UserType" class="help is-danger"></span>
                        </div>

                        <div class="field">
                            <label asp-for="Username" class="label">Username</label>
                            <div class="control">
                                <input asp-for="Username" v-model.trim="username" class="input" type="text" required />
                            </div>
                            <span asp-validation-for="Username" class="help is-danger"></span>
                        </div>

                        <div class="field">
                            <label asp-for="Password" class="label">Password</label>
                            <div class="control">
                                <input asp-for="Password" v-model.trim="password" class="input" type="password" required />
                            </div>
                            <span asp-validation-for="Password" class="help is-danger"></span>
                        </div>

                        <div class="field">
                            <label asp-for="Account" class="label">Account #</label>
                            <div class="control">
                                <input asp-for="Account" class="input" type="text" v-model.trim="account" :disabled="isDisabled" required/>
                            </div>
                            <span asp-validation-for="Account" class="help is-danger"></span>
                        </div>

                        <div class="field">
                            <div class="control">
                                <input type="submit" value="Login" class="button is-link" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="column"></div>

        </div>
</section>
</div>

    </div>
</template>
<script>
    export default{
        data(){
          return{
            msg: 'this is admin profile page'
          }
        }
    }
</script>

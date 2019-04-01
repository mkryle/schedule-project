<template>
    <div class="container is-centered">

        <h1 class="title is-5">  {{ msgHeader }} </h1>
        <div class="hero is-large is-light">
<section class="section">

        <div class="columns">
            <div class="column"></div>
            <div class="column is-one-third">
                <h1 class="title">
              {{ $route.params.id }}
                </h1>

                <div class="box" id="loginVue">
                    <form asp-action="Login">
                        <div asp-validation-summary="ModelOnly" class="help is-danger"></div>

                        <div class="field">
                            <div class="control">
        <p>
          Om du vill ändra ditt användarnamn och/eller ditt lösenord kan du göra det här.
        </p>
                            </div>
                            <span asp-validation-for="UserType" class="help is-danger"></span>
                        </div>

                        <div class="field">
                            <label asp-for="Username" class="label">Användarnamn</label>
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
                            <div class="control">
                                <input type="submit" value="Spara uppgifter" class="button is-link" />
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
            msgHeader: 'Ändra dina inloggningsuppgifter:'
          }
        }
    }
</script>

<template>
    <div>
        <div class="notification is-danger ">


        <div class="field is-horizontal">
          <div class="field-label">
            <label class="title is-white">Vecka 11:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="select">
                <select>
                  <option>vecka 11: 11 - 17 Mars 2019</option>
                  <option>vecka 12: 18 - 24 Mars 2019</option>
                  <option>vecka 13: 25 - 31 Mars 2019</option>
                  <option>vecka 14: 1 - 6 Mars 2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  </div>






<div class="column is-12">
<div class="tile is-child notification is-light">
  <div class="has-text-centered">
    <p class="title">Måndag</p>
    <p class="subtitle">11 Mars 2019</p>
  </div>
</div>
<article class="message ">
<div class="message-header">
  <p>06:00 - 17:00</p>
  <button class="delete" aria-label="delete"></button>
</div>
<div class="message-body is-dark" style="background-color: white; border: 1px solid #363636;">
  <table class="table is-bordered is-fullwidth">
    <thead>
  <tr>
    <th>Teacher</th>
    <th>Rom</th>
    <th>Subject</th>
    <th>Course Group</th>
    <th>Update</th>

  </tr>
</thead>
    <tbody>
      <tr>
        <td>Jon</td>
        <td>Firewall</td>
        <td>JavaScript</td>
        <td> <a href="#"> WEBB18</a> </td>
        <td>
        <div class="tags are-large is-centered">
        <a href="#"><span class="tag is-success">Status</span></a>
        <a href="#"><span class="tag">Edit</span></a>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<a class="button is-small is-primary">Add Event</a>
</article>
</div>
<div class="column is-12">
<div class="tile is-child notification is-light">
  <div class="has-text-centered">
    <p class="title">Tisdag</p>
    <p class="subtitle">12 Mars 2019</p>
  </div>
</div>
<article class="message">

<div class="message-body">
  <div class="notification is-white">
    its empty
  </div>
</div>
<a class="button is-small is-primary">Add Event</a>
</article>
</div>

</div>

</template>
<script>
    export default{
        data(){
          return{
            msg: 'this is admin home pagesssssssssssss'
          }
        }
    }
</script>

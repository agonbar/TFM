<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <div class="field has-addons">
      <div class="control">
        <input v-model="newPerson.name" class="input" type="text" placeholder="New patient name">
      </div>
      <div class="control">
        <input v-model="newPerson.age" class="input" type="text" placeholder="Age">
      </div>
      <div class="control">
        <a class="button is-info" v-on:click="addPatient(newPerson)">
          Create
        </a>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent" v-for="person in patients" v-bind:key="person.id">
        <article class="message is-info">
          <div class="message-header">{{person.name}} - {{person.age}}
            <button class="delete" v-on:click="removePatient(person.id)"></button>
          </div>
          <div class="message-body" v-on:click="$router.push('/detail/'+person.id)">
            {{person.description}}
            <div v-for="sample in person.samples" v-bind:key="sample.id">
              <span>{{sample.id}}: {{sample.file}}}</span>
              <span class="image is-4by3"><img v-bind:src="sample.img1"/></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {
        newPerson: {},
        msg: 'Listado pacientes'
      }
    },
    methods: //{
      mapActions([
        'addPatient',
        'removePatient'
      ]),
    computed: mapGetters({
      patients: 'allPatients'
    }),
    created () {
      this.$store.dispatch('getAllPatients')
    }
  }

</script>

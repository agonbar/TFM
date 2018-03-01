<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
      <div>
          {{patients[$route.params.id].name}} - {{patients[$route.params.id].age}} - {{$route.params.id}}
      </div>
    
    <span>{{patients[$route.params.id].description}}</span>
    <ul>
      <li v-for="sample in patients[$route.params.id].samples" v-bind:key="sample.id" class="box">
          <div><a href="../assets/sample.txt">Archivo {{sample.id}}: {{sample.file}}}</a></div>
          <img v-bind:src="sample.img1"/>
      </li>
    </ul> 
  </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Detail'
    }
  },
  computed: mapGetters({
    patients: 'allPatients'
  }),
  methods: mapActions([
    'addSample'
  ])
}
</script>

<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <div>
        {{person.name}} - {{person.age}} - {{$route.params.id}}
    </div>
    <span>{{person.description}}</span>
    <ul>
      <li v-for="sample in person.samples" v-bind:key="sample.id" class="box">
          <div><a href="../assets/sample.txt">Archivo{{sample.id}}</a></div>
          <img src="../assets/ECG.png" alt=""/>
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
      msg: 'Detail',
      person: {id:1, name: "jhon", age: 18, detail: false, samples: [
          {id:1, file: "../assets/sample.txt", img1: "../assets/ECG.png"},
          {id:2, file: "../assets/sample.txt", img1: "../assets/ECG.png"}
        ], description: "Esto es la descripción de uno de los clientes"}
    }
  }
}
</script>

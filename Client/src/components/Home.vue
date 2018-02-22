<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit="addPeople">
        <input type="text" v-model="newPerson.name" placeholder="Enter name"><br/>
        <input type="number" v-model="newPerson.age" placeholder="Enter age"><br/>
        <input type="submit" value="Create">

    </form>
    <ul>
      <li v-for="person in people" v-bind:key="person.id"><div>{{person.name}} - {{person.age}}</div></li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newPerson: {},
      people: [
        {id:1, name: "jhon", age: 18, samples: [
          {file: "/home/sample2.txt", img1: "/home/sample2.img"},
          {file: "/home/sample3.txt", img1: "/home/sample3.img"}
        ]},
        {id:2, name: "eva", age: 20, samples: [
          {file: "/home/sample1.txt", img1: "/home/sample1.img"},
          {file: "/home/sample4.txt", img1: "/home/sample4.img"}
        ]},
        {id:3, name: "dove", age: 22, samples: [
          {file: "/home/sample5.txt", img1: "/home/sample5.img"},
          {file: "/home/sample6.txt", img1: "/home/sample6.img"}
        ]}
      ],
      msg: 'Listado pacientes'
    }
  },
  methods: {
    addPeople: function(e) {
      console.log('add');
      e.preventDefault();
      this.people.push({
        name: this.newPerson.name,
        age: this.newPerson.age
      });
    }
  }
}
</script>
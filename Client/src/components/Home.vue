<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit="addPeople">
        <span>New User:</span>
        <input type="text" v-model="newPerson.name" placeholder="Enter name">
        <input type="number" v-model="newPerson.age" placeholder="Enter age">
        <input type="submit" value="Create">
    </form>
    <ul>
      <li v-for="person in people" v-bind:key="person.id" v-on:click="person.detail = !person.detail">
        <div>
          <span><button v-on:click="removePeople(person.id)">X</button></span>
          {{person.name}} - {{person.age}}
        </div>
        <div v-if="person.detail">
            <span>auhaiwughawughawguhawiguaghui</span>
        </div>
      </li>
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
        {id:1, name: "jhon", age: 18, detail: false, samples: [
          {file: "/home/sample2.txt", img1: "/home/sample2.img"},
          {file: "/home/sample3.txt", img1: "/home/sample3.img"}
        ]},
        {id:2, name: "eva", age: 20, detail: false, samples: [
          {file: "/home/sample1.txt", img1: "/home/sample1.img"},
          {file: "/home/sample4.txt", img1: "/home/sample4.img"}
        ]},
        {id:3, name: "dove", age: 22, detail: false, samples: [
          {file: "/home/sample5.txt", img1: "/home/sample5.img"},
          {file: "/home/sample6.txt", img1: "/home/sample6.img"}
        ]}
      ],
      msg: 'Listado pacientes'
    }
  },
  methods: {
    addPeople: function(e) {
      e.preventDefault();
      this.people.push({
        id: this.people.length + 1,
        name: this.newPerson.name,
        age: this.newPerson.age,
        detail: false
      });
    },
    removePeople: function(id) {
      for(var i = this.people.length - 1; i >= 0; i--) {
        if(this.people[i].id === id) {
          this.people.splice(i, 1);
        }
      }
    }
  }
}
</script>
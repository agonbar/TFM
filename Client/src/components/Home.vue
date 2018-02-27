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
        <a class="button is-info" v-on:click="addPeople">
          Create
        </a>
      </div>
    </div>
    <div class="tile is-parent" v-for="person in people" v-bind:key="person.id" v-on:click="person.detail = !person.detail">
      <article class="message is-info">
        <div class="message-header">{{person.name}} - {{person.age}}
          <button class="delete" v-on:click="removePeople(person.id)"></button>
        </div>
        <div class="message-body" v-on:click="$router.push('/detail')">
          {{person.description}}
          <figure class="image is-4by3">
            <img :src="person.img1">
          </figure>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        newPerson: {},
        people: [{
            id: 1,
            name: "jhon",
            age: 18,
            detail: false,
            samples: [{
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              },
              {
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              }
            ],
            description: "Esto es la descripción de uno de los clientes"
          },
          {
            id: 2,
            name: "eva",
            age: 20,
            detail: false,
            samples: [{
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              },
              {
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              }
            ],
            description: "Esto es la descripción de otro de los clientes"
          },
          {
            id: 3,
            name: "dove",
            age: 22,
            detail: true,
            samples: [{
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              },
              {
                file: "../assets/sample.txt",
                img1: "../assets/ECG.png"
              }
            ],
            description: "Esto es la descripción de otro más de los clientes"
          }
        ],
        msg: 'Listado pacientes'
      }
    },
    methods: {
      addPeople: function (e) {
        e.preventDefault();
        this.people.push({
          id: this.people.length + 1,
          name: this.newPerson.name,
          age: this.newPerson.age,
          detail: false
        });
      },
      removePeople: function (id) {
        for (var i = this.people.length - 1; i >= 0; i--) {
          if (this.people[i].id === id) {
            this.people.splice(i, 1);
          }
        }
      }
    }
  }

</script>

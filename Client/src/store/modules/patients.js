// initial state
const state = {
    all: [
      { id: 0, name: "jhon", age: 18,samples: [{id: 1,file: "../../assets/sample1.txt",img1: require('../../assets/img/ECG.png')},{id: 2,file: "../../assets/sample2.txt",img1: require('../../assets/img/ECG.png')}],description: "Esto es la descripción de uno de los clientes"},
      { id: 1, name: "eva" , age: 20,samples: [{id: 1,file: "../../assets/sample3.txt",img1: require('../../assets/img/ECG.png')},{id: 2,file: "../../assets/sample4.txt",img1: require('../../assets/img/ECG.png')},{ id: 3,file: "../../assets/sample5.txt",img1: require('../../assets/img/ECG.png')}],description: "Esto es la descripción de otro de los clientes"},
      { id: 2,name: "dove" , age: 22,samples: [{id: 1,file: "../../assets/sample6.txt",img1: require('../../assets/img/ECG.png')}],description: "Esto es la descripción de otro más de los clientes"}
    ]
}
  
// getters
const getters = {
  allPatients: state => state.all
}

// actions
const actions = {
  getAllPatients (context) {
      context.dispatch('sendSocket', {GET: 'patient'});
      state.all;
  },
  addPatient (context, patient) {
    context.commit('addPatientInternal', patient);
    context.dispatch('sendSocket', {POST: patient});
  },
  removePatient (context, patientId) {
    context.commit('removePatientInternal', patientId);
    context.dispatch('sendSocket', {DELETE: patientId});
  },
  addSample (context, patientId, sample) {
    context.commit('addSampleInternal', patientId, sample);
    context.dispatch('sendSocket', {PUT: patient});
  }
}

// mutations
const mutations = {
  setPatients (state, patients) {
    state.all = patients
  },
  addPatientInternal (state,patient) {
    var newElem = {
      id: state.all.length + 1,
      name: patient.name,
      age: patient.age
    };
    state.all.push(newElem);
  },  
  removePatientInternal (state, patientId) {
    state.all.splice(patientId, 1);
    state.all = state.all.map(function(patient, index) {
      patient.id = index;
      return patient;
    });
  },
  addSampleInternal (state, patientId, sample) {
    state.all[patientId].samples.push(sample);
  }
}
  
export default {
  state,
  getters,
  actions,
  mutations
}
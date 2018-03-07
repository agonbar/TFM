// initial state
const state = {
  all: []
}
  
// getters
const getters = {
  allPatients: state => state.all
}

// actions
const actions = {
  getAllPatients (context) {
      context.dispatch('sendSocket', {GET: "patients"});
  },
  setAllPatients (context, patients) {
    context.commit('setPatientsInternal', patients);
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
  setPatientsInternal (state, patients) {
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
  },
  PATIENT_DATA(state, response) {
    console.log(response);
    state.all = response.patients;
  }
}
  
export default {
  state,
  getters,
  actions,
  mutations
}
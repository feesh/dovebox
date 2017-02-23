// Actions

export const setupList = (doves) => {
  return {
    type: 'SETUP_LIST',
    doves
  }
}

// Filter list
export const filterList = (filter) => {
  return {
    type: 'FILTER_LIST',
    filter
  }
}

// toggle panel
export function toggleAddPanel() {
  return {
    type: 'TOGGLE_ADD_PANEL'
  }
}

// delete dove
export function deleteDove(id) {
  return {
    type: 'DELETE_DOVE',
    id
  }
}

// add a dove
export function addDove() {
  return {
    type: 'ADD_DOVE',
    id
  }
}

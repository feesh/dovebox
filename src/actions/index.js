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

// delete dove
export function deleteDove(id) {
  return {
    type: 'DELETE_DOVE',
    id
  }
}

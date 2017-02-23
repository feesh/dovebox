// Actions

export const setupList = (doves) => {
  return {
    type: 'SETUP_LIST',
    doves
  }
}

// delete dove
export function deleteDove(id) {
  return {
    type: 'DELETE_DOVE',
    id
  }
}

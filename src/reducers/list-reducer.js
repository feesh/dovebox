// Reducers for dovelist

const doves = (state = {}, action) => {
  switch (action.type) {
    case 'SETUP_LIST':
      // Initialize list with flock of doves
      console.log('setting up list!');
      return {
        doves: action.doves
      }
    case 'ADD_DOVE':
      // Create a new object with new dove data
      // Add new dove to list
      // Return list

    case 'DELETE_DOVE':
      // Check which dove to delete
      // Slice list before and after that dove
      // Return doves

    default:
      return state
  }
}

export default doves;

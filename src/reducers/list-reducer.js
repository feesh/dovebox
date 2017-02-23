// Reducers for dovelist

const doves = (state = {}, action) => {
  switch (action.type) {
    case 'SETUP_LIST':
      // Initialize list with flock of doves
      return {
        doves: action.doves
      }
    case 'FILTER_LIST':
      // Initialize list with flock of doves
      console.log('filter list!');
      console.log(action.filter);
      return state;

    case 'ADD_DOVE':
      // Create a new object with new dove data
      // Add new dove to list
      // Return list
      console.log('add a dove!');
      return state;

    case 'DELETE_DOVE':
      console.log('delete a dove!');
      // Check which dove to delete
      // Slice list before and after that dove
      // Return doves
      return state;

    default:
      return state
  }
}

export default doves;

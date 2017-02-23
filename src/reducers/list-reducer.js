// Reducers for dovelist

const doves = (state = {}, action) => {
  switch (action.type) {
    case 'SETUP_LIST':
      // Initialize list with flock of doves
      return {
        doves: action.doves,
        filter: '',
        filteredDoves: []
      }
    case 'FILTER_LIST':
      // Initialize list with flock of doves
      var filteredDoves = state.doves;

      // Set up new list with doves that match
      filteredDoves = filteredDoves.filter(function(dove) {
        // return dove.values.toLowerCase().search(
        //   action.filter.toLowerCase()) !== -1;

        for (const key of Object.keys(dove)) {
            const val = dove[key];
            if (typeof val === 'string') {
              if (val.toLowerCase().search(action.filter.toLowerCase()) !== -1) {
                return true;
              };
            } else if (typeof val === 'number')  {
              const num = val.toString().toLowerCase();
              if (num.search(action.filter.toLowerCase()) !== -1) {
                return true;
              };
            }
        }
      });

      // Return filtered list of matching doves
      return {
        ...state,
        filter: action.filter,
        filteredDoves: filteredDoves
      }

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

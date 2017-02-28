// Reducers for dovelist

const doves = (state = {}, action) => {
  switch (action.type) {
    case 'SETUP_LIST':
      // Initialize list with flock of doves
      return {
        doves: action.doves,
        filter: '',
        filteredDoves: [],
        sort: '',
        lastSort: '',
        sortDirection: 1,
        sortedDoves: [],
        addPanelIsVisible: false
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

    // Sort list of doves by a criteria:
    case 'SORT_LIST':
      // Initial list & state
      let sortedDoves = state.doves;
      let sortDirection = state.sortDirection;
      let lastSort;

      // Set lastSort for next round
      if (!state.lastSort) {
        // If state.lastSort is unset, set with new sort
        lastSort = action.sortby;
      } else {
        // Else set to previous sort
        lastSort = state.sort;
      }

      // If the same sort is selected twice, reverse the sort
      if (action.sortby == lastSort) {
        sortDirection = sortDirection * -1;
      } else {
        sortDirection = 1;
      }

      // Set up new list with doves in a different order
      switch (action.sortby) {
        case 'id':
          sortedDoves.sort(function(a,b) {
            if (a.id < b.id) { return -1 * sortDirection; }
            if (a.id > b.id) { return 1 * sortDirection; }
            return 0;
          });
          break;

        case 'rainbow':

          var Color = function Color(hexVal) { //define a Color class for the color objects
            this.hex = hexVal;
          };

          let constructColor = function(colorObj){
            var hex = colorObj.hex.substring(1);
            /* Get the RGB values to calculate the Hue. */
            var r = parseInt(hex.substring(0, 2), 16) / 255;
            var g = parseInt(hex.substring(2, 4), 16) / 255;
            var b = parseInt(hex.substring(4, 6), 16) / 255;

            /* Getting the Max and Min values for Chroma. */
            var max = Math.max.apply(Math, [r, g, b]);
            var min = Math.min.apply(Math, [r, g, b]);


            /* Variables for HSV value of hex color. */
            var chr = max - min;
            var hue = 0;
            var val = max;
            var sat = 0;


            if (val > 0) {
              /* Calculate Saturation only if Value isn't 0. */
              sat = chr / val;
              if (sat > 0) {
                if (r == max) {
                  hue = 60 * (((g - min) - (b - min)) / chr);
                  if (hue < 0) {
                    hue += 360;
                  }
                } else if (g == max) {
                  hue = 120 + 60 * (((b - min) - (r - min)) / chr);
                } else if (b == max) {
                  hue = 240 + 60 * (((r - min) - (g - min)) / chr);
                }
              }
            }
            colorObj.chroma = chr;
            colorObj.hue = hue;
            colorObj.sat = sat;
            colorObj.val = val;
            colorObj.luma = 0.3 * r + 0.59 * g + 0.11 * b;
            colorObj.red = parseInt(hex.substring(0, 2), 16);
            colorObj.green = parseInt(hex.substring(2, 4), 16);
            colorObj.blue = parseInt(hex.substring(4, 6), 16);
            return colorObj;
          };

          let sortColorsByHue = function (colors) {
            return colors.sort(function (a, b) {
              console.log(a.hue);
              return a.hue - b.hue;
            });
          };

          let outputColors = function(hexArray, domClass) {
            var colors = [];
            $.each(hexArray, function (i, v) {
              var color = new Color(v);
              constructColor(color);
              colors.push(color);
            });

            sortColorsByHue(colors);
          };

          // sortedDoves.sort(function(a,b) {
          //   if (a.color < b.color) { return -1 * sortDirection; }
          //   if (a.color > b.color) { return 1 * sortDirection; }
          //   return 0;
          // });

          outputColors(sortedDoves);
          break;

        case 'imgs':
          sortedDoves.sort(function(a,b) {
            return ((a.images_collected - b.images_collected) * sortDirection);
          });
          break;

        case 'cmnd':
          sortedDoves.sort(function(a,b) {
            if (a.last_command.toLowerCase() < b.last_command.toLowerCase()) { return -1 * sortDirection; }
            if (a.last_command.toLowerCase() > b.last_command.toLowerCase()) { return 1 * sortDirection; }
            return 0;
          });
          break;

        case 'date':
          sortedDoves.sort(function(a,b) {
            if (a.deorbit_dt < b.deorbit_dt) { return -1 * sortDirection; }
            if (a.deorbit_dt > b.deorbit_dt) { return 1 * sortDirection; }
            return 0;
          });
          break;

        default:
          sortedDoves = state.doves
      }

      // Return sorted doves
      return {
        ...state,
        sort: action.sortby,
        sortDirection: sortDirection,
        lastSort: lastSort,
        sortedDoves: sortedDoves
      }

    // Add new dove to list
    case 'ADD_DOVE':

      let deorbit_dt = new Date();
      let color;

      if (action.color) {
        color = action.color;
      } else {
        // Random color generator:
        // http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
        const letters = '0123456789ABCDEF';
        let randocolor = '#';
        for (var i = 0; i < 6; i++ ) {
          randocolor += letters[Math.floor(Math.random() * 16)];
        }
        color = randocolor;
      }

      // Create a new object with new dove data
      const newDove = {
        id: action.id,
        active: action.active,
        color: color,
        images_collected: 0,
        last_command: action.command,
        deorbit_dt: deorbit_dt.toISOString()
      };

      // Return list
      return {
        ...state,
        sort: '',
        filter: '',
        addPanelIsVisible: false,
        doves: [newDove, ...state.doves]
      };

    case 'TOGGLE_ADD_PANEL':
      // Show or hide add new dove panel
      return {
        ...state,
        addPanelIsVisible: !state.addPanelIsVisible
      };

    case 'DELETE_DOVE':
      // Check which dove to delete
      let index = state.doves.map(function(x) {return x.id; }).indexOf(action.id);

      // Slice list before and after that dove
      let anotherOneBitesTheDust = [
        ...state.doves.slice(0, index),
        ...state.doves.slice(index + 1)
      ];

      // Return doves
      return {
        ...state,
        doves: anotherOneBitesTheDust
      };

    default:
      return state
  }
}

export default doves;

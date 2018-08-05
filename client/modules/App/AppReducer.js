//zaimportować odpowiedni typ akcji, aby reducer wiedział w jaki sposób
//zidentyfikować pojawiającą się akcję:
// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showEditPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
//Pamiętaj, żeby zwracać cały obiekt stanu, aby podmieniać tylko interesujący
//nas fragment - stąd też zastosowanie spread obiektu state w zwracanym obiekcie.
//Bez tego moglibyśmy nadpisać cały stan aplikacji, a nie tylko zmiany,
    case TOGGLE_EDIT_POST :
      return {
        ...state,
        showEditPost: !state.showEditPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
export const getShowEditPost = state => state.app.showEditPost;

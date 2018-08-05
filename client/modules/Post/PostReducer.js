import { ADD_POST, ADD_POSTS, DELETE_POST, EDIT_POST } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case EDIT_POST :
      return {
      //mapujemy po liście wszystkich postów i zmieniamy tylko tego, którego cuid pasuje do cuid w obiekcie akcji.
      //Korzystamy z Object.assign, aby stworzyć nowy obiekt łącząc ze sobą wartości z posta sprzed zmian z postem po zmianach.
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post } ),
      };

    default:
      return state;
  }

};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;

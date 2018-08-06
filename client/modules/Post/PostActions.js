import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

// Export Actions
//dodanie posta po stronie klienta
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
//wysylka posta do servera, zapisanie w bazie danych,
//a nastepnie w przypadku prawidlowej odpowiedzi z serwera,dodanie posta do czesci store'a z postami
//wysylka zapytania do servera (to skutek uboczny)->kreator zamiast obiektu zwraca funkcje
export function addPostRequest(post) {
  return (dispatch) => {
//zwraca funkcje ktora przyjmuje jako parametr dispatch i zwraca wynik dzialania wywolania API
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    //Jest to moment, w którym dostaniemy odpowiedź z serwera
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

export function editPost(cuid, post) {
  return {
    type: EDIT_POST,
    // id naszego posta
    cuid,
    //obiektu ze zmienionymi danymi posta
    post,
  };
}

//zapytanie wysylamy met. PUT
//adres API kreujemy w zależności od id posta(cuid), który chcemy edytować
export function editPostRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
//po prawidłowym wykonaniu zapytania dispatchujemy akcję editPost,
//która uaktualni posta po stronie klienta.
    }).then(() => dispatch(editPost(cuid, post)));
  };
}

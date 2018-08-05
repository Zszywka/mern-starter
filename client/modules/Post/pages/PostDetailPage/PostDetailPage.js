import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getShowEditPost } from '../../../App/AppReducer';
//kreator akcji
import { toggleEditPost } from '../../../App/AppActions';
//injectIntl -funkcja, która wstrzykuje do naszego komponentu tłumaczenia dla wiadomości
import { injectIntl, FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions (kreator akcji)
import { fetchPost, editPostRequest } from '../../PostActions';

// Import Selectors
import { getPost } from '../../PostReducer';


//odpowiednie przypięcie funkcjonalności do ekranu widoku szczegółowego Posta.
//W tym celu musimy zmienić postać komponentu z funkcyjnego na zwykły komponent,
// który będzie miał swój wewnętrzny stan. W środku tego komponentu będziemy
//przełączali się pomiędzy trybem podglądu i edycji.
export class PostDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  this.state = {
    name: this.props.post.name,
    title: this.props.post.title,
    content: this.props.post.content,
  };

  //metoda obsługująca zmiany zachodzące w każdym z pól formularza.
  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };
  //logikę zapisania formularza związanego z postem
  handleEditPost = () => {
    this.props.toggleEditPost();
    this.props.editPostRequest(this.state);
  };

  //renderuje część zajmującą się wyświetlaniem formularza(tryb edycji)
  renderPostForm = () => {
    return (
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}><FormattedMessage id="editPost" /></h2>
        <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} name="name" value={this.state.name} onChange={this.handleInputChange}/>
        <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} name="title" value={this.state.title} onChange={this.handleInputChange}/>
        <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} name="content" value={this.state.content} onChange={this.handleInputChange}/>
        <a className={styles['post-submit-button']} href="#" onClick={this.handleEditPost}><FormattedMessage id="submit" /></a>
      </div>
    );
  };
  //enderowanie widoku szczegółowego posta(tryb podgladu)
  renderPost = () => {
    return (
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{this.props.post.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.post.name}</p>
        <p className={styles['post-desc']}>{this.props.post.content}</p>
      </div>
    );
  };

//Dodaliśmy przycisk,sluzacy do zmiany trybu edycji posta, dzięki wywołaniu akcji toggleEditPost
  render() {
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <a className={styles['edit-post-button']} href="#" onClick={this.props.toggleEditPost}><FormattedMessage id="editPost" /></a>
        {
          this.props.showEditPost
            ? this.renderPostForm()
            : this.renderPost()
        }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];
//zmapuje kreatory akcji do propsów naszego komponentu:
// Retrieve data from store as props
//korzystamy z wartości showEditProps-to zmapowanym props pochodzący z Reduxowego store'a
function mapDispatchToProps(dispatch, props) {
  return {
    toggleEditPost: () => dispatch(toggleEditPost()),
    editPostRequest: (post) => dispatch(editPostRequest(props.params.cuid, post)),
  };
}

// Retrieve data from store as props
//Funkcja getShowEditPost jest selektorem, którego zadaniem jest wyciągnięcie
// ze stanu aplikacji tylko tych informacji, które są potrzebne komponentowi.
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    showEditPost: getShowEditPost(state),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  intl: PropTypes.shape({
    messages: PropTypes.shape({
      authorName: PropTypes.string.isRequired,
      postTitle: PropTypes.string.isRequired,
      postContent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showEditPost: PropTypes.bool.isRequired,
  toggleEditPost: PropTypes.func.isRequired,
  editPostRequest: PropTypes.func.isRequired,
};

//podłączenie funckji do mapowania do samego komponentu przy wykorzystaniu metody connect:
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PostDetailPage));

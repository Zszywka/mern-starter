// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel, faPencilAlt, faTrash, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'
library.add(fab, faStroopwafel, faPencilAlt , faArrowAltCircleUp, faArrowAltCircleDown, faTrash);
dom.watch();
/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}

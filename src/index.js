import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import MoonagePictures from './MoonagePictures';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MoonagePictures />, document.getElementById('root'));

serviceWorker.unregister();

//CSS (incl. Bootstrap)
import './style.scss';
//Bootstrap JavaScript 
import 'bootstrap';

//Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(far);
library.add(fab);
dom.watch();

import hairdresserIcon from './images/hairdresser.png';

import {TouchableOpacity as TouchableOpacityClass} from 'react-native';
import {WithPreventDoubleClick} from './TouchableOpacity/WithPreventDoubleClick';

import Container from './Container';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

const TouchableOpacityX = WithPreventDoubleClick(TouchableOpacityClass);

export {Container, Content, Header, Footer, TouchableOpacityX, Loader};

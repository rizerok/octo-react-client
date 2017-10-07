import { combineReducers } from 'redux';

import primaryData from './primary-data';
import pages from 'components/page/reducer/page';
import currentState from './current-state';
import asideMenu from 'components/nav/reducer/aside-menu';
import staticBlock from 'components/page/reducer/static-block';
import pageGallery from 'components/page/reducer/page-gallery';
import widget from 'components/page/reducer/widget';
import modal from 'components/modal/reducer';
import blog from 'components/blog/reducer/blog';
import slider from 'components/slider/reducer/slider';

export default combineReducers({
    primaryData,
    pages,
    currentState,
    asideMenu,
    staticBlock,
    pageGallery,
    widget,
    modal,
    blog,
    slider
});
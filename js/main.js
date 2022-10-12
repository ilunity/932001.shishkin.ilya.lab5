'use strict';

import { NewsElem } from './view.js';
import { news } from './mock-news.js';

const start = () => {
  const root = document.querySelector('#root');

  news.forEach(item => {
    const newNews = new NewsElem(item);
    root.append(newNews);
  });
};

start();

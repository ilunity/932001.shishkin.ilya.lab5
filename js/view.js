'use strict';


export class NewsModal extends HTMLDivElement {
  constructor( { title, content } ) {
    super();

    this.className = 'news-modal';
    this.addEventListener('click', this.hideModal);

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'news-modal__wrapper';
    this.wrapper.addEventListener('click', event => event.stopPropagation());
    this.append(this.wrapper);

    this.titleElem = document.createElement('h1');
    this.titleElem.className = 'news-modal__title';
    this.titleElem.innerText = title;
    this.wrapper.append(this.titleElem);

    this.contentElem = document.createElement('div');
    this.contentElem.className = 'news-modal__content';
    this.contentElem.innerText = `${title}: ${content}`;
    this.wrapper.append(this.contentElem);


    document.body.append(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.classList.add('news-modal_active');
  }

  hideModal() {
    this.classList.remove('news-modal_active');
  }
}
customElements.define('news-modal', NewsModal, { extends: 'div' });


export class NewsElem extends HTMLDivElement {
  constructor( { title, preview, content } ) {
    super();

    this.modal = new NewsModal({ title, content });

    this.className = 'news-elem';

    const titleElem = document.createElement('h2');
    titleElem.className = 'news-elem__title';
    titleElem.innerText = title;

    const previewElem = document.createElement('div');
    previewElem.className = 'news-elem__preview';
    previewElem.innerText = preview;

    const showModalButton = document.createElement('button');
    showModalButton.className = 'news-elem__button';
    showModalButton.innerText = 'Открыть всплывающее окно';
    showModalButton.addEventListener('click', this.modal.showModal);

    this.append(titleElem);
    this.append(previewElem);
    this.append(showModalButton);
  }
}
customElements.define('news-elem', NewsElem, { extends: 'div' });

'use strict';


export class NewsModal extends HTMLDivElement {
  #contentWrapper;
  #titleElem;
  #contentElem;

  constructor( props ) {
    super();

    this.className = 'news-modal';
    this.addEventListener('click', this.hideModal);

    this.#createContent(props);
    document.body.append(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  #createContent( { title, content } ) {
    this.#contentWrapper = document.createElement('div');
    this.#contentWrapper.className = 'news-modal__content-wrapper';
    this.#contentWrapper.addEventListener('click', event => event.stopPropagation());
    this.append(this.#contentWrapper);

    this.#titleElem = document.createElement('h1');
    this.#titleElem.className = 'news-modal__title';
    this.#titleElem.innerText = title;
    this.#contentWrapper.append(this.#titleElem);

    this.#contentElem = document.createElement('div');
    this.#contentElem.className = 'news-modal__content';
    this.#contentElem.innerText = `${title}: ${content}`;
    this.#contentWrapper.append(this.#contentElem);
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
  #modal;
  #titleElem;
  #previewElem;
  #showModalButton;

  constructor( { title, preview, content } ) {
    super();

    this.className = 'news-elem';
    this.#modal = new NewsModal({ title, content });

    this.#createContent({ title, preview });
  }

  #createContent( { title, preview } ) {
    this.#titleElem = document.createElement('h2');
    this.#titleElem.className = 'news-elem__title';
    this.#titleElem.innerText = title;
    this.append(this.#titleElem);

    this.#previewElem = document.createElement('div');
    this.#previewElem.className = 'news-elem__preview';
    this.#previewElem.innerText = preview;
    this.append(this.#previewElem);

    this.#showModalButton = document.createElement('button');
    this.#showModalButton.className = 'news-elem__button';
    this.#showModalButton.innerText = 'Открыть всплывающее окно';
    this.#showModalButton.addEventListener('click', this.#modal.showModal);
    this.append(this.#showModalButton);
  }
}

customElements.define('news-elem', NewsElem, { extends: 'div' });

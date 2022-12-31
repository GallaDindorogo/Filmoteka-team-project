export function getRefs() {
  return {
    gallery: document.querySelector('.gallery'),
    search: document.getElementById('search-form'),
    mBtnToQueue: document.querySelector('.add-to-queue-btn'),
    nBtnToWatched: document.querySelector('.add-to-watched-btn'),
    filmoteka: document.querySelector('.header__logo'),
    modal: document.querySelector('[data-modal-film]'),
    modalFilmWrapper: document.querySelector('#data-modal-film-wrapper'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    spinner: document.querySelector('.loader'),
    buttonUp: document.querySelector(`.up-button`),
    message: document.querySelector('.failure-message'),
    searchError: document.querySelector('.search-error'),
    emptyLibraryError: document.querySelector('.empty-library-error'),
    autofocusBtn: document.querySelector('.input-autofocus-btn'),
    autofocusInput: document.querySelector('.header__input'),
    home: document.getElementById('home'),
    library: document.getElementById('library'),
    input: document.querySelector('.header__input')

  };
}


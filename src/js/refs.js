export function getRefs() {
  return {
    gallery: document.querySelector('.gallery'),
    search: document.getElementById('search-form'),
    // mBtnToQueue: document.querySelector('.add-to-queue-btn'),
    // nBtnToWatched: document.querySelector('.add-to-watched-btn'),
    filmotekaLogo: document.querySelector('.header__logo-filmoteka'),
    modal: document.querySelector('.modal-film-backdrop'),
    modalFilmWrapper: document.querySelector('#data-modal-film-wrapper'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    spinner: document.querySelector('.loader'),
    buttonUp: document.querySelector(`.up-button`),
    message: document.querySelector('.failure-message'),
    searchError: document.querySelector('.search-error'),
    emptyLibraryError: document.querySelector('.empty-library-error'),
    autofocusBtn: document.querySelector('.input-autofocus-btn'),
    home: document.getElementById('home'),
    // library: document.getElementById('library'),
    input: document.querySelector('.header__input'),
    modeButton: document.querySelector('.toggle-theme-btn'),
    moon: document.querySelector('.moon'),
    sun: document.querySelector('.sun'),
    loginModal: document.querySelector('.modallogin'),
    regModal: document.querySelector('.modalreg'),
    loginForm: document.querySelector('.login-form'),
    regForm: document.querySelector('.reg-form'),
    loginFormBtn: document.querySelector('.logbtn'),
    regFormBtn: document.querySelector('.regbtn'),
    tuiContainer: document.getElementById('tui-pagination-container'),
    galleryPosterTitle: document.querySelector('.gallery-poster-title'),
    signOut: document.querySelector('#signout'),
    signUp: document.querySelector('#signup'),
    signIn: document.querySelector('#signin'),
    userIcon: document.querySelector('#usericon'),
    libraryLogo: document.querySelector('.header__logo-library'),
    libraryBtnW: document.querySelector('.library-watched'),
    libraryBtnQ: document.querySelector('.library-queue'),

    library: document.querySelector('.library'),
  };
}

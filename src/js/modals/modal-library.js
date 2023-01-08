import { getRefs } from '../refs';
import FilmsData from '../moviesAPI/filmsData';
import { renderModalLibraryMarkup } from '../renderMarkupLibrary/renderModalLibraryMarkup';
import { markupModalLibraryCreating } from '../renderMarkupLibrary/renderModalLibraryMarkup';
import renderErrorModalMarkup from '../renderMarkupFilmoteka/renderErrorModalMarkup';
import { addMod, removeMod } from './modal-film-btn';
import { fbFilmsAuth } from '../firebaseFilm/testAuth';
import { fbFilmsData, PLACE_Q, PLACE_W } from '../firebaseFilm/fbFilms';
import TrailerApiService from './modal-trailer';
import { renderMarkupLibraryW } from '../renderMarkupLibrary/renderMarkupLibraryW';
import { renderMarkupLibraryQ } from '../renderMarkupLibrary/renderMarkupLibraryQ';

const trailerApiService = new TrailerApiService();

const refs = getRefs();
const filmsData = new FilmsData();
let filmObj = null;
let filmId = null;

export default function toggleModalLibrary() {
  refs.library.addEventListener('click', openModalFilm);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModalFilm(event) {
    const hasId = event.target.hasAttribute('data-id');
    filmId = event.target.dataset.id;
    if (event.target === event.currentTarget) return;
    else if (hasId === false) return;

    refs.modalFilmWrapper.innerHTML = '';
    document.addEventListener('keydown', closeModalOnEscape);
    refs.modal.addEventListener('click', closeModalOnBackdrop);

    toggleClasses();

    filmsData
      .getById(filmId)
      .then(filmProperties => {
        filmObj = filmProperties;
        renderModalLibraryMarkup(
          refs.modalFilmWrapper,
          markupModalLibraryCreating(filmProperties)
        );

        const addToWatched =
          refs.modalFilmWrapper.querySelector('.add-to-watched');
        const addToQueue = refs.modalFilmWrapper.querySelector('.add-to-queue');
        const trailerBtn =
          refs.modalFilmWrapper.querySelector('.trailer-play-btn');

        trailerBtn.addEventListener('click', onYouTubeBtnClick);
        addToWatched.addEventListener('click', onClickBtnWatched);
        addToQueue.addEventListener('click', onClickBtnQueue);
        return fbFilmsData.getFilmById(filmId);
      })
      .then(filmFromData => {
        const innerAddToWatched =
          refs.modalFilmWrapper.querySelector('.add-to-watched');
        const innerAddToQueue =
          refs.modalFilmWrapper.querySelector('.add-to-queue');
        if (filmFromData && filmFromData?.place) {
          if (filmFromData.place == PLACE_W) {
            removeMod(innerAddToWatched, 'watched');
          }
          if (filmFromData.place == PLACE_Q) {
            removeMod(innerAddToQueue, 'queue');
          }
        }
      })
      .catch(renderErrorModalMarkup);
  }

  async function onClickBtnWatched(event) {
    if (event.target.classList.contains('remove-from-watched')) {
      const result = await fbFilmsData.removeFilm(filmId, 'WA');

      addMod(event.target, 'watched');
      renderMarkupLibraryW();
    } else if (event.target.classList.contains('add-to-watched')) {
      const film1 = await filmsData.getById(filmId);
      const result = await fbFilmsData.writeTo(film1, 'WA');

      removeMod(event.target, 'watched');
      renderMarkupLibraryW();
      if (event.target.nextSibling.classList.contains('remove-from-queue')) {
        addMod(event.target.nextSibling, 'queue');
      }
    }
  }

  async function onClickBtnQueue(event) {
    if (event.target.classList.contains('remove-from-queue')) {
      const result = await fbFilmsData.removeFilm(filmId, 'QU');

      addMod(event.target, 'queue');
      renderMarkupLibraryQ();
    } else if (event.target.classList.contains('add-to-queue')) {
      const film1 = await filmsData.getById(filmId);
      const result = await fbFilmsData.writeTo(film1, 'QU');

      removeMod(event.target, 'queue');
      renderMarkupLibraryQ();
      if (
        event.target.previousSibling.classList.contains('remove-from-watched')
      ) {
        addMod(event.target.previousSibling, 'watched');
      }
    }
  }

  function closeModal(event) {
    toggleClasses();
  }

  function closeModalOnEscape(event) {
    if (event.key !== 'Escape') return;

    toggleClasses();
    document.removeEventListener('keydown', closeModalOnEscape);
  }

  function closeModalOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;

    toggleClasses();
    refs.modal.removeEventListener('click', closeModalOnBackdrop);
  }

  function toggleClasses() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is_hidden');
  }

  function onYouTubeBtnClick(event) {
    trailerApiService.filmID = filmId;
    trailerApiService.showTrailer();
    closeModal();
  }
}

toggleModalLibrary();

import { fbFilmsAuth } from '../firebaseFilm/testAuth';
import { getRefs } from '../refs';
const refs = getRefs();
hideButtons();

function hideButtons() {
  const el = [(refs.signOut, refs.userIcon, refs.signUp, refs.signIn)].forEach(
    el => {
      if (el) {
        el.classList.add('visually-hidden');
      }
    }
  );
}

export function login(isLogin) {
  if (isLogin) {
    refs.signOut.classList.remove('visually-hidden');
    refs.userIcon.classList.remove('visually-hidden');
    refs.signUp.classList.add('visually-hidden');
    refs.signIn.classList.add('visually-hidden');
    refs.signOut.addEventListener('click', logAut);
  } else if (!isLogin) {
    refs.signOut.classList.add('visually-hidden');
    refs.userIcon.classList.add('visually-hidden');
    refs.signUp.classList.remove('visually-hidden');
    refs.signIn.classList.remove('visually-hidden');
  }
}

async function logAut() {
  const result = await fbFilmsAuth.logOut();
}

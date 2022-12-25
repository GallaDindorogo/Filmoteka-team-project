import FilmsData from './filmsData';

async function testFilms() {
  const getFilms = new FilmsData();
  try {
    const newLocal = await getFilms.getDayPopular(100, 'ua');
    const films = newLocal;
    console.log('======================');
    // console.log(films);
    const films2 = await getFilms.getById(9471, 'ua');
    console.log('======================');
    // console.log(films2);
  } catch (e) {
    console.log('Error', e);
  }
}

export default testFilms;

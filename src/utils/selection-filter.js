export default function seletionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],

    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'thriller'),
      },
      {
        title: 'Children',
        data: films.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}
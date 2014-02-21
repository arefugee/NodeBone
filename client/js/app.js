var app = app || {};

$(function() {
  var books = [
    { title: 'Ligula', author: 'Condimentum Fringilla',
      releaseDate: '2008', keywords: 'Sem Etiam Risus' },
    { title: 'Condimentum', author: 'Justo Fringilla',
      releaseDate: '2012', keywords: 'Pharetra Porta Vulputate' },
    { title: 'Vestibulum', author: 'Etiam Sollicitudin',
      releaseDate: '2012', keywords: 'Vestibulum Commodo Quam' },
    { title: 'Adipiscing', author: 'Ligula Fusce',
      releaseDate: '1991', keywords: 'Ullamcorper Lorem Inceptos' },
    { title: 'Condimentum', author: 'Pharetra Quam',
      releaseDate: '2011', keywords: 'Magna Parturient Vestibulum' }
  ];

  new app.LibraryView(books);
});
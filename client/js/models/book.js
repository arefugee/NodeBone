var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'Please set title',
    author: 'Please set author',
    releaseDate: 'Please set releaseDate',
    keywords: 'None'
  }
});
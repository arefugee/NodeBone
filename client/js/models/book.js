var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'Title',
    author: 'Author',
    releaseDate: 'ReleaseDate',
    keywords: 'None'
  },

  parse: function(response){
    response.id = response._id;
    return response;
  }
});
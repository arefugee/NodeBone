var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',
  initialize: function(initialBooks){
    this.collection = new app.Library(initialBooks);
    this.render();
  },

  render: function(){
    var that = this;
    this.collection.each(function(book){
      that.renderBook(book);
    });
  },

  renderBook: function(book){
    var bookView = new app.BookView({
      model: book
    });
    this.$el.append(bookView.render().el);
  }
});
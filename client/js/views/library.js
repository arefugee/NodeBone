var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  events: {
    'click #add': 'addBook'
  },

  initialize: function(){
    this.collection = new app.Library();
    this.collection.fetch({reset: true});
    this.render();

    this.listenTo(this.collection, 'add', this.renderBook);
    this.listenTo(this.collection, 'reset', this.render);
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
  },

  addBook: function(event){
    event.preventDefault();

    // Cache input vals in a hash
    var formData = {};

    // Create new models
    $('#addBook div').children('input').each(function(i,el){
      if($(el).val() !== ''){
        // Depending on the form input id selector - treat the data diferently
        if(el.id === 'keywords'){
          formData[el.id]=[];
          _.each($(el).val().split(' '), function(keyword){
            formData[el.id].push({'keyword':keyword});
          });
        } else if (el.id === 'releaseDate') {
          formData[el.id] = $('#releaseDate').datepicker('getDate').getTime();
        } else {
          formData[el.id] = $(el).val();
        }
      }
      // Reset the field value
      $(el).val('');
    });
    // Create model instance and add to the collection
    this.collection.create(formData);
  }
});
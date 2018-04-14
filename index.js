$(function () {

  var ENTER = 13;

  $('input.new-todo').keypress(function (e) {
    if (e.keyCode === ENTER) {
      var input = e.target;
      var value = input.value.trim();
      if (value.length > 0) {
        $('ul.todo-list').append('<li>\
          <div class="view">\
            <input class="toggle" type="checkbox">\
            <label>'+ value + '</label>\
            <button class="destroy"></button>\
          </div>\
          <input class="edit" value="'+ value + '">\
        </li>');
      }
      input.value = '';
    }
  });

  $('body').on('click', 'button.destroy', function(e){
    $(e.target).parents('li').remove();
  });



});
$(function () {
  var ENTER = 13;
  $('input.new-todo').keypress(function (event) {
    if (event.keyCode === ENTER) {
      $('ul.todo-list').append('<li>\
      <div class="view">\
        <input class="toggle" type="checkbox">\
        <label>Test title</label>\
        <button class="destroy"></button>\
      </div>\
      <input class="edit" value="Test title">\
    </li>');
    }
  });
});
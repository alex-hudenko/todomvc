$(function () {

  var ENTER = 13;

  // init input
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

  // init checkbox
  $('body').on('change', 'input.toggle', function(e){
    var checkbox =  e.target;
    if (checkbox.checked) {
      $(e.target).parents('li').addClass('completed');
    } else {
      $(e.target).parents('li').removeClass('completed');
    }
  });

  // init delete button
  $('body').on('click', 'button.destroy', function(e){
    $(e.target).parents('li').remove();
  });

  // init filters
  $('ul.filters a').click(function(e){
    var a = e.target;
    $('ul.filters a').removeClass('selected');
    $(a).addClass('selected');

    if (a.hash === '#/') {
      $('ul.todo-list li').show();
    }
    if (a.hash === '#/active') {
      $('ul.todo-list li').show();
      $('ul.todo-list li.completed').hide();
    }
    if (a.hash === '#/completed') {
      $('ul.todo-list li').hide();
      $('ul.todo-list li.completed').show();
    }

  })

});
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
  $('body').on('dblclick', 'input.toggle', function(e){
    e.stopPropagation();
  });

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
  });

  // Clear completed
  $('button.clear-completed').click(function(e){
    $('ul.todo-list li.completed').remove();
  });

  // Toggle all
  $('input.toggle-all').change(function(e) {
    var checkboxToggleAll =  e.target;
    if (checkboxToggleAll.checked) {
      $('ul.todo-list input.toggle').prop('checked', true);
      $('ul.todo-list li').addClass('completed');
    } else {
      $('ul.todo-list input.toggle').prop('checked', false);
      $('ul.todo-list li').removeClass('completed');
    }
  });

  // Edit mode on double click
  $('body').on('dblclick', 'ul.todo-list li', function(e){
    $(e.currentTarget).addClass('editing');
  });

  // Save on loose focus
  $('body').on('blur', 'ul.todo-list input.edit', function(e) {
    var input = e.target;
    var $li = $(input).parents('li');
    $li.removeClass('editing');
    $li.find('label').html(input.value);
  });

});
(function($) {
  'use strict';
  $(function() {
    if ($('#editable-form').length) {
      $.fn.editable.defaults.mode = 'inline';
      $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
        '<i class="fa fa-fw fa-check"></i>' +
        '</button>' +
        '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
        '<i class="fa fa-fw fa-times"></i>' +
        '</button>';
      $('#username').editable({
        type: 'text',
        pk: 1,
        name: 'username',
        title: 'Enter username'
      });

      $('#firstname').editable({
        validate: function(value) {
          if ($.trim(value) === '') return 'This field is required';
        }
      });

      $('#sex').editable({
        source: [{
            value: 1,
            text: 'Male'
          },
          {
            value: 2,
            text: 'Female'
          }
        ]
      });

      $('#status').editable();

      $('#group').editable({
        showbuttons: false
      });

      $('#vacation').editable({
        datepicker: {
          todayBtn: 'linked'
        }
      });

      $('#dob').editable();

      $('#event').editable({
        placement: 'right',
        combodate: {
          firstItem: 'name'
        }
      });

      $('#meeting_start').editable({
        format: 'yyyy-mm-dd hh:ii',
        viewformat: 'dd/mm/yyyy hh:ii',
        validate: function(v) {
          if (v && v.getDate() === 10) return 'Day cant be 10!';
        },
        datetimepicker: {
          todayBtn: 'linked',
          weekStart: 1
        }
      });

      $('#comments').editable({
        showbuttons: 'bottom'
      });

      $('#note').editable();
      $('#pencil').on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#note').editable('toggle');
      });

      $('#state').editable({
        source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      });

      $('#state2').editable({
        value: 'California',
        typeahead: {
          name: 'state',
          local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        }
      });

      $('#fruits').editable({
        pk: 1,
        limit: 3,
        source: [{
            value: 1,
            text: 'banana'
          },
          {
            value: 2,
            text: 'peach'
          },
          {
            value: 3,
            text: 'apple'
          },
          {
            value: 4,
            text: 'watermelon'
          },
          {
            value: 5,
            text: 'orange'
          }
        ]
      });

      $('#tags').editable({
        inputclass: 'input-large',
        select2: {
          tags: ['html', 'javascript', 'css', 'ajax'],
          tokenSeparators: [",", " "]
        }
      });

      $('#address').editable({
        url: '/post',
        value: {
          city: "Moscow",
          street: "Lenina",
          building: "12"
        },
        validate: function(value) {
          if (value.city === '') return 'city is required!';
        },
        display: function(value) {
          if (!value) {
            $(this).empty();
            return;
          }
          var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
          $(this).html(html);
        }
      });

      $('#user .editable').on('hidden', function(e, reason) {
        if (reason === 'save' || reason === 'nochange') {
          var $next = $(this).closest('tr').next().find('.editable');
          if ($('#autoopen').is(':checked')) {
            setTimeout(function() {
              $next.editable('show');
            }, 300);
          } else {
            $next.focus();
          }
        }
      });
    }
  });
})(jQuery);
(function () {

  let url = 'http://json-data.herokuapp.com/forms';

  let promise = $.getJSON(url);

  promise.then( function(responseFromServer){
    doSomething(responseFromServer);
  });

  let template = _.template($('#registration-form').text());
  let templateSelect = _.template($('#language-form').text());

  let doSomething = function(arrayData) {

    _.each(arrayData, function(item){

    if (item.options.length > 0) {
      var selectBlock = templateSelect(item);
      $('.container').append(selectBlock);     
    } else if (item.type === 'text' || item.type === 'tel' || item.type === 'email' || item.type === 'textarea') {
        var htmlBlock = template(item);
        $('.container').append(htmlBlock);
      };

    });
  };


}());

      // _.each(item.options, function(option){
      //     console.log(item.options);
      //     var selectBlock = templateSelect(option.label);
      //     $('.container').append(selectBlock);
      //   });

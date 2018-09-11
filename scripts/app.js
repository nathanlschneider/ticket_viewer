(function () {

    
    var app = {
        isLoading: true,
        container: document.querySelector('#authFrame'),
        spinner: document.querySelector('.loader'),
    };
    
    app.container.addEventListener('load', function(){
        app.spinner.classList.add('hide');
    })
    
    var fsButton = document.getElementById('fsButton');
    fsButton.addEventListener('click', function () {
        fsButton.classList.toggle('fs-animate');
    });
    
   
    
  

})();

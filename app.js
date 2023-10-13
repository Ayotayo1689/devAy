
function logHelloAfter2Seconds() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('my-content').style.display = 'block';
    }, 2000); 
  }



window.addEventListener('load', function(){
    logHelloAfter2Seconds();

})


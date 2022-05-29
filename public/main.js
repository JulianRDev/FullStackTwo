let thumbUp = document.getElementsByClassName("fa-thumbs-up");
let minus = document.getElementsByClassName("fa-minus");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const workout = this.parentNode.parentNode.querySelector('.colorChange').innerText
        console.log(workout)
        fetch('/lifts', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'workout': workout
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});



Array.from(minus).forEach(function(element) {
      element.addEventListener('click', function(){
        const workout = this.parentNode.parentNode.childNodes[1].innerText
        console.log(workout)
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'workout': workout,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

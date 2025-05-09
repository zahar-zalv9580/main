let epic_song = new Audio('Whispers of Eternity.mp3')
epic_song.loop = true;
epic_song.volume = 0.4;
let player_name = '';
let action_btn = document.querySelectorAll('button[data-target]');
let list_scenes = document.querySelectorAll('.scene');
let nameBtn = document.querySelector('#nameBtn');
nameBtn.addEventListener('click', function () {
  player_name = document.querySelector('#name_field').value;
  let player_field = document.querySelectorAll('.playername');
  player_field.forEach(function (name) {
    name.innerHTML = player_name;
  });
});
action_btn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    epic_song.play()
    let nextScenes = btn.getAttribute('data-target');
    list_scenes.forEach(function (scene) {
      scene.classList.remove('active');
    });
    document.querySelector('#' + nextScenes).classList.add('active');
  });
});


let typed2 = new Typed('.typedtext', {
  strings: [
    'Дороги назад <b>Н Е М А Є</b>...',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  fadeOut: true,
  loop: true,
});
let cheat = document.querySelector('.cheat');
cheat.addEventListener('click',function(){
  let timerInterval;
  Swal.fire({
    title: 'Триває партія!',
    html: 'Партія закінчиться в <b></b> мілісекундах.',
    timer: 10000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector('b');
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('Кінець партії');
    }
  });
})

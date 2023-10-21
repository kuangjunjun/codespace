var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

// console.log(speed);

speed.addEventListener('mousemove', function(e) {
  var y = e.y - speed.offsetTop
  var percent = y / speed.offsetHeight
  var height = Math.round(percent * 100) + '%'

  bar.style.height = height

  var min = 0.4
  var max = 4
  var playbackRate = percent * (max - min) + min
  bar.textContent = playbackRate.toFixed(2) + 'x'

  // 视频播放速度
  video.playbackRate = playbackRate
})
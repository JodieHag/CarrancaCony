const x = setInterval(() => {
  let countDownDate = $('.countdown').data('date')

  countDownDate = new Date(countDownDate).getTime()

  // Get todays date and time
  let now = new Date().getTime()
  // Find the distance between now and the count down date
  let distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  $('.dday').html(days)
  $('.dhour').html(hours)
  $('.dmin').html(minutes)
  $('.dsec').html(seconds)

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementsByClassName('.countdown').innerHTML = '¡POR FÍN!'
  }
}, 1000)

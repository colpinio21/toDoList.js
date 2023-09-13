const departMinutes = 5
let temps = departMinutes * 60

setInterval(() => {
  const minutes = Math.floor(temps / 60)
  let secondes = temps % 60

  secondes = secondes < 10 ? "0" + secondes : secondes

  console.log(`${minutes}:${secondes}`)
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
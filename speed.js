const prompt = require('prompt-sync')({ sigint: true })

const speedDector= (speed) => {
  const speedLimit = 70
  const maxPoints = 12
  const pointsForEvery5Km = 5
  

  if (speed < speedLimit) {
    console.log('Ok')
  } else {
    const points = Math.floor((speed - speedLimit) / pointsForEvery5Km)
    if (points > maxPoints) {
      console.log(`Points: ${points} - License suspended`)
    } else {
      console.log(`Points: ${points}`)
    }
  }
}

const speed = parseInt(prompt('Enter the speed : '))

speedDector(speed)
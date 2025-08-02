class game {
    constructor(title, pp1, pp2, winner) {
        this.title = title
        this.pp1 = pp1
        this.pp2 = pp2
        this.winner = winner
    }
}
let history = []

// tutorial
console.log('After seeing stars, press space as fast as you can')  


function ready() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Let's go")
      resolve()
    }, 3000)
})
}

function action() {
  return new Promise((resolve, reject) => {
    let delay = (Math.random() + 1) * 2
    setTimeout(() => {
      console.log("******")
      resolve(Date.now())
    }, delay * 1000)
  })
}

function key_press(startTime) {
  return new Promise((resolve, reject) => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (key) {
      if (key === ' ') {
        if (startTime) {
          const reactionTime = (Date.now() - startTime) / 1000;
          console.log(`your time:`, reactionTime.toFixed(3));
          
          // process.stdin.removeListener('data', onKeyPress);
          process.stdin.setRawMode(false);
          process.stdin.pause();
          
          resolve()
        }
      }
    })
    
  })
}


function zoj_fard(trail) {
  if (trail % 2 == 0) {
    return "player two, it's your turn"
  }
  else {
    return "player one, it's your turn"
  }
}

async function run(trail) { 
  try {
    console.log(zoj_fard(trail))
    await ready()
    let startTime = await action()
    await key_press(startTime)
    console.log(`end`)
    return run(trail + 1)
  }
  catch {
    console.log('error catched')
  }
  
}

let trail = 0
run()

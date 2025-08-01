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
    resolve()
  }, delay)
})
}

function key_press() {
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (key) {
    if (key === ' ') {
      console.log('space detected');
      process.exit()
    }
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

async function run() {
  console.log(zoj_fard(trail))
  try {
    await ready()
    await action()
    let ct = 0
    while(1) {
        key_press()
    }
  }
  catch {
    console.log('error catched')
  }
}

let trail = 0
while(1) {
trail += 1
run()
}

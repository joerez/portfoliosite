function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}      
const canvas = document.querySelector('canvas')

const canvasPos = getPosition(canvas);


const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight 

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = [
  '#00bdff',
  '#4d39ce',
  '#088eff'
]

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX - canvasPos.x;
    mouse.y = event.clientY - canvasPos.y;
})


addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(40, 90)
    this.lastMouse = {x: x, y: y}

    this.update = function() {
      const lastPoint = {x: this.x, y: this.y}
      //move points overtime
      this.radians += this.velocity

      //drag effect
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

      //circular motion
      this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint)
    }

    this.draw = lastPoint => {
        c.beginPath()
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
    }

}


// Implementation
let particles
function init() {
    particles = []

    for (let i = 0; i < 150; i++) {
        const radius = (Math.random() * 2) + 1;
        particles.push(new Particle(canvas.width /2, canvas.height /2, radius, randomColor(colors)));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(255, 255, 255, 0.05)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
     particle.update();
    });
}

init()
animate()

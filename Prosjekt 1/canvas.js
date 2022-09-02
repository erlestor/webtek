let xOffset = 0
let direction = 1
const speed = 0.55

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const sun = {
  x: 450,
  y: 50,
  radius: 40,
  rr: 40 * 40,
  hover: false,
}

function init() {
  window.requestAnimationFrame(draw)
}

const update = () => {
  if (xOffset >= 200) direction = -1
  if (xOffset <= 0) direction = 1
  xOffset += 1 * direction * speed
}

function checkSunHover(e) {
  // muse-koordinatan når musa e øverst te venstre på canvas
  const canvasCoordinates = canvas.getBoundingClientRect()
  const canvasX = canvasCoordinates.left
  const canvasY = canvasCoordinates.top
  // offset så vi får posisjonen innen canvaset
  mouseX = parseInt(e.clientX - canvasX)
  mouseY = parseInt(e.clientY - canvasY)
  // avstanden mellom musekoordinata og sola sitt senter
  var dx = mouseX - sun.x
  var dy = mouseY - sun.y

  // sjekke om musa e inni sola
  if (dx * dx + dy * dy < sun.rr) {
    if (!sun.hover) sun.hover = true
    return
  }
  if (sun.hover) sun.hover = false
}

function draw() {
  ctx.clearRect(0, 0, 800, 400) // clear canvas

  update()

  // tegn svart firkant
  ctx.fillStyle = "black"
  ctx.fillRect(0 + xOffset, 230, 280, 100)

  // venstre hjul
  ctx.beginPath()
  ctx.arc(40 + xOffset, 360, 40, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = "red"
  ctx.fill()
  // høyre hjul
  ctx.beginPath()
  ctx.arc(240 + xOffset, 360, 40, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = "red"
  ctx.fill()
  // sola
  ctx.beginPath()
  ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI)
  ctx.fillStyle = sun.hover ? "black" : "yellow"
  ctx.fill()

  window.requestAnimationFrame(draw)
}

init()

// sjekke om musa e over sola hver gang musa flytte sæ innen canvas elementet
$("#canvas").mousemove(function (e) {
  checkSunHover(e)
})

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1035.29,
  debug: true

r.rect(300, 400, 200, 785.29)
  .fill(false)
  .stroke(0)
  .strokeWidth(1)
  .rotate(45,100,100,true)

r.triangle(300, 400, 400, 260, 500, 400)
  .fill(0)
  .stroke(0)
  .rotate(225,141.5,-0,true)
  .strokeWidth(1)

r.ellipse(390,390, 200, 200)
  .fill(255)
  .stroke(0)
  .strokeWidth(1)

r.draw();
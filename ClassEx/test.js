// function incrament(myNumber){
// 	return myNumber + 1;
// }

// console.log( incrament("joe") );
//prototypical inheridence


var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1035.29,
  debug: true
});

var path = r.path(200, 200)
  .lineTo(300, 0)
  .lineTo(300, 300)
  .lineTo(0, 300)
  .closePath()
  .fill(false)
  .stroke(255);
  // .strokeWidth(1);

var polys = path.toPolygons({ spacing:20});

for(var i = 0; i < polys.length; i++) {

  var poly = polys[i]
  poly.stroke(0)
  poly.strokeWidth(0.5)
  poly.move(0,150,true);
  // poly.move(0, 0, true);

  for(var j = 0; j < poly.vars.vectors.length; j++) {
    var vec = poly.vars.vectors[j];
    vec.x += Rune.random(-100, 100);
    vec.y += Rune.random(-100, 100);
    r.circle(poly.vars.x + vec.x, poly.vars.y + vec.y, 2, 2)
    .fill(255);
  }

}
r.draw();

var cols, rows;
var w = 20;
var grid = [];
var ant;


function setup() {

  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(1000);
  for (var i = 0; i < cols; i++) {
    grid[i] = [];
    for (var j = 0; j < cols; j++) {
      grid[i].push(new Cell(i, j));
    }
  }
  ant = grid[cols/2][rows/2];
}

function draw() {

  for (var i = 0; i < grid.length; i++) {
    for(var ii = 0; ii<grid[i].length; ii++){
    grid[i][ii].show();
    ant.resaltar();
  }}
  ant.live = !ant.live
  next = ant.next();
  a = next.a;
  ant = next;
  ant.a = a;
}




function index(i, j, a) {

  if(a>=4){
    a = 0;
  }
  if(a<=-1){
    a=3;
  }
  switch (a) {
    case 0:
    if(j-1 < 0){
      return [i, rows-1,a];
    }else{
      return [i, j-1,a];}
      break;
    case 1:
    if(i-1<0){
      return [cols-1, j, a];
    }else{
    return [(i-1) , (j),a];}
    break;
    case 2:
    if(j+1>=rows){
      return [i ,(0),a];
    }else{
    return [i ,(j+1),a];}
    break;
    case 3:
    if(i+1>=cols){
      return [(0) , (j),a];
    }else{
    return [(i+1) , (j),a];}
    break;
}
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.live = false;
  this.a = 0;


  this.show = function() {
    if(!this.live)
    fill(51);
    else
      fill(255);
    noStroke();
    rect(this.x, this.y, w, w)
  }


  this.next = function(a){
    if(!this.live){
      this.a -=1;
    }else{
    this.a+=1;
    }
    var arr=index(this.i, this.j,this.a)
      var next = grid[arr[0]][arr[1]];
      next.a = arr[2];
    return next;
  }
  this.resaltar = function(){
    noStroke();
    fill("red");
    rect(this.x, this.y, w, w);
  }

}

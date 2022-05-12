class Tora{
 constructor(diametro, comprimento, serra, ncortes){
   
   //this.dados = [diametro, comprimento,serra]
   this.d = diametro;
   this.r = this.d/2;
   this.c = comprimento;
   this.volume = 1;
   this.are_base = 1;
   this.serra = serra;
   this.n = ncortes-2;
  this.recalcular();
 }
 recalcular(){
    let w = 400;
    //this.d = 1;
    //this.c = this.dados[1]/w;
    //this.serra = this.dados[2]/w;
    this.are_base = Math.PI*this.d*this.d/4;
    this.volume = this.are_base * this.c;
    this.largura_ripa = this.r*sqrt(2);
    this.espessura_ripa = this.largura_ripa/(this.n+1)-this.serra;
    this.volume_ripa = (this.n+1)*this.largura_ripa*this.espessura_ripa*this.c;
    let f= (x)=>{console.log(this.r*this.r-x*x,this.r*this.r,x*x,sqrt(this.r*this.r-x*x));return 0.5*(x*sqrt(this.r*this.r-x*x)+this.r*this.r*atan2(x,sqrt(this.r*this.r-x*x)));};  
    let b = this.r*sqrt(2)/2+this.serra;
    console.log(this.r,b);
    let area = f(this.r) - f(b);
    
    this.volume_casca = 8*area*this.c; 
    
    this.volume_lixo = this.volume - this.volume_ripa - this.volume_casca;
    
 }

 
 draw(){
   push();
   let w = 400;
   let r = w/4;
   let convercao = (2*r/this.d);
   let s = this.serra*convercao;
   //console.log(s,this.serra,r,this.d);
   //translate(w*0.01,w*0.01);
   circle(r,r,2*r);
   push();
   fill(0);
   //stroke(s);
   
   rect(r-cos(PI/4)*r-s,r-sin(PI/4)*r,s,r*sqrt(2));
   rect(r+cos(PI/4)*r,r-sin(PI/4)*r,s,r*sqrt(2));
   rect(r-cos(PI/4)*r,r-sin(PI/4)*r-s,r*sqrt(2),s);
   rect(r-cos(PI/4)*r,r+sin(PI/4)*r,r*sqrt(2),s);
   //rect(x+cos(PI/4)*r+s,y-sin(PI/4)*r,s,r*sqrt(2));
   pop();
   //this.setText("output",`s = ${s} ms = ${this.serra}, d=${this.d}, w = ${w} r=${r}`);
   translate(w*0.03,0);
   rect(2*r,r/2*(2-sqrt(2)),w,r*sqrt(2));
   push();
   fill(0);
   for(let i=1;i<=this.n;i++){
      rect(2*r,r/2*(2-sqrt(2))+i*(this.espessura_ripa+this.serra)*convercao,w,-s);
   }
   pop();
   pop();
   //noLoop();
 }
 setText(id,msg){
   let x = document.getElementById(id);
   x.innerHTML  = msg;
 }
}

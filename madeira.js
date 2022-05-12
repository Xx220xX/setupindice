var v;
function setup() {
  createCanvas(700, 210);
  createHTML();
  v =  new Tora(0.14,2.4,0.003,5);
 //frameRate(60);
}


function draw() {
  background(200);
  translate(25,5);
  v.draw();
  //noLoop();
}
function createHTML(){
    let canvas = document.getElementById('defaultCanvas0');
    let section = document.getElementById('info');
    //canvas.getAttribute("style");
    //canvas.setAttribute();
    let body  = document.getElementsByTagName('body')[0];
    
    body.setAttribute('style','display:flex;flex-direction:column;')
    canvas.setAttribute('style',canvas.getAttribute("style")+'order:1;');
  //  section.setAttribute('style','');
  
}
function  setText(id,msg){
   let x = document.getElementById(id);
   x.textContent  = msg;
}

function calculate(){
  v.d =    parseFloat(document.getElementById('inp_diametro').value)/100.0;
  v.c =    parseFloat(document.getElementById('inp_comprimento').value);
  v.serra =    parseFloat(document.getElementById('inp_serra').value)/1000.0;
  v.n =    parseInt(document.getElementById('inp_cortes').value);
  v.recalcular();
  console.log(v);
  let fmt = (t,d=1000.0,e=3)=>{return (t/d).toFixed(e);}
  setText('out_ntabuas',"Número de tabuas: "+(v.n+1));
  setText('out_dimensao',"Dimensão da tabua (mmxmmxmm): "+
  fmt(v.largura_ripa,d=1e-3)+
  "x"+fmt(v.espessura_ripa,d=1e-3)+
  "x"+fmt(v.c,d=1e-3,e=2));
  
  setText('out_vtabuas',"Volume de tabuas m³: "+fmt(v.volume_ripa,1));
  setText('out_vdesperdicio',"Volume de desperdiçado no corte m³: "+fmt(v.volume_lixo,1));
  setText('out_vcasca',"Volume de cascas m³: "+fmt(v.volume_casca,1));
  setText('out_vbruto',"Volume Bruto m³: "+fmt(v.volume,1,3));
 
  setText('out_ntabuas',"Número de tabuas: "+(v.n+1));

  //loop();
  
}

function setup() {
  let b;
  b = createButton("on");
  b.mousePressed(()=>{ localStorage.aaa = 'aaa'; });
  b.position(0,0)
  b = createButton("off");
  b.mousePressed(()=>{ localStorage.aaa = 'bbb'; });
  b.position(30,0)
}
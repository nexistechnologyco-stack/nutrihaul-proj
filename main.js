gsap.registerPlugin(ScrollTrigger);const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=s=>document.querySelectorAll(s);
if(rm){$('#ld')[0].remove();gsap.set('.lbl',{opacity:1})}else{
if(window.Lenis){const L=new Lenis();L.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>L.raf(t*1000));gsap.ticker.lagSmoothing(0)}
gsap.to('#pg',{scaleX:1,ease:'none',scrollTrigger:{scrub:.2,start:0,end:'max'}});
gsap.timeline().to('#ld',{opacity:0,duration:.7,delay:.5,onComplete:()=>$('#ld')[0].remove()}).from('.hero .ln>span',{yPercent:110,duration:1.1,stagger:.12,ease:'power3.out'},.7).from('.hero .pill,.hero p,.hero .btn,.hero .ul',{opacity:0,y:20,duration:.9,stagger:.1},1).from('.hi',{opacity:0,scale:1.08,duration:2,ease:'power2.out'},.5).from('nav>*',{y:-30,opacity:0,duration:.9,stagger:.1},1);
gsap.to('.hi',{yPercent:8,scale:1.06,ease:'none',scrollTrigger:{trigger:'.hero',scrub:1,start:'top top',end:'bottom top'}});
gsap.from('.ben h2',{y:40,opacity:0,duration:1,scrollTrigger:{trigger:'.ben',start:'top 80%'}});gsap.from('.cd',{y:60,opacity:0,stagger:.12,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.cds',start:'top 85%'}});
gsap.from('.cen h2,.cen p',{y:40,opacity:0,stagger:.1,duration:1,scrollTrigger:{trigger:'.cen',start:'top 80%'}});gsap.from('.pr',{y:80,opacity:0,stagger:.15,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.prods',start:'top 85%'}});
gsap.from('.big,.thm img',{y:50,opacity:0,stagger:.1,duration:1,scrollTrigger:{trigger:'.duo',start:'top 75%'}});
(()=>{const box=document.getElementById('cv');if(!window.THREE||!box)return;const T=THREE;
const R=new T.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));R.toneMapping=T.ACESFilmicToneMapping;R.toneMappingExposure=1.05;R.outputColorSpace=T.SRGBColorSpace;box.appendChild(R.domElement);
const sc=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,60);cam.position.set(0,0,12);
const es=new T.Scene();es.add(new T.Mesh(new T.BoxGeometry(24,24,24),new T.MeshBasicMaterial({color:0x4f6a62,side:T.BackSide})));
[[0,9,2,9,2.5],[-9,0,2,2.5,9],[9,2,-2,2.5,7]].forEach(([x,y,z,w,h])=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(6,6,6.2),side:T.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);es.add(m)});
sc.environment=new T.PMREMGenerator(R).fromScene(es,.03).texture;
function half(r,L,t){const p=[];for(let i=0;i<=20;i++){const a=Math.PI/2*(1-i/20);p.push(new T.Vector2(r*Math.cos(a)+1e-4,L+r*Math.sin(a)))}p.push(new T.Vector2(r,0),new T.Vector2(r-t,0));for(let i=0;i<=20;i++){const a=Math.PI/2*(i/20);p.push(new T.Vector2((r-t)*Math.cos(a)+1e-4,L+(r-t)*Math.sin(a)))}return new T.LatheGeometry(p,96)}
const mat=c=>new T.MeshPhysicalMaterial({color:c,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.35,side:T.DoubleSide,transparent:true});
const g=half(.55,.95,.035),top=new T.Mesh(g,mat(0xC77C61)),bot=new T.Mesh(g,mat(0xF4F0E6));bot.rotation.x=Math.PI;
const grp=new T.Group();grp.add(top,bot);sc.add(grp);
const N=4200,pos=new Float32Array(N*3),dir=new Float32Array(N*3),sd=new Float32Array(N),cl=new Float32Array(N*3),pal=[0xF4F0E6,0xD7DDBB,0xA8B9A7,0xE9C9A8].map(h=>new T.Color(h));
for(let i=0;i<N;i++){const th=Math.random()*6.283,rr=.44*Math.sqrt(Math.random()),y=(Math.random()-.5)*.5+Math.pow(Math.random(),2)*.35;pos.set([rr*Math.cos(th),y,rr*Math.sin(th)],i*3);const d=new T.Vector3(Math.random()-.5,Math.random()*.7-.1,Math.random()-.5).normalize();dir.set([d.x,d.y,d.z],i*3);sd[i]=Math.random();const c=pal[i%4];cl.set([c.r,c.g,c.b],i*3)}
const pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pos,3));pg.setAttribute('aDir',new T.BufferAttribute(dir,3));pg.setAttribute('aS',new T.BufferAttribute(sd,1));pg.setAttribute('aC',new T.BufferAttribute(cl,3));
const pu={uB:{value:0},uT:{value:0},uP:{value:R.getPixelRatio()}};
const pts=new T.Points(pg,new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:pu,vertexShader:`attribute vec3 aDir;attribute float aS;attribute vec3 aC;uniform float uB,uT,uP;varying vec3 vC;varying float vA;void main(){vec3 p=position+aDir*uB*(.8+aS*3.2);p.y+=uB*(.4+aS*1.8);p.x+=sin(uT*.5+aS*30.)*.09*uB;p.z+=cos(uT*.4+aS*22.)*.09*uB;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=(1.5+aS*3.4)*uP*(11./-mv.z);vC=aC;vA=1.-smoothstep(.7,1.,uB)*.5;}`,fragmentShader:`varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vC,smoothstep(.5,.1,d)*vA);}`}));grp.add(pts);
const S={sc:.65,sep:0,burst:0,fade:0,ry:-.9,rz:-.5};let vis=true,t0=performance.now();
function size(){const w=box.clientWidth,h=box.clientHeight;if(!w||!h)return;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}new ResizeObserver(size).observe(box);size();
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(box);
function draw(){requestAnimationFrame(draw);if(!vis)return;const t=(performance.now()-t0)/1000;grp.rotation.set(.12,S.ry+Math.sin(t*.4)*.12,S.rz);grp.scale.setScalar(S.sc);top.position.y=S.sep*1.25;bot.position.y=-S.sep*1.25;top.rotation.z=S.sep*.1;bot.rotation.z=-S.sep*.08;top.material.opacity=bot.material.opacity=1-S.fade;pu.uB.value=S.burst;pu.uT.value=t;R.render(sc,cam)}draw();
const tl=gsap.timeline({paused:true});
tl.to(S,{sc:1,ry:.3,rz:-.38,duration:1.8,ease:'power3.out'}).to(S,{sep:1,duration:1.5,ease:'power3.inOut'},'+=.2').to(S,{burst:1,duration:3.2,ease:'power2.out'},'<.5').to(S,{fade:1,sep:1.8,duration:1.8,ease:'power1.inOut'},'<.5')
.to('.lbl',{opacity:1,stagger:.3,duration:.9},'-=1.8').to('.fx',{opacity:1,y:0,stagger:.2,duration:1},'<');
if(rm){tl.progress(1)}else{ScrollTrigger.create({trigger:'#tech',start:'top 45%',once:true,onEnter:()=>tl.play()});document.getElementById('rp').onclick=()=>{gsap.set('.lbl,.fx',{opacity:0});tl.restart()}}})();
gsap.timeline({scrollTrigger:{trigger:'#scan',start:'top 70%'}}).from('#z',{scale:.85,opacity:0,duration:.8}).to('#z',{scale:2.6,duration:1.3,ease:'power2.inOut'}).to('#fr',{opacity:1,duration:.3}).fromTo('#bar',{top:'60%',opacity:1},{top:'92%',duration:1.1,yoyo:true,repeat:1,ease:'sine.inOut'}).to('#bar',{opacity:0,duration:.2}).to('#rep',{y:0,duration:.9,ease:'power3.out'})}
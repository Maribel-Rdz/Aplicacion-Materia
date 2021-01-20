function calcular()
{
ux=parseFloat(document.vect[0].value);
uy=parseFloat(document.vect[1].value);
uz=parseFloat(document.vect[2].value);
vx=parseFloat(document.vect[3].value);
vy=parseFloat(document.vect[4].value);
vz=parseFloat(document.vect[5].value);

uv=ux*vx+uy*vy+uz*vz;
document.vect.uv.value=uv;

uvx= uy*vz-uz*vy; 
uvy=-ux*vz+uz*vx; 
uvz= ux*vy-uy*vx;
document.vect.uvx.value=uvx; 
document.vect.uvy.value=uvy; 
document.vect.uvz.value=uvz;

mu=Math.sqrt(ux*ux+uy*uy+uz*uz);
fs=Math.floor(mu*100)/100;
document.vect.fs.value=fs.toFixed(2);

mv=Math.sqrt(vx*vx+vy*vy+vz*vz);
fs1=Math.floor(mv*100)/100;
document.vect.fs1.value=fs1.toFixed(2);

uxv=Math.sqrt(uvx*uvx+uvy*uvy+uvz*uvz);
fs2=Math.floor(uxv*100)/100;
document.vect.fs2.value=fs2.toFixed(2);

tr=Math.acos(uv/(mu*mv))*180/Math.PI;
fs3=Math.floor(tr*100)/100;
document.vect.fs3.value=fs3.toFixed(2);

tr1=Math.asin(uxv/(mu*mv))*180/Math.PI;
fs4=Math.floor(tr1*100)/100;
document.vect.fs4.value=fs4.toFixed(2);
}
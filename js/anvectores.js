
function calcular()
{
ux=parseFloat(document.vect[0].value);
uy=parseFloat(document.vect[1].value);
uz=parseFloat(document.vect[2].value);
vx=parseFloat(document.vect[3].value);
vy=parseFloat(document.vect[4].value);
vz=parseFloat(document.vect[5].value);
wx=parseFloat(document.vect[6].value);
wy=parseFloat(document.vect[7].value);
wz=parseFloat(document.vect[8].value);

mu=Math.sqrt(ux*ux+uy*uy+uz*uz);
pq=Math.floor(mu*100)/100;
mv=Math.sqrt(vx*vx+vy*vy+vz*vz);
pq1=Math.floor(mv*100)/100;
mw=Math.sqrt(wx*wx+wy*wy+wz*wz);
pq2=Math.floor(mw*100)/100;
document.vect.pq.value= pq.toFixed(2);
document.vect.pq1.value= pq1.toFixed(2);
document.vect.pq2.value= pq2.toFixed(2);

vu=ux/mu;
pq3=Math.floor(vu*100)/100;
document.vect.pq3.value=pq3.toFixed(2);
vu1=uy/mu;
pq4=Math.floor(vu1*100)/100;
document.vect.pq4.value=pq4.toFixed(2);
vu2=uz/mu;
pq5=Math.floor(vu2*100)/100;
document.vect.pq5.value=pq5.toFixed(2);
vv=vx/mv;
pq6=Math.floor(vv*100)/100;
document.vect.pq6.value=pq6.toFixed(2);
vv1=vy/mv;
pq7=Math.floor(vv1*100)/100;
document.vect.pq7.value=pq7.toFixed(2);
vv2=vz/mv;
pq8=Math.floor(vv2*100)/100;
document.vect.pq8.value=pq8.toFixed(2)
vw=wx/mw;
pq9=Math.floor(vw*100)/100;
document.vect.pq9.value=pq9.toFixed(2);
vw1=wy/mw;
pq10=Math.floor(vw1*100)/100;
document.vect.pq10.value=pq10.toFixed(2);
vw2=wz/mw;
pq11=Math.floor(vw2*100)/100;
document.vect.pq11.value=pq11.toFixed(2);

diruv=(vx-ux);
diruv1=(vy-uy);
diruv2=(vz-uz);
dirvw=(wx-vx);
dirvw1=(wy-vy);
dirvw2=(wz-vz);
dirwu=(ux-wx);
dirwu1=(uy-wy);
dirwu2=(uz-wz);
document.vect.diruv.value= diruv;
document.vect.diruv1.value= diruv1;
document.vect.diruv2.value= diruv2;
document.vect.dirvw.value= dirvw;
document.vect.dirvw1.value= dirvw1;
document.vect.dirvw2.value= dirvw2;
document.vect.dirwu.value= dirwu;
document.vect.dirwu1.value= dirwu1;
document.vect.dirwu2.value= dirwu2;

dirvu=(ux-vx);
dirvu1=(uy-vy);
dirvu2=(uz-vz);
dirwv=(vx-wx);
dirwv1=(vy-wy);
dirwv2=(vz-wz);
diruw=(wx-ux);
diruw1=(wy-uy);
diruw2=(wz-uz);
document.vect.dirvu.value= dirvu;
document.vect.dirvu1.value= dirvu1;
document.vect.dirvu2.value= dirvu2;
document.vect.dirwv.value= dirwv;
document.vect.dirwv1.value= dirwv1;
document.vect.dirwv2.value= dirwv2;
document.vect.diruw.value= diruw;
document.vect.diruw1.value= diruw1;
document.vect.diruw2.value= diruw2;

maguv=Math.sqrt((vx-ux)*(vx-ux)+(vy-uy)*(vy-uy)+(vz-uz)*(vz-uz));
magvw=Math.sqrt((wx-vx)*(wx-vx)+(wy-vy)*(wy-vy)+(wz-vz)*(wz-vz));
magwu=Math.sqrt((ux-wx)*(ux-wx)+(uy-wy)*(uy-wy)+(uz-wz)*(uz-wz));
pq12=Math.floor(maguv*100)/100;
document.vect.pq12.value=pq12.toFixed(2);
pq13=Math.floor(magvw*100)/100;
document.vect.pq13.value=pq13.toFixed(2);
pq14=Math.floor(magwu*100)/100;
document.vect.pq14.value=pq14.toFixed(2);


uniuv=(diruv/pq12);
pq15=Math.floor(uniuv*100)/100;
document.vect.pq15.value=pq15.toFixed(2);
uniuv1=(diruv1/pq12);
pq16=Math.floor(uniuv1*100)/100;
document.vect.pq16.value=pq16.toFixed(2);
uniuv2=(diruv2/pq12);
pq17=Math.floor(uniuv2*100)/100;
document.vect.pq17.value=pq17.toFixed(2);
univw=(dirvw/pq13);
pq18=Math.floor(univw*100)/100;
document.vect.pq18.value=pq18.toFixed(2);
univw1=(dirvw1/pq13);
pq19=Math.floor(univw1*100)/100;
document.vect.pq19.value=pq19.toFixed(2);
univw2=(dirvw2/pq13);
pq20=Math.floor(univw2*100)/100;
document.vect.pq20.value=pq20.toFixed(2);
uniwu=(dirwu/pq14);
pq21=Math.floor(uniwu*100)/100;
document.vect.pq21.value=pq21.toFixed(2);
uniwu1=(dirwu1/pq14);
pq22=Math.floor(uniwu1*100)/100;
document.vect.pq22.value=pq22.toFixed(2);
uniwu2=(dirwu2/pq14);
pq23=Math.floor(uniwu2*100)/100;
document.vect.pq23.value=pq23.toFixed(2);


}
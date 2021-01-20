function calcular()
{
ux=parseFloat(document.vect[0].value);
uy=parseFloat(document.vect[1].value);
uz=parseFloat(document.vect[2].value);

rw=Math.sqrt(ux*ux+uy*uy);
lu=Math.floor(rw*100)/100;
document.vect.lu.value= lu.toFixed(2);

rw1=Math.atan(uy/ux)*180/Math.PI;
lu1=Math.floor(rw1*100)/100;
document.vect.lu1.value= lu1.toFixed(2);

rw2=uz;
lu2=Math.floor(rw2*100)/100;
document.vect.lu2.value= lu2.toFixed(2);

rw3=Math.cos(lu1*Math.PI/180);
rw4=(rw3*lu);
lu3=Math.floor(rw4*100)/100;
document.vect.lu3.value=lu3.toFixed(2);

rw5=Math.sin(lu1*Math.PI/180);
rw6=(rw5*lu);
lu4=Math.floor(rw6*100)/100;
document.vect.lu4.value=lu4.toFixed(2);

rw7=uz;
lu5=Math.floor(rw7*100)/100;
document.vect.lu5.value=lu5.toFixed(2);

rw8=Math.sqrt(ux*ux+uy*uy+uz*uz);
lu6=Math.floor(rw8*100)/100;
document.vect.lu6.value= lu6.toFixed(2);

rw9=Math.acos(uz/(lu6))*180/Math.PI;
lu7=Math.floor(rw9*100)/100;
document.vect.lu7.value=lu7.toFixed(2);

rw10=Math.atan(uy/ux)*180/Math.PI;
lu8=Math.floor(rw10*100)/100;
document.vect.lu8.value=lu8.toFixed(2);

rw11=Math.sin(lu7*Math.PI/180)*Math.cos(lu8*Math.PI/180);
rw12=lu6*rw11;
lu9=Math.floor(rw12*100)/100;
document.vect.lu9.value=lu9.toFixed(2);

rw13=Math.sin(lu7*Math.PI/180)*Math.sin(lu8*Math.PI/180);
rw14=rw13*lu6;
lu10=Math.floor(rw14*100)/100;
document.vect.lu10.value=lu10.toFixed(2);

rw15=Math.cos(lu7*Math.PI/180)*lu6;
lu11=Math.floor(rw15*100)/100;
document.vect.lu11.value=lu11.toFixed(2);
}
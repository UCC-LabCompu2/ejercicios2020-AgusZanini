/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades Metros, Yardas, Pies y Pulgadas.
 * @method conversor unidades
 * @param {string} id - id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de yardas, metros, pies o pulgadas
 * @return
 */

/*function conversorunidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else if(id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    } else if(id=='pulgada'){
        document.lasunidades.unid_metro.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.0833333*valor;
        document.lasunidades.unid_yarda.value = 0.0277778*valor;
    } else if(id=='pie'){
        document.lasunidades.unid_metro.value = 0.3048*valor;
        document.lasunidades.unid_pulgada.value = 12*valor;
        document.lasunidades.unid_yarda.value = 0.333333*valor;
    } else if(id=='yarda'){
        document.lasunidades.unid_metro.value = 0.3048*valor;
        document.lasunidades.unid_pulgada.value = 12*valor;
        document.lasunidades.unid_yarda.value = 0.333333*valor;
    }

}*/

function conversorunidades(id, valor){
    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    } else if(id=='pulgada'){
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
        pulgada = valor;
    } else if(id=='pie'){
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
        pie = valor;
    } else if(id=='yarda'){
        metro = 0.3048*valor;
        pulgada = 12*valor;
        pie = 3*valor;
        yarda = valor;
    }
    document.lasunidades.unid_metro.value = math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById( "grados").value;
        rad = (grad*math.PI)/180;
    }else if (id=="radianes"){
        rad = document.getElementById( "radianes").value;
        grad = (rad*180)/math.PI
    }
    document.getElementById( "grados").value = grad;
    document.getElementById( "radianes").value = rad;
}

function mostrarocultar(valormo){
if(valormo=="val_mostrar"){
    document.getElementById("divmo").style.display = 'block';
}else if(valormo=="val_ocultar"){
    document.getElementById("divmo").style.display = 'none';
}
}

function calcularsuma(){
var num1, num2;

num1=Number(document.getElementsByName("sum_num1")[0].value);
num2=Number(document.getElementsByName("sum_num2")[0].value);
document.getElementsByName("sum_total")[0].innerHTML=num1 + num2;
}

function calcularresta(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML=num1 - num2;
}

function calcularmult(){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML=num1 * num2;

}

function calculardivi(){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML=num1 / num2;
}

function cargarweb(){
    var cant, unidad, urlcom;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    url = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarresult(){
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    can = urlComp.split("#")[2];
    document.getElementById("dist").value= can + " " + un;
}

function dibujarcircuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var yMax= canvas.height;
    var margen=5;
    var xMax=canvas.width;
    ctx.fillStyle = "#ef0a0a";
    ctx.fillRect(0+margen,yMax-40-margen, 40, 40);

    ctx.arc(xMax/2,yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#04eee5"
    ctx.fill();
}
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {
        bandera = true;
    }
    canvas.onmouseup = function () {
        bandera = false;
    }

    if (bandera == true) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;

    }
}


    function limpiarcanvas() {
        var canvas = document.getElementById("canvasadibujar");
        var ctx = canvas.getContext("2d");

        canvas.width = canvas.width;
    }

    function dibujarcuadriculado(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        var alturamax = canvas.height;
        var anchomax = canvas.height;

        ctx.beginPath();
        for(var i=0;i<alturamax;) {
            ctx.moveTo(0, i);
            ctx.lineTo(anchomax, i);
            ctx.strokeStyle = "#680b23";
            ctx.stroke();
            i = i+20;
        }
        ctx.closePath();
        ctx.beginPath();
        for(var i=0;i<anchomax;) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, alturamax);
            ctx.strokeStyle = "#680b23";
            ctx.stroke();
            i = i+20;
        }
        ctx.closePath();

        ctx.beginPath();
            ctx.moveTo(0, alturamax/2);
            ctx.lineTo(anchomax, alturamax/2);
            ctx.strokeStyle = "#0022ff";
            ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(anchomax/2, 0);
        ctx.lineTo(anchomax/2, alturamax);
        ctx.strokeStyle = "#0327fd";
        ctx.stroke();
        ctx.closePath();
    }

    /*function dibujarimagen(posX, posY){
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");

        console.log(posX, posY);
        var img = new Image();
        img.src = "images/auto.png";

        canvas.width=canvas.width;

        img.onload=function()
        {
            ctx.drawImage(img, posX, posY);
        }
}*/

function dibujarimagen(px, py) {
    var canvas=document.getElementById("myCanvas");
    var contex=canvas.getContext("2d");
    console.log(px,py);
    var  img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;
    img.onload=function() {
        contex.drawImage(img,px, py);
    }
}
x=0;
dx=2;
function animarauto() {
    var canvas=document.getElementById("myCanvas");
    var contex=canvas.getContext("2d");
    canvas.width=canvas.width;
    var  img=new Image();
    img.src="images/auto.png";
    img.onload=function() {
        contex.drawImage(img,x, 100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;

}
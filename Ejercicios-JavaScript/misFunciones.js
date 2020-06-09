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

function conversorunidades(id, valor){
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
document.getElementsByName("sum_total")[0].value=num1 + num2;
}

function calcularresta(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value=num1 - num2;
}

function calcularmult(){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value=num1 * num2;

}

function calculardivi(){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value=num1 / num2;
}
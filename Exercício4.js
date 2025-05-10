// let a =  parseFloat(prompt("Digite o valor de a:"));
// let b =  parseFloat(prompt("Digite o valor de b:"));
// let c =  parseFloat(prompt("Digite o valor de c:"));

// let delta = b * b - 4 * a * c;

// if (delta <= 0 ) {
//     alert("A equação não possui uma raiz real. Tente novamente!!!");
// }
// else{
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);

//     x1 = x1.toFixed(2);
//     x2 = x2.toFixed(2);

//     alert("As raízes da equação são: " + x1 + " e " + x2);

// }

// let B = parseFloat(prompt("Digite um valor para base maior: "));
// let b = parseFloat(prompt("Digite um valor para base menor: "));
// let h = parseFloat(prompt("Digite um valor para altura: "));

// result = (B + b) * h / (2);

// alert("A área do trapézio é de: " + result);

// let pv = parseFloat(prompt("Digite um valor presente: "));
// let r = parseFloat(prompt("Digite a taxa anual: "));
// let n = parseFloat(prompt("Digite um numero para anos: "));

// let fv = pv * Math.pow(1 + (r / 100), n);

// fv = fv.toFixed(2);

// alert ("Seu investimento te rendeu: " + fv);

function enviar(){
let v0 = parseFloat(document.getElementById("vi").value);
let a = parseFloat(document.getElementById("a").value);
let t = parseFloat(document.getElementById("t").value);

let d = v0 * t + 1 / 2 * a * Math.pow(t, 2);

d = d.toFixed(2);

document.getElementById("resultado").innerHTML = "Sua velocidade foi de KM/HR: " + d;
}
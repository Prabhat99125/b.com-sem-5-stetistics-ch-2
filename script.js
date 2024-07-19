const ipt = document.querySelector("#ipt");
const btn = document.querySelector("#btn");
const eGet = document.querySelector(".e");
const table = document.querySelector(".table");
const eValue = document.getElementsByClassName("eValue");
const submit = document.querySelector("#submit");
const fValue = document.getElementsByClassName("f");
const WriteTable = document.querySelector(".WT");

let f = [];
let n = [];
let x = [];
let m = [];
let e = [];
let fx = [];
let px = [];
let np = [];

function creatTable() {
    let input = Number(ipt.value);
    let eHtml = `<label>e : </label><input class="eValue" type="number">`;
    let html = `<table bodar="1"><tr><th>X:</th>`;
    for (a = 0; a <= input; a++) {
        html += `<td><input class="tableData" type="number" value="${a}"></td>`;
    }
    html += `</tr><tr><th>F:</th>`;
    for (a = 0; a <= input; a++) {
        html += `<td><input class="f" type="number"></td>`;
    }
    html += `</tr></table>`;
    eGet.innerHTML = eHtml;
    table.innerHTML = html;
}
function fValuArr() {
    for (a = 0; a <= ipt.value; a++) {
        x.push(a);
        f.push(Number(fValue[a].value));
        fx.push(a * f[a]);
    }
    e.push(Number(eValue[0].value));
}
function addTable () {
    html = `<table border="1"><thead><tr><th>X</th><th>F</th><th>FX</th><th>P(X)</th><th>N.P(X)</th></tr></thead><tbody>`;
    for (a = 0; a <= ipt.value; a++) {
        html += `<tr><td>${a}</td><td>${f[a]}</td><td>${fx[a]}</td><td>${px[a]}</td><td>${px[a] * n}</tr>`;
    }
    html += `</tbody></table>`;
    WriteTable.innerHTML = html;
}
function sumArr(arr) {
    return arr.reduce((A, B) =>  A + B);
}
function fectorial(a) {
    let fect = 1;
    for (x=1; x <= a; x++) {
        fect *= x;
    }
   return fect
}
function poisson() {
    for (a=0; a<=ipt.value; a++) {
        data = e * Math.pow( 1, a ) / fectorial(a);
        px.push(data);  
    }
    return data
}
function npx () {   
    for ( a=0; a<=ipt.value; a++) {
        np.push( sumArr(f) * px[a]);
    }
}
btn.addEventListener(("click"), () => {
    creatTable();
});
submit.addEventListener(("click"), () => {
    fValuArr();
    n = sumArr(f);
    poisson();
    npx();
    addTable();
    m.push(sumArr(fx) / sumArr(f)); 
});
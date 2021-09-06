const e = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/suma', (req, res) => {
  const n1 = +req.query.n;
  const n2 = +req.query.m;
  const suma = n1 + n2;
  res.send(`La Suma es ${suma}`)
})
app.get('/pariedad', (req, res) => {
  const n1 = +req.query.n;
  const resto = n1 % 2;
   if (resto == 0)
    res.send(`El numero es par`)
   else
    res.send('El numero es impar')
})

app.get('/primo', (req, res) => {
  const n = +req.query.n;
  if (n == 1){
    res.send("El numero no es primo");
    return;
  }
  let i = n - 1;
  while (n % i !== 0) {
   i--;
  }
  if (i === 1) {
   res.send("El numero es primo");
  } else {
    res.send("El numero no es primo");
  }
})

app.get('/primo2', (req, res) => {
  const n = +req.query.n;
  if (cantidadDivisores(n) === 2){
    res.send(`El numero ${n} es primo`);
  } else{
    res.send(`El numero ${n} no es primo`);
  }
})

app.get('/primorelativo', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  if (sonPrimosRelativos(n,m)){
    res.send(`Los numeros ${n} y ${m} son primos relativos`);
  } else {
    res.send(`Los numeros ${n} y ${m} no son primos relativos`);
  }
})
app.get('/MCD', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  const MCD = mcd(n,m);
  res.send (`El MCD de los numeros ${n} y ${m} es ${MCD}` )
})

app.get('/MCM', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  const MCD = mcd(n,m);
  const MCM = n * m/ MCD;
  res.send (`El MCM de los numeros ${n} y ${m} es ${MCM}` )
})

app.get('/potencia', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  const x = mayor(n, m);
  const y = menor(n, m);
  var potencia = y;
  while (potencia < x) {
    potencia = potencia * y;
  }
  if (potencia === x){
    res.send (`${x} es potencia de ${y}`)
  }else{
    res.send (`${x} no es potencia de ${y}`)
  }
})

app.get('/MCM1', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  let x = n;
  while (x % m !== 0) {
   x += n;
  }
  res.send (`${x} es el MCM de ${n} y ${m}`)
})

app.get('/potencia1', (req, res) => {
  const n = +req.query.n;
  const m = +req.query.m;
  const x = mayor(n, m);
  const y = menor(n, m);
  if (esPotencia(x, y)){
    res.send (`${x} es potencia de ${y}`)
  }else{
    res.send (`${x} no es potencia de ${y}`)
  }
})

app.get('/divisores', (req, res) => {
  const n = +req.query.n;
  res.json({divisores: divisores(n)})
})

app.get('/divisores1', (req, res) => {
  const n = +req.query.n;
  res.json({divisores: divisores1(n)})
})

app.get('/minimo', (req, res) => {
  const datos = [9, 11, 82, 9, 14];
  res.json({minimo : minimo(datos)});
})

app.get('/posiciondelminimo', (req, res) => {
  const datos = [3, 1, 2, 9, 14];
  res.json({posicionDelMinimo : posicionDelMinimo(datos)});
})

app.get('/segundominimo', (req, res) => {
  const datos = [3, 7, 4, 9, 3];
  res.json({segundoMinimo : segundoMinimo(datos)});
})

app.get('/palindromos', (req, res) => {
  const texto = "12";
  res.json({palindromo : palindromos1(texto)});
})

app.get('/palindromos2', (req, res) => {
  let texto = "44";
  res.json({palindromos2 : palindromos2(texto)});
})

app.get('/maximoProductoDeNumerosConsecutivos', (req, res) => {
  const datos = [3, -5, 4, -2, 5];
  res.json({maximo : maximoProductoDeNumerosConsecutivos(datos)});
})

function palindromos(texto) {
  for (let i = 0; i <= (texto.length - 1) / 2 ; i ++) {
    if (texto[i] !== texto[texto.length - 1 - i]){
      return false;
    }
  }
  return true;
}

function palindromos1(texto) {
  let i = 0;
  while (i < (texto.length - 1) / 2 && texto[i] === texto[texto.length - 1 - i]){
   i++;
  }
  if (i >= (texto.length -1) / 2){
    return true; 
  } else {
    return false;
  }
}
// "abcba"
function palindromos2(texto) {
  if (texto[0] !== texto[texto.length - 1]){
    return false;
  }
 if (texto[0] === texto[texto.length - 1] && texto.length <= 2){
    return true;
  }
  return palindromos2(texto.substring(1, texto.length - 1));
}

function palindromos3(texto) {
  return (texto[0] === texto[texto.length - 1]) ? texto.length <= 2 || palindromos3(texto.substring(1, texto.length - 1)) : false;
}

function minimo(datos) {
  let x = datos[0]
  for (let i = 1; i < datos.length; i++) {
    if (x > datos[i]) {
      x = datos[i];      
    }
   // x = (x < datos[i]) ? x: datos[i]; 
  }
  return x;
}

function posicionDelMinimo(datos){
  let x = datos[0];
  let y = 0;
  for (let i = 1; i < datos.length; i++) {
    if (x > datos[i]){
      x = datos[i];
      y = i;
    }
  }
  return y;
}

function segundoMinimo(datos){
  let y = posicionDelMinimo(datos);
  datos[y] = datos[datos.length - 1];
  datos.pop(); // Removes datos[datos.length -1] from datos;
  return minimo(datos);
}

function mayor(n, m) {
  return (n > m)? n : m;
}

function menor(n, m) {
  return (n < m)? n : m;
}

function esPotencia(n, m) {
  return (n % m === 0) ? n === m || esPotencia(n / m, m): false; 
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function cantidadDivisores(n) {
  return divisores(n).length;
}

function divisores(n) {
  const divisores = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

function sonPrimosRelativos(n,m) {
 let i = (n < m)? n : m;
 let divisor = 0;
 while (n % i !== 0 || m % i !== 0) {
   i--;
 }
 if (i === 1) {
   return true;
 } else {
   return false;
 }
} 

function prueba() {
  const lista = [1, 2, 3];
  for (let i = 0; i <= lista.length; i++) {
    console.log (lista[i]);
  }
}
prueba();

function mcd (n,m) {
  let x = (n < m)? n : m;
  while (n % x !== 0 || m % x !== 0) {
    x--
  }
  return x;
}

function divisores1(n) {
  let divisores = [];
  let i = 1;
  for (; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
     divisores.push(i, n / i);
    }
  }
  if (i * i === n){
    divisores.push(i)
  }
  return divisores;
}
//[3, 5, 4, 20, 5];
function maximoProductoDeNumerosConsecutivos(datos){
  let mayor = datos[0] * datos[1];
  for (let i = 1; i < datos.length - 1; i++){
    const producto =  datos[i] * datos[i + 1];
    if (mayor < producto) {
      mayor = producto
    }
   // x = (x > (datos[i] * datos[i + 1])) ? x: datos[i] * datos[i + 1];
  }
  return mayor;
}
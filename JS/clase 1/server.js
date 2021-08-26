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
  let divisores = [];
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
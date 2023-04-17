const age = 10;// cambiando la edad vemos que funciona

if(age >= 18){
    console.log("Es mayor de edad");
}else {
    console.log("No es mayor de edad");
}


//Se compila o traspila con el comando tsc "nombre del archivo" en este caso index.ts esto creara un archivo .js con todo el codigo
//recordemos que ts es solo un superconjunto para javascript pero al final todo el codigo es pasado a js ya que es el codigo que entiende el navegador 
//podemos porbar nuestros archivos con el comando node index.js 
// creamos un packege.json y creamos un script start con los dos comandos aprendidos tsc index.ts && node index.js 
// nos permite con el script creado ejecurtar ambos comandos 
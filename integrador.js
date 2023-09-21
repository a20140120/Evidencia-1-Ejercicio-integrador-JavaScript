alert("Bienvenidos al chifa Wong King")

dinero=parseInt(prompt("¿Cuanto dinero traes?"))
console.log("trajo: ",dinero)

entrada=parseInt(prompt("Ingrese el valor de la entrada"))
console.log("El valor de la entrada es:",entrada)

segundo=parseInt(prompt("Ingrese el valor de el segundo"))
console.log("El costo del segundo es:",segundo)

postre=parseInt(prompt("Ingrese el valor de el postre"))
console.log("El costo del postre es:",postre)

total=entrada+segundo+postre

igv=total*18/100
console.log("El costo total con igv es:",igv+total)

vuelto=dinero-total
console.log("tu vuelto seria: ",vuelto)
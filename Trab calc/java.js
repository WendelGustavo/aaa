let contador
contador=0
document.getElementById('calcular').onclick=function imc(){
    if(peso.value.length>0 && altura.value.length>0 && nome.value.length>0){
    contador++
    let body
    body=document.getElementById("body")
    let tabela
    tabela=document.getElementById("tabela")
    let tr
    tr=document.createElement("tr")
    let td1
    td1=document.createElement("td")
    let td2
    td2=document.createElement("td")
    let td3
    td3=document.createElement("td")
    let td4
    td4=document.createElement("td")
    let imc
    imc=document.createElement("td")
    let imctext
    let nome
    nome=document.getElementById("nome").value
    let altura
    altura=document.getElementById("altura").value
    let peso
    peso=document.getElementById("peso").value
    tabela.append(tr)
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(imc)
    td1.append(contador+"°")
    td2.append(nome)
    td3.append(peso+" Kg")
    td4.append(altura+" Metros")
    let imccalc 
    imccalc= (peso/(altura*altura))
    if(imccalc <18.5){
        imctext=document.createTextNode("Abaixo do peso")
    }
    else if(imccalc>=18.5 && imccalc<=24.9){
        imctext=document.createTextNode('Normal')
    }
    else if(imccalc>=25 && imccalc<=29.9){
        imctext=document.createTextNode('Sobrepeso')
    }
    else if(imccalc>=30 && imccalc<=34.9){
        imctext=document.createTextNode('Obesidade')
    }
    else if(imccalc>=35 && imccalc<=39.9){
        imctext=document.createTextNode('Obesidade grave')
    }
    else if(imccalc>=40){
        imctext=document.createTextNode('Obesidade morbida')
    }
    imc.append(imctext)
}
}
document.getElementById('limpar').onclick=function(){
    let body2=document.getElementById('tabela')
    body2.innerHTML=""
    contador=0
}

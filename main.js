function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = "";
    if(jugada == 1){
        resultado = "Piedra 🥌"
    } 
    else if(jugada== 2){
        resultado = "Papel 📄" 
    } 
    else if(jugada == 3) {
        resultado = "Tijera ✂"
    } 
    else if(jugada == 4) {
        resultado = "Lagarto 🦎"
    }
    else if(jugada == 5) {
        resultado = "Spock 🖖"
    }
    return resultado
}

//OBTENIENDO LA ELECCIÓN DEL JUGADOR
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos <  3 && perdidas < 3) {
    eleccionDelComputador = aleatorio(1,5)
    eleccionDelJugador = prompt( "1 para piedra, 2 para papel, 3 para tijera, 4 para lagarto y 5 para Spock" ) 
        
    alert("Pc elige " + eleccion(eleccionDelComputador))
    eleccionDelComputador2  = eleccion(eleccionDelComputador)
    alert("Tu Eliges " + eleccion(eleccionDelJugador))
    eleccionDelJugador2 = eleccion(eleccionDelJugador)
    console.log (eleccionDelComputador2, eleccionDelJugador2)

    //DECIDIENDO EL GANADOR
    if (eleccionDelJugador == eleccionDelComputador) {
        alert( "¡EMPATE! 🤼" );
    }
    //Piedra Vs Tijera
    else if ((eleccionDelJugador == 1 && eleccionDelComputador == 3) || (eleccionDelComputador == 1 && eleccionDelJugador == 3)){
        if (eleccionDelComputador == 1 && eleccionDelJugador == 3) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' aplasta ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' aplasta ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //Piedra VS Lagarto
    else if ((eleccionDelJugador == 1 && eleccionDelComputador == 4) || (eleccionDelComputador == 1 && eleccionDelJugador == 4)){
        if (eleccionDelComputador == 1 && eleccionDelJugador == 4) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' aplasta ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' aplasta ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //papel Vs Piedra
    else if ((eleccionDelJugador == 2 && eleccionDelComputador == 1) || (eleccionDelComputador == 2 && eleccionDelJugador == 1)){
        if (eleccionDelComputador == 2 && eleccionDelJugador == 1) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Envuelve ' + eleccionDelComputador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Envuelve ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }
    
    //papel Vs Spock
    else if ((eleccionDelJugador == 2 && eleccionDelComputador == 5) || (eleccionDelComputador == 2 && eleccionDelJugador == 5)){
        if (eleccionDelComputador == 2 && eleccionDelJugador == 5) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Desautoriza ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Desautoriza ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }
    
    //Tijera Vs Papel
    else if ((eleccionDelJugador == 3 && eleccionDelComputador == 2) || (eleccionDelComputador == 3 && eleccionDelJugador == 2)){
        if (eleccionDelComputador == 3 && eleccionDelJugador == 2) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Corta ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Corta ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //Tijera Vs Lagarto
    else if ((eleccionDelJugador == 3 && eleccionDelComputador == 4) || (eleccionDelComputador == 3 && eleccionDelJugador == 4)){
        if (eleccionDelComputador == 3 && eleccionDelJugador == 4) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Decapita ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Decapita ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //Lagarto Vs Papel
    else if ((eleccionDelJugador == 4 && eleccionDelComputador == 2) || (eleccionDelComputador == 4 && eleccionDelJugador == 2)){
        if (eleccionDelComputador == 4 && eleccionDelJugador == 2) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Devora ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Devora ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }
    
    //lagarto Vs Spock
    else if ((eleccionDelJugador == 4 && eleccionDelComputador == 5) || (eleccionDelComputador == 4 && eleccionDelJugador == 5)){
        if (eleccionDelComputador == 4 && eleccionDelJugador == 5) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Envenena ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Envenena ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //Spock Vs Piedra
    else if ((eleccionDelJugador == 5 && eleccionDelComputador == 1) || (eleccionDelComputador == 5 && eleccionDelJugador == 1)){
        if (eleccionDelComputador == 5 && eleccionDelJugador == 1) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Pulveriza ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Pulveriza ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }

    //Spock Vs Tijera
    else if ((eleccionDelJugador == 5 && eleccionDelComputador == 3) || (eleccionDelComputador == 5 && eleccionDelJugador == 3)){
        if (eleccionDelComputador == 5 && eleccionDelJugador == 3) {
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelComputador2 + ' Rompe ' + eleccionDelJugador2);
            alert('Perdiste! :(, jugador: ' +  perdidas + ' computadora ' + triunfos)
            perdidas = perdidas+1;
        }

        else{
            alert(  ' El jugador ha seleccionado: ' + eleccionDelJugador2 + " La computadora eligio: " + eleccionDelComputador2 + eleccionDelJugador2 + ' Rompe ' + eleccionDelComputador2);
            alert('Ganaste! :), jugador: ' +  triunfos + ' computadora ' + perdidas)
            triunfos = triunfos+1;
        }
    }
}

alert("Ganaste " + triunfos + " veces. Y perdiste " + perdidas + " veces.")



let contacto = document.getElementById('contacto');
let bar = document.getElementById('bar');
let notas = document.getElementById('notas');
let bar2 = document.getElementById('bar2');

//VENTANA CONTACTO
if (contacto.className = 'hide') {
    document.getElementById('me').addEventListener('click', () => {
        contacto.className = '';
        if (bar.className = 'right') {
            bar.className = 'hide';
        }
    });
};

document.getElementById('min').addEventListener('click', () => {
    contacto.className = 'hide';
    bar.className = 'right';
    if (bar2.className == 'hide') {
        bar.style = 'grid-column: 8 / 9;'
    } else {
        bar.style = 'grid-column: 7 / 8;'
    }
});

document.getElementById('close').addEventListener('click', () => {
    contacto.className = 'hide';
});

document.getElementById('closed').addEventListener('click', () => {
    contacto.className = 'hide';
    bar.className = 'hide';
});

document.getElementById('rest').addEventListener('click', () => {
    contacto.className = '';
    bar.className = 'hide';
});

contacto.addEventListener('click', () => {
    contacto.style = 'z-index: 2;';
    notas.style = 'z-index: 1;'
});

//VENTANA NOTAS
if (notas.className = 'hide') {
    document.getElementById('notes').addEventListener('click', () => {
        notas.className = '';
        if (bar2.className = 'right') {
            bar2.className = 'hide';
        }
    });
};

document.getElementById('min2').addEventListener('click', () => {
    notas.className = 'hide';
    bar2.className = 'right';
    if (bar.className == 'hide') {
        bar2.style = 'grid-column: 8 / 9;'
    } else {
        bar2.style = 'grid-column: 7 / 8;'
    }
});

document.getElementById('close2').addEventListener('click', () => {
    notas.className = 'hide';
});

document.getElementById('closed2').addEventListener('click', () => {
    notas.className = 'hide';
    bar2.className = 'hide';
});

document.getElementById('rest2').addEventListener('click', () => {
    notas.className = '';
    bar2.className = 'hide';
});


notas.addEventListener('click', () => {
    notas.style = 'z-index: 2;'
    contacto.style = 'z-index: 1;'
});




//COTRATO
let acumulador = ''

document.addEventListener('keyup', (ev) => {
    console.log(acumulador)
    acumulador = acumulador + ev.key
    if (acumulador.includes('patricia') || acumulador.includes('amor')
        || acumulador.includes('te quiero') || acumulador.includes('tequiero')
        || acumulador.includes('nosotros') || acumulador.includes('pringada')
        || acumulador.includes('gianmarco')) {
        console.log('hola')
        document.getElementById('secreto').style = `grid-column: 3 / 7;
                                                    grid-row: 2 / 4;
                                                    background: violet;
                                                    color: white;
                                                    font-family: 'Bitter', serif;
                                                    text-align: center;
                                                    overflow: auto`;
        document.getElementById('secreto').innerHTML = `
            <p><b>Condiciones para ambos</b></p>
            <p><u>1. Ser sinceros:</u></p>
                <p>1.1. Contarnos todo</p>
                <p>1.2. Responder sinceramente, sin ocultar información</p>
            <p><u>2. Darnos amor siempre:</u></p>
                <p>2.1. Mimitos</p>
                <p>2.2. Coito humano</p>
                <p>2.3. Decirnos cosas bonitas</p>
                <p>2.4. Tener detalles</p>
                <p>2.5. Hacernos caricias</p>
                <p>2.6. No perder la ilusión</p>
            <p><u>3. Hacer planes divertidos (no caer en la rutina):</u></p>
                <p>3.1. Hacer viajes</p>
                <p>3.2. Hacer algo nuevo una vez al mes</p>
            <p><u>4. Cuidarnos:</u></p>
                <p>4.1. Preocuparnos el uno por el otro</p>
                <p>4.2. Ponernos en la situación del otro para no herirnos</p>
            <p><u>5. Hacer lo imposible por seguir juntos:</u></p>
                <p>5.1. No dejarnos más de dos veces por semana</p>
                <p>5.2. No dejarnos dejar (va por Patricia)</p>
                <p>5.3. No ser orgullosos</p>
            <p><u>6. Fidelidad máxima:</u></p>
                <p>6.1. No dar pie a terceros a meterse de por medio</p>
                <p>6.2. Ser tajantes con desconocidos</p>
                <p>6.3. No quedar con nadie</p>
                <p>6.4. No hacerse Apps de ligoteo ni similares</p>
            <p><b>Gianmarco pide</b></p>
                <p>7. No cambies nunca, me encanta como eres y como me miras</p>
                <p>8. No me hagas daño</p>
            <p><b>Patricia pide</b></p>
                <p>9. Me sigas tratando igual de bien, porque eres monísimo y adorable</p>
                <p>10. No dejemos de vernos jamás</p>
            <p><u>Anexo 1</u></p>
            <p><b>¡No dejarnos nunca!</b></p>`
        //window.open('pringaos.html');
        acumulador = ''
    } else if (acumulador.includes('adios') || acumulador.includes('hastapronto')
        || acumulador.includes('cerrar') || acumulador.includes('aceptar')) {
        console.log('hola')
        document.getElementById('secreto').style = `display: none`
    }
});
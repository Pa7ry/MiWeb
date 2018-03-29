let contacto = document.getElementById('contacto');
let bar = document.getElementById('bar');

document.getElementById('me').addEventListener('click', () => {
    contacto.className = '';
});

document.getElementById('min').addEventListener('click', () => {
    contacto.className = 'hide';
    bar.className = '';
})

document.getElementById('close').addEventListener('click', () => {
    contacto.className = 'hide';
});

document.getElementById('closed').addEventListener('click', () => {
    contacto.className = 'hide';
    bar.className = 'hide';
})

document.getElementById('rest').addEventListener('click', () => {
    contacto.className = '';
    bar.className = 'hide';
})
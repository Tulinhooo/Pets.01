const btnSobre = document.getElementById('btn-sobre');
const menuVerticalSobre = document.getElementById('menu-vertical-sobre');
const btnServicos = document.getElementById('btn-servicos');
const menuVerticalServicos = document.getElementById('menu-vertical-servicos');
const btnLicencas = document.getElementById('btn-licencas');
const menuVerticalLicencas = document.getElementById('menu-vertical-licencas');
const btnContato = document.getElementById('btn-contato');
const menuVerticalContato = document.getElementById('menu-vertical-contato');

btnSobre.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalSobre);
});

btnServicos.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalServicos);
});

btnLicencas.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalLicencas);
});

btnContato.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalContato);
});

function abreMenu(event, menu) {
    event.preventDefault(); 
    menu.classList.toggle('active');
}

function fechaMenu(event, menu, btn) {
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.remove('active');
    }
}
document.addEventListener('click', function(event) {
    fechaMenu(event, menuVerticalSobre, btnSobre);
    fechaMenu(event, menuVerticalServicos, btnServicos);
    fechaMenu(event, menuVerticalLicencas, btnLicencas);
    fechaMenu(event, menuVerticalContato, btnContato);
});
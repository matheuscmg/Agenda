const  Agenda = require('./agenda');
const  Contato = require('./contato');

let usuario = new Agenda();
let joao = new Contato(1, 'João', '11 9999-9999');
let maria= new Contato(2, 'Maria', '11 9999-9999');
let pedro = new Contato(3, 'Pedro','11 9999-9999');

usuario.adicionarContato(joao.getIdContato(),joao.getNomeContato(), joao.getTelefoneContato());
usuario.adicionarContato(maria.getIdContato(),maria.getNomeContato(), maria.getTelefoneContato());
usuario.adicionarContato(pedro.getIdContato(),pedro.getNomeContato(), pedro.getTelefoneContato());
//usuario.buscarContato(1);
usuario.listarContatos();
usuario.atualizarContato(1, 'Camargo', '11 8888-9999');
usuario.listarContatos();
//usuario.removerContato(2);


//console.log('\n -- Terminei a main.js --');

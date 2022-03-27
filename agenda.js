//essa seria a minha agenda
class Agenda {
    agendaId = [];
    agendaNome = [];
    agendaTelefone = [];


    constructor() {
        //
    }

    adicionarContato(id, nome, telefone) {

        console.log('Entrei no adicionarContato');
        this.agendaId.push(id);
        this.agendaNome.push(nome);
        this.agendaTelefone.push(telefone);


    }

    buscarContato(id) {
        for (let i = 0; i < this.agendaId.length; i++) {

            if (this.agendaId[i] == id) {
                console.log('Usuario encontrado com sucesso!');
                console.log(`\n ID: ${this.agendaId[i]} \n Nome: ${this.agendaNome[i]} \n Telefone: ${this.agendaTelefone[i]}`);

            }
        }
        console.log('Usuario não encontrado!');
    }


    atualizarContato(id, nome, telefone) {

        for (let i = 0; i < this.agendaId.length; i++) {

            if (this.agendaId[i] == id) {
                this.agendaNome[i]=nome;
                this.agendaTelefone[i]=telefone;
                console.log('Contato atualizado com sucesso!');
            }


        }
    }

    removerContato(id) {

        const index = this.agendaId.findIndex(contato => contato.id === id);
        this.agendaId.splice(index - 1, 1);
        this.agendaNome.splice(index - 1, 1);
        this.agendaTelefone.splice(index - 1, 1);
        this.listarContatos();

    }
    listarContatos() {

        console.log('\n -- Listando usuários cadastrados!--')
        for (let i = 0; i < this.agendaId.length; i++) {

            console.log(`\n ID: ${this.agendaId[i]} \n Nome: ${this.agendaNome[i]} \n Telefone: ${this.agendaTelefone[i]}`);

        }



        // return this.contatos.map(contato => contato.nome);
    }
}

module.exports = Agenda;



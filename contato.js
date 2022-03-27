
class Contato {

    constructor(id,nome, telefone) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
    }
    getIdContato() {
        return this.id;
    }
    getNomeContato() {
        return this.nome;
    }
    
    getTelefoneContato() { 
        return this.telefone;
    }
    
    
}


module.exports = Contato;
const alunos = ['João', 'Maria', 'Felipe'];

const alunos2 = alunos.map(function(itemAtual){
    return{
        nome:itemAtual,
        nota: 7
    }
});

const bonsAlunos = alunos2.filter(function(item){
    return item.nota >= 6;
});
console.log(bonsAlunos)
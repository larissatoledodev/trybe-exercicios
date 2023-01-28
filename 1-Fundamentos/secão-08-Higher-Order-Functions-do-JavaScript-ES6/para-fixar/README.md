# Seção 08 - Higher Order Functions do JavaScript ES6


## Para fixar - forEach 


Imagine que você esteja responsável por exibir a lista de emails de todas as pessoas que trabalham na mesma empresa que você. Para isso, você pode utilizar o forEach para apresentar os emails.

  * Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

  const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
  ];

  // Adicione seu código aqui


## Para fixar - find


  * Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

  const numbers = [19, 21, 30, 3, 45, 22, 15];

  // Adicione seu código aqui


  * Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

  const names = ['João', 'Irene', 'Fernando', 'Maria'];

  // Adicione seu código aqui


  * Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

  const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

  // Adicione seu código aqui


## Para fixar - some e every


Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:

  * O nome das pessoas convidadas está salvo em um array chamado names;

  * A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.

Dica: use some.


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

  * Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

  * Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.


  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

    //Adicione seu código aqui

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

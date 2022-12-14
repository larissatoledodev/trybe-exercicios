let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  let moradoresDoBloco2 = moradores.blocoDois;
  let ultimoMoradorDoBloco2 = moradoresDoBloco2[moradoresDoBloco2.length - 1];


 //console.log('O morador do bloco 2 de nome ' + ultimoMoradorDoBloco2['nome'] + ' ' + ultimoMoradorDoBloco2['sobrenome'] + ' mora no ' + ultimoMoradorDoBloco2['andar'] + '° andar, apartamento ' + ultimoMoradorDoBloco2['apartamento']);

 for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
 }

 for (let index = 0; index < moradores.blocoDois.length; index += 1) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
 }
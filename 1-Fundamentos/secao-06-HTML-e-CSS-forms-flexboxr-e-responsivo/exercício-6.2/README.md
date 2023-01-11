## Exercícios - agora, a prática

Chegou o momento de estilizar seus projetos 🤩

Para realizar o exercício abaixo, você pode utilizar o Bootstrap ou outro framework da sua preferência, como Bulma, Semantic UI e Materialize. O gabarito foi feito utilizando o Bootstrap.

Imagine que você entrou em um novo emprego e está responsável por finalizar o site de sorteio da TrybeTrip.

A TrybeTrip é uma agência de viagens que está com um sorteio para concorrer a uma viagem maravilhosa e pediu para que fosse criado um site com um formulário para que as pessoas possam se inscrever e concorrer a viagem. O formulário já foi criado por outras pessoas do seu time e sua responsabilidade é adicionar um framework de estilos para deixar o site mais bonito.

Para isso:

  1. Crie um arquivo chamado form.html e cole o conteúdo do formulário abaixo:
  Atenção ⚠️: Caso você já tenha feito o exercício de criar o formulário da TrybeTrip, pode utilizar o mesmo arquivo. O objetivo aqui é adicionar apenas o estilo à sua página.

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario-TrybeTrip</title>
  </head>
  <body>
    <h1>Concorra à Viagem dos seus sonhos com a TrybeTrip</h1>

    <form>
      <fieldset>
        <label for="fullName">Nome Completo:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" maxlength="40" minlength="10" required>      
        <br/>

        <label for="email">Endereço de e-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" maxlength="50" minlength="10" required>
        <br/>

        <label for="destination1">Cidade</label>
        <input type="radio" id="destination1" className="radios" name="destinations" value="Cidade" required>

        <label for="destination2">Campo</label>
        <input type="radio" id="destination2" className="radios" name="destinations" value="Campo" required>

        <label for="destination3">Praia</label>
        <input type="radio" id="destination3" className="radios" name="destinations" value="Praia" required>

        <label for="destination4">Montanhas</label>
        <input type="radio" id="destination4" className="radios" name="destinations" value="Montanhas" required>
        <br/>

        <label for="why">Por que você deveria ser a pessoa desenvolvedora escolhida pelo concurso TrybeTrip?</label>
        <br/>
        <textarea name="why" id="why" cols="60" rows="10" placeholder="Digite sua resposta vencedora aqui"></textarea>
        <br/>

        <label for="date">Qual a melhor data para realizar sua viagem?</label>
        <input type="date" id="date">
        <br/>

        <label for="promo">Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe.</label>
        <input type="checkbox" name="promo" id="promo">
        <br/>

        <label for="agreement">Concordo que imagens de minhas férias poderão ser usadas na divulgação de concursos futuros.</label>
        <input type="checkbox" name="agreement" id="agreement" required>
      </fieldset>

      <button type="submit" id="submit-btn" disabled>Participar do concurso TrybeTrip</button>
      <button type="button" id="clear-btn">Apagar informações</button>
    </form>
  </body>
</html>



  2. Adicione o framework ao formulário.

  Para isso, acesse a documentação do framework e escolha a melhor opção para você.

  Por exemplo, para adicionar estilos com o Bootstrap, você pode utilizar o link CDN, como no exemplo abaixo:



<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">



  3. Estilize o formulário.
  
  Para isso, acesse a documentação do framework e procure por estilos de formulários. Fique à vontade para usar a criatividade e estilizar como preferir!

  * Outras sugestões: Bulma, Semantic UI e Materialize.
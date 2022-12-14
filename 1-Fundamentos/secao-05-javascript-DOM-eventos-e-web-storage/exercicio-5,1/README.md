## Exercícios - funções de manipulação do DOM

É hora de aplicar seus conhecimentos em manipular os elementos do HTML! 🤩

Imagine que você recebeu um desafio técnico para uma vaga de emprego em que o objetivo é mostrar suas habilidades em manipulação de DOM. O projeto já veio parcialmente implementado e você deve realizar algumas modificações definidas em Requisitos do Projeto.

Abaixo vamos simular o desafio que você recebeu. 😉

Desafio Técnico: manipulação de DOM
Utilize o código abaixo e siga as instruções que vem a seguir:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Desafio - JavaEscripito</h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
      // Seu código aqui
    </script>
  </body>
</html>

Para avaliar seus conhecimentos de HTML, você deve modificar os elementos já existentes utilizando apenas as funções:

document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
Requisitos do Projeto:

Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;
Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);
Crie e execute uma função que mude a cor do quadrado vermelho para branco;
Crie e execute uma função que corrija o texto da tag <h1>;
Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;
Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

## exercícios de fixação da seção 5.2

# Exercício Buscando elementos

Adicione o código abaixo a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.

<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>

Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai.


# Exercício Criando elementos

🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

🚀E a prática? Aqui!

<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>

Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.


# Exercício Removendo elementos

Para praticar:

<main id="paiDoPai">
    <section id="pai">
      <section id="primeiroFilho">
        <h2>Primeiro Filho</h2>
      </section>
      <section id="elementoOndeVoceEsta">
        <h2>Elemento que você deve remover</h2>
      </section>
      <section id="terceiroFilho">
        <h2>Terceiro Filho</h2>
      </section>
      <section id="quartoEUltimoFilho">
        <h2>Quarto Filho</h2>
      </section>
    </section>
  </main>

  Remova a tag h2, filha do elemento elementoOndeVoceEsta.
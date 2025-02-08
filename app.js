const listaDeNomes = [];
const nomesSorteados = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "") {
    listaDeNomes.push(nome);
    input.value = "";
    atualizarListaAmigos();
  } else {
    alert("Por favor, insira um nome.");
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (const nome of listaDeNomes) {
    const novoItem = document.createElement("li");
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
  }
}

function sortearAmigo() {
  if (listaDeNomes.length >= 2) {
    nomesSorteados.length = 0; // Limpa os nomes sorteados

    // Embaralhamento Fisher-Yates
    for (let i = listaDeNomes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listaDeNomes[i], listaDeNomes[j]] = [listaDeNomes[j], listaDeNomes[i]];
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (let i = 0; i < listaDeNomes.length; i++) {
      const amigo = listaDeNomes[i];
      let amigoSecreto;

      do {
        amigoSecreto =
          listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
      } while (amigoSecreto === amigo || nomesSorteados.includes(amigoSecreto));

      nomesSorteados.push(amigoSecreto);
      const itemResultado = document.createElement("li");
      itemResultado.textContent = `${amigo} tirou ${amigoSecreto}`;
      resultadoLista.appendChild(itemResultado);
    }
  } else {
    alert("Por favor, insira pelo menos 2 nomes.");
  }
}

// Exponha as funções para o HTML
window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;

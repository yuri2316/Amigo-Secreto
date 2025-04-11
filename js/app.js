let amigos = [];

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Digite um nome válido.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('lista-amigos');
  lista.textContent = amigos.join(', ');
}

function sortear() {
  if (amigos.length < 3) {
    alert('Adicione pelo menos 3 amigos para sortear.');
    return;
  }

  let sorteioValido = false;
  let sorteio = [];

  while (!sorteioValido) {
    sorteio = embaralhar([...amigos]);
    sorteioValido = true;

    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === sorteio[i]) {
        sorteioValido = false;
        break;
      }
    }
  }

  const resultado = [];
  for (let i = 0; i < amigos.length; i++) {
    resultado.push(`${amigos[i]} → ${sorteio[i]}`);
  }

  document.getElementById('lista-sorteio').innerHTML = resultado.join('<br>');
}

function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';
  document.getElementById('nome-amigo').value = '';
}

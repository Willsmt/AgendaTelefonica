// Seleciona o formulário da agenda pelo ID
const form = document.getElementById("form-agenda");

// Arrays para armazenar os nomes e telefones adicionados
const arrayNomes = [];
const arrayTelefones = [];

// Seleciona o campo de telefone
const telefone = document.getElementById("telefone");

// Variável que vai guardar todas as linhas da tabela
let linhas = "";

// Chama a função que corrige/mascara o telefone enquanto digita
corrigirTelefone();

// Adiciona um evento ao formulário para capturar o envio (submit)
form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede que o formulário recarregue a página

  adicionarLinha(); // adiciona uma nova linha com nome e telefone
  atualizaTabela(); // atualiza a tabela com os dados
});

// Função para corrigir/montar a máscara do telefone
function corrigirTelefone() {
  document.getElementById("telefone").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
    if (valor.length > 11) valor = valor.slice(0, 11); // limita a 11 dígitos (DDD + número)

    let formatado = "";

    if (valor.length >= 3) {
      // Só coloca os parênteses quando o DDD estiver completo (2 dígitos)
      formatado = `(${valor.slice(0, 2)})`;
    } else {
      // Se ainda não digitou os 2 dígitos do DDD, mostra só o que tem
      formatado = valor;
    }

    if (valor.length > 2) {
      if (valor.length <= 6) {
        // Até 6 dígitos → ainda sem hífen
        formatado += ` ${valor.slice(2)}`;
      } else {
        if (valor.length === 10) {
          // Telefone fixo: (XX) XXXX-XXXX
          formatado += ` ${valor.slice(2, 6)}-${valor.slice(6)}`;
        } else if (valor.length === 11) {
          // Telefone celular: (XX) XXXXX-XXXX
          formatado += ` ${valor.slice(2, 7)}-${valor.slice(7)}`;
        } else {
          // Caso esteja apagando e ainda não completou, mostra sem hífen
          formatado += ` ${valor.slice(2)}`;
        }
      }
    }

    // Atualiza o valor do campo com o texto formatado
    e.target.value = formatado;
  });
}

// Função para adicionar uma linha na tabela
function adicionarLinha() {
  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");

  // Verifica se o nome já existe no array (evita duplicados)
  if (arrayNomes.includes(nome.value)) {
    alert(`O nome : ${nome.value} já foi inserido na agenda.`);
  } else if (arrayTelefones.includes(telefone.value)) {
    alert(`O telefone: ${telefone.value} já pertence a outro contato.`);
  } else {
    // Adiciona nome e telefone nos arrays
    arrayNomes.push(nome.value);
    arrayTelefones.push(telefone.value);

    // Monta a linha da tabela
    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;

    // Adiciona a linha na variável acumuladora
    linhas += linha;
  }

  // Limpa os campos do formulário
  nome.value = "";
  telefone.value = "";
}

// Função para atualizar a tabela com as linhas acumuladas
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas; // insere todas as linhas no corpo da tabela
}

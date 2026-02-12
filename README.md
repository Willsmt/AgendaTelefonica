---

# 📒 Agenda de Contatos Inteligente

Uma aplicação web prática e elegante para gerenciar sua lista de contatos. O projeto foi desenvolvido com foco em **validação de dados** e **experiência do usuário (UX)**, garantindo que os números de telefone sejam formatados corretamente de forma automática.

### 🔗 Demonstração Online

> **[Clique aqui para acessar a Agenda de Contatos](https://agendatelefonica-seven.vercel.app/)**


---

## ✨ Funcionalidades

* **Inserção Dinâmica:** Adicione contatos sem recarregar a página.
* **Máscara Automática de Telefone:** - Formata instantaneamente conforme você digita: `(XX) XXXXX-XXXX`.
* Diferencia automaticamente entre números fixos (8 dígitos) e celulares (9 dígitos).


* **Prevenção de Duplicidade:** O sistema valida se o nome ou o telefone já foram cadastrados antes de permitir a inserção.
* **Interface Responsiva:** Design limpo que se adapta bem a diferentes tamanhos de tela.

## 🛠️ Tecnologias e Conceitos

Este projeto utiliza o "trio fundamental" do desenvolvimento Web:

* **HTML5:** Estrutura semântica para acessibilidade.
* **CSS3:** Estilização moderna utilizando o modelo **Flexbox**.
* **JavaScript (ES6+):** * Manipulação de DOM e eventos.
* Uso de **Regex** (Expressões Regulares) para formatação.
* Gerenciamento de estado com Arrays para controle de duplicados.



---

## 📂 Estrutura de Arquivos

```text
.
├── index.html   # Estrutura e marcação da página
├── style.css    # Design, cores e responsividade
└── script.js    # Lógica de validação, máscara e inserção

```

## 🚀 Como Executar Localmente

1. Faça o download ou clone este repositório.
2. Certifique-se de que todos os arquivos estão na mesma pasta.
3. Abra o arquivo `index.html` em seu navegador.

---

## 🧠 Lógica de Destaque: A Máscara de Telefone

Abaixo, um trecho da lógica implementada para garantir a melhor experiência de preenchimento:

```javascript
// Exemplo de como a máscara diferencia celular de fixo:
if (valor.length === 10) {
    formatado += `${valor.slice(2, 6)}-${valor.slice(6)}`; // Fixo
} else if (valor.length === 11) {
    formatado += `${valor.slice(2, 7)}-${valor.slice(7)}`; // Celular
}

```

## 📝 Próximos Passos (Roadmap)

* [ ] Adicionar funcionalidade de **excluir** um contato da lista.
* [ ] Implementar **LocalStorage** para persistência de dados.
* [ ] Criar um botão para **exportar a lista** em formato Excel.

---

**Desenvolvido como projeto de portfólio para prática de lógica em JavaScript.**

---

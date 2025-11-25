Integrantes:
Beatriz Cristiane Haberman Severo Alves
José Matheus Santos Filho
Luiz Miguel Gonçalves de Oliveira
Marina Magalhães de Castro Torres
Matheus Gabriel Fernandes Santana
Victor Luiz Barreira Ferreira


O texto que você forneceu anteriormente (o Guia de Usuário da Aplicação CRUD de Cadastro) já foi entregue em código Markdown na minha resposta anterior.

Aqui está esse mesmo código Markdown novamente, dentro de um bloco de código, para facilitar a cópia:

Markdown

## 📘 Guia de Usuário da Aplicação CRUD de Cadastro

Este guia rápido explica como navegar e utilizar as funcionalidades de Cadastro, Listagem, Edição e Exclusão de usuários na aplicação desenvolvida em Node.js com Express e EJS.

---

### 🖼️ Visão Geral da Interface

A aplicação possui duas telas principais, refletindo as operações de CRUD:

1.  **Tela de Registros (Home):** Exibe a lista completa de usuários cadastrados (operação de **Leitura**).
2.  **Tela de Cadastro/Edição:** Permite inserir novos usuários (operação de **Criação**) ou modificar dados existentes (operação de **Atualização**).

---

### 1. 🏡 Tela de Registros (Home)

Esta é a página inicial da aplicação, onde todos os dados de usuários são listados em formato de tabela.



| Elemento | Função | Ação |
| :--- | :--- | :--- |
| **Tabela de Dados** | Exibe os registros de todos os usuários. | Permite a **visualização** (Leitura). |
| **Botão "Cadastrar Novo"** | Redireciona para a tela de cadastro. | Inicia a operação de **Criação**. |
| **Botão "Editar"** | Abre a tela de alteração com os dados do usuário pré-preenchidos. | Inicia a operação de **Atualização**. |
| **Botão "Excluir"** | Remove permanentemente o registro do usuário. | Inicia a operação de **Exclusão**. |

> **Observação:** Campos como **Telefone**, **CPF** e **Data de Nascimento** são automaticamente formatados para melhor leitura.

---

### 2. 📝 Cadastro de Novo Usuário (Criação)

Para adicionar um novo usuário ao sistema:

1.  Clique no botão **"Cadastrar Novo"** na Tela de Registros.
2.  Você será direcionado para o formulário de cadastro.



#### 2.1 Campos do Formulário:

| Campo | Formato Esperado | Observações |
| :--- | :--- | :--- |
| **Nome** | Texto livre | Nome completo do usuário. |
| **Email** | Ex: `usuario@dominio.com` | Endereço de e-mail válido. |
| **Telefone** | Apenas números | Será formatado automaticamente. |
| **CPF** | Apenas números | Será formatado automaticamente (Ex: 000.000.000-00). |
| **dd/mm/aaaa** | Data no formato Dia/Mês/Ano | Use o ícone do calendário ou digite a data de nascimento. |

#### 2.2 Finalização

* Preencha todos os campos obrigatórios.
* Clique no botão **"Salvar"**.
* O sistema irá processar o cadastro e redirecionar você de volta para a **Tela de Registros**, que agora incluirá o novo usuário.

---

### 3. ✏️ Edição de Usuário (Atualização)

Para modificar os dados de um usuário existente:

1.  Na **Tela de Registros**, localize o usuário que deseja modificar.
2.  Clique no botão **"Editar"** correspondente à linha do usuário.
3.  Você será direcionado ao mesmo formulário da seção 2, mas com os campos **preenchidos** com os dados atuais do usuário.
4.  Altere os campos necessários.
5.  Clique no botão **"Salvar"**.
6.  O sistema atualizará o registro e retornará à **Tela de Registros** com as modificações aplicadas.

---

### 4. 🗑️ Exclusão de Usuário

Para remover um registro permanentemente:

1.  Na **Tela de Registros**, localize o usuário.
2.  Clique no botão **"Excluir"** correspondente à linha do usuário.
3.  **Atenção:** A exclusão é geralmente **permanente**. Confirme se é o registro correto antes de prosseguir.
4.  O registro será removido da base de dados e desaparecerá da lista.

---


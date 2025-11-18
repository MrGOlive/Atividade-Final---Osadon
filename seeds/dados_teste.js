/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deleta TODAS as entradas existentes na tabela 'usuarios'
  await knex('usuarios').del();

  // Insere registros iniciais
  await knex('usuarios').insert([
    {
      nome: 'João Silva Pereira',
      cpf: '12345678900',
      email: 'joao.silvapereira@exemplo.com',
      telefone: '11987654321',
      data_nascimento: '1990-05-15'
    },
    {
      nome: 'Carlos Eduardo Souza',
      cpf: '23456789011',
      email: 'carlosedusouza@exemplo.com',
      telefone: '21998877665',
      data_nascimento: '1985-10-20'
    },
    {
      nome: 'Pedro Oliveira',
      cpf: '99900011122',
      email: 'pedro.oliveira@exemplo.com',
      telefone: '31976543210',
      data_nascimento: '2000-01-01'
    },
    {
      nome: 'João Pedro Alves',
      cpf: '45678901233',
      email: 'joao.pedro@email.com',
      telefone: '41955554444',
      data_nascimento: '1995-07-08'
    },
    {
      nome: 'Fernanda Lima',
      cpf: '56789012344',
      email: 'fernanda.lima@email.com',
      telefone: '61933332222',
      data_nascimento: '1988-12-12'
    },
  ]);
};

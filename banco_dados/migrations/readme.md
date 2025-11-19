Arquivos nessa pasta migration não podem ser apagados.

OBS:
1. NUNCA delete um arquivo de migração que foi aplicado e registrado no ambiente de Produção ou Staging.

2. NUNCA altere o código (`exports.up` ou `exports.down`) de uma migração que já foi aplicada em um ambiente compartilhado. Se você precisa mudar uma coluna, você deve criar uma nova migração que faz a alteração (knex.schema.alterTable). Fazer isso quebraria a capacidade do Knex de recriar o banco de dados a partir do zero.


# Desafio Técnico Payfy
Nesse desafio foi proposto um protótipo de uma tela que deveria ser integrada a uma api e fizesse a criação de novos usuários que seriam mostrados em uma tabela
### funcionalidades obrigatórias
- criar em um repositorio aonde o examinador possa acessar(publico ou adicionar o examinador como contribuidor do repo)
- a tabela de usuarios deve ser populado com o conteudo que vem da rota get /clients(ver doc da api abaixo)
- ao clicar no botão create user deve-se abrir a modal como mostra a segunda tela no figma
- ao submeter a modal deve-se enviar para a rota de post /clients as informções preenchidas pelo usuario
- ao submeter um novo usuario, deve-se atualizar a lista de usuarios automaticamente

### funcionalidades extras desenvolvidas e não obrigatórias
- arquivo para leitura e escrita de json para persistir usuários criados
- rota para deletar usuários
- a tabela de usuários possui uma opção para deletar usuário daquela linha
- tela fiel ao protótipo
- function component apenas
- typescript
- uso de hooks
- gerenciamento de estados feito com redux

### decisões
- apesar de ser um projeto pequeno decidi usar redux por ser um gerenciador de estados global mais robusto do que api context
- usei css puro porque é algo que gosto muito e quem entende css puro entende sass, styled-components, etc..
- usei padrão de projeto comum pois o projeto em si é uma feature única
- não houve muitas oportunidades para custom hooks mas tentei o máximo de over engeneering
- separei o uso da api em 2 partes, service onde é executado o request e manager onde é feita a chamada e se necessário fazer algum tratamento de dados
## Como rodar a api
dentro da pasta do projeto, você vai rodar
$ yarn
para baixar as dependÊncias, e 
$ yarn start
para rodar a api em localhost:4000

## Como rodar o frontend
dentro da pasta do projeto, entrar na pasta frontend e rodar
$ yarn
para baixar as dependêcias, e
$ yarn start 
para rodar a UI em localhost:3000

## Como testar
Ao entrar na página, clicar no botão "Create new user" para abrir o modal
O modal pode ser fechado pelo ícone ou clicando no overlay ao fundo
No modal terá um input para colocar o nome do novo usuário a ser criado
Digitar o nome a ser criado e clicar no botão para criar
O modal irá fechar e a tabela de usuários irá atualizar com o novo usuário criado
Cada linha da tabela representa um usuário e ao final da linha existe uma lixeira usada como botão de excluir
Ao clicar na lixeira a tabela irá atualizar novamente
Ao recarregar a página os valores se mantém

## Observações
Existem 3 requisições sendo feitas para api que devolve à página uma nova lista de usuários: 
 - a primeira para pegar os usuários inicias
 - a segunda para inserir novo usuário
 - a terceira para deletar

 Não está sendo feita nenhuma validação no input de nome do modal ou na api para evitar nomes duplicados

 Os botões do submenu não executam nenhuma função ao clicar pois não foi mapeado no desafio

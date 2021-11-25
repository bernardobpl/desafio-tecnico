# Desafio Técnico Payfy
Nesse desafio, você vai ter que criar uma aplicação react para implementar a seguinte página [(link do figma)](https://www.figma.com/file/YP2iqH5rY4LNZPqVVXlo0u/Desafio-Tecnico?node-id=0%3A1)
### funcionalidades obrigatórias
- criar em um repositorio aonde o examinador possa acessar(publico ou adicionar o examinador como contribuidor do repo)
- a tabela de usuarios deve ser populado com o conteudo que vem da rota get /clients(ver doc da api abaixo)
- ao clicar no botão create user deve-se abrir a modal como mostra a segunda tela no figma
- ao submeter a modal deve-se enviar para a rota de post /clients as informções preenchidas pelo usuario
- ao submeter um novo usuario, deve-se atualizar a lista de usuarios automaticamente

### funcionalidades não obrigatórias, porem legal de se ter
- tentar se manter fiel ao estilo do prototipo no figma( com hover no submenu, background da tela quando abre a modal, cores e tamanhos de fonte)
- ter um arquivo de style guide
- usar function component apenas
- usar typescript
- user o máximo de hooks posiveis, para mostrar oque você sabe fazer com eles(over engineering é legal somente aqui :p)

## Como rodar a api
dentro da pasta do projeto, você vai rodar
$ yarn
para baixar as dependencias, e 
$ yarn start
para rodar a api em localhost:3000

## Rotas da API:
| Verbo | url | def | Payload esperado|
|--|--|--|--|
|GET |http://localhost:3000/clients| para listar todos os clientes| - |
|POST |http://localhost:3000/clients| para criar um cliente novo |{"name":  [[Customer name]]}

## Observações
- Você pode inspecionar os elementos do figma para pegar as propriedades css dos elementos
- Qualquer duvida você pode ou perguntar para quem lhe passou o desafio, ou assumir a resposta e documentar todas suas assunções no read-me do seu projeto

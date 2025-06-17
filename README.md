### Desenvolvido com

* [![Ionic][Ionic]][Ionic-url]
* [![Angular][Angular.io]][Angular-url]


## Introdução

Projeto para listar e detalhar cada Pokemon presente no PokéAPI

### Pré Requisitos

  * Instalção do Ionic CLI
  ```sh
  npm install -g @ionic/cli
  ```


### Instalação e Inicialização

1. Clonar o repositório
   ```sh
   git clone https://github.com/mateusshimomura/projeto-poke.git
   ```
3. Instalar o NPM
   ```sh
   npm install
   ```
4. Inicializar o projeto
   ```sh
   ionic serve
   ```

Caso queira testar o projeto em outro dispositivo diferente do que está rodando o mesmo:
1. **Adicionar --external no comando de inicialização**
   ```sh
   ionic serve --external
   ```
2. **Utilizar, no outro dispositivo, o endereço informado em "External:" (seu IPV4 com a porta 8100)**

## Funcionalidades

* Possui um sistema funcional de armazenamento dos Pokemons definidos como favoritos; assim podendo identificá-los ao retornar em sua tela específica
* A lista de Pokemons na primeira tela é preenchida de 20 em 20, utilizando a função do scroll infinito para popular ela
  
## Abordagem no Projeto
Na parte da codificação, foi escolhido um padrão simples, para facilitar futuras edições e implementações por outros desenvolvedores. Escolhi criar um Service para centralizar todas as requisições e armazenamento de dados. Quanto ao design, foi adotado um padrão simples também, com o intuito de facilitar a interpretação e leitura por parte dos usuários.


<!-- LINKS -->
[Ionic]: https://img.shields.io/badge/ionic-3880ff?style=for-the-badge&logo=ionic&logoColor=white
[Ionic-url]: https://ionicframework.com/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
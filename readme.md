--- PASSO A PASSO ---

Para iniciar o sistema:

1 - Certifique-se de possuir instalado o framework NODE.JS.


2 - Baixe o sistema e extraia para uma pasta desejada.


3 - Via terminal, entre na pasta e execute o comando "node server.js" para windows ou "nodejs server.js" para linux.


4 - Aguarde o framework carregar e efetuar a compilação.


5 - Abra o seu navegador padrão e navegue até o seguinte endereço : 

        localhost:3000

6 - Clique em Cadastre-se.


7 - Preencha os dados e clique em cadastrar.


8 - Aguarde o redirecionamento para a página de login.


9 - Efetue o login com seu usuário e senha.


10 - Na tela principal (/home) é possível visualizar e filtras sobre todas as questões cadastradas. No final da página, o botão + questão é usado para criar novas questões. 

11 - Ao clicar no botão visualizar (ao lado da linha no grid) é possível visualizar a questão cadastrada por completo.

12- Na tela de criação de questão, insira os dados da questão e clique em salvar questão para criá-la.


O sistema tem uma boa taxa de alcance responsivo e funciona para multiusuários, além de guardar cookies.

A integração é feita por meio da API Restful da aplicação. Segue os endereços para utilizar a API :

localhost:3000/api/login  :
    GET => obtém resposta para sessão válida ou inválida apartir do cookie "user" enviado.
    POST => Loga um usuário apartir do body da requisição

localhost:3000/api/questions  :
    GET => Obtém todas as questões
    POST => Cria uma questão

localhost:3000/api/questions/:questionId
    GET => Obtém uma questão
    PUT => Atualiza uma questão
    DELETE => Deleta uma questão

localhost:3000/api/users/:userId/questions
    GET => Obtém todas as questões feitas pelo usuário passado como parâmetro

localhost:3000/api/users/search/:query/questions
    GET => Obtém todas as questões de um usuário pesquisado por algum campo da entidade.

    Exemplo de uso : 
    
    GET localhost:3000/api/users/search/[{"email":"gustavo.h.militao@gmail.com"}]/questions

    A chamada GET acima obtém todas as questões de um usuário que possuir email igual a gustavo.h.militao@gmail.com

    ATENÇÃO : A expressão de declaração é um array com um objeto que descreve a entidade. As aspas também são obrigatórias.

localhost:3000/api/logged/questions
    POST => Cria uma questão para o usuário logado. Obrigatório apenas ESTAR LOGADO e passar no body o objeto questão criado.

localhost:3000/api/questionTypes
    GET => Obtém todos os tipos de questão (Discursiva, Objetiva).
    POST => Cria um tipo de questão.

localhost:3000/api/users
    GET => Obtém todos os usuários cadastrados.
    POST => Cria um usuário.

localhost:3000/api/users/:userId

    ATENÇÃO : O ID do cookie diz respeito ao Id da entidade login que referencia o usuário no banco. É necessário saber o Id do usuário para utilizar esta requisição.

    GET => Obtém um usuário por ID. 
    PUT => Atualiza um usuário
    DELETE => Deleta um usuário

localhost:3000/api/users/search/:query

    GET => Obtém um usuário pesquisado por algum campo da entidade.

    Exemplo de uso : 
    
    GET localhost:3000/api/users/search/[{"email":"gustavo.h.militao@gmail.com"}]

    A chamada GET acima obtém todos os usuários que possuirem email igual a gustavo.h.militao@gmail.com

localhost:3000/api/logged
    GET => Obtém o usuário logado apartir do cookie.
    

    REFORÇANDO ...

    ATENÇÃO : O cookie "user" identifica apenas o id da entidade Login. Esse id é vinculado juntamente com a data de expiração da sessão na coleção de Logins.

    O ID DO LOGIN É DIFERENTE DO ID DO USER. O login apenas referencia o user para maior segurança de sessão.

Para depurar o sistema:

1 - Utilize qualquer source control que consiga acessar o git.


2 - Faça o clone desse repositório.


3 - Configure a ferramenta de build para executar o server.js (ou ler o arquivo package.json que está especificado inicializar o arquivo server.js no start da aplicação).


5 - Siga os passos 5 a 11 do passo a passo para inicializar.


Bom proveito.

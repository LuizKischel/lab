# laboratório

# Passo 1

## Primeiro passo será verificar se você tem as ferramentas necessárias para rodar o programa:

- Fazer download do gitbash no seguinte endereço: https://git-scm.com/download/win
- Fazer download do vscode no seguinte endereço: https://code.visualstudio.com/download
- Fazer download do nodeJS no seguinte endereço: https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi
- Fazer download do docker no seguinte endereço: https://www.docker.com/products/docker-desktop/
- Fazer download do yarn no seguinte endereço: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Após baixar esses programas iniciais, clone este repositório em sua máquina.

Para clonar o repositório basta abrir o gitbash baixado anteriormente, escolher o diretório de sua preferencia (documents...) e digitar o seguinte comando:
'git clone https://github.com/LuizKischel/lab.git'
Como o repositório é público não necessitará de autenticação.

## Depois de clonar deve abrir o projeto no visual studio code:

Para isto, basta abrir o vscode ir no canto esquerdo em "file" e clicar em open folder, depois é só selecionar a pasta lab clonada localmente.
Você deverá ver algo como isto:

![Alt text](./images/image.png)

## Fazendo API funcionar:

Agora chegou a hora de validar o funcionamento da api, em seu vscode aperte as teclas **ctrl + "** para abrir o terminal (pode utilizar o powershell ou alterar para o gitbash)

Terminal aberto execute o comando **yarn** para instalar as dependências. Ao finalizar deverá ter gerado uma nova pasta chamada __node_modules__

Exemplo de um comando executado com sucesso:

![Alt text](./images/terminal.png)

*Obs: Caso dê algum erro de instalação de pacotes, verifique as versões das ferramentas instaladas.*

Instalação de dependências bem sucedida, podemos rodar a aplicação.
Para rodar a aplicação bastar escrever o comando **yarn start**

Exemplo de api rodando corretamente:

![Alt text](./images/api-rodando.png)

Após exibir a mensagem "Express server has started on port 3333". 
Abra o navegador e acesse o seguinte endereço: http://localhost:3333/health
Deve aparecer a seguinte mensagem:

![Alt text](./images/helloworld.png)
# Bio-2
Repositório do site de Bioengenharia Ocular 2

Uma breve explicação do projeto:

Este projeto utiliza ReactJS, que é uma distribuição de JavaScript criada pelo Facebook.
Basicamente, temos a nossa página na pasta /src/index.html que recebe os scripts de /src/index.js para que ela seja construída.
O ReactJS é capaz de construir as páginas de forma dinâmica. O mesmo script pode reconstrui-la a partir de um comando,
como o clique em um botão, por exemplo.
A intenção é contruir somente um esqueleto em html, no arquivo /src/index.html e manipular todos os mostradores e gráficos com ReactJS,
importando a API do climatempo e os dados dos sensores e mostrando do jeito que quisermos.

!!! IMPORTANTE !!!

Ainda falta uma pasta para rodar os arquivos! O ReactJS utiliza pacotes de JavaScript para rodar, e você precisa baixar esses pacotes se quiser rodar o site. Não consigo upar aqui porque são quase 15 mil arquivos, e o github pede pra upar 100 arquivos por vez.
Para rodar o site você precisa baixar todos os arquivos deste repositório e baixar o Node.js:

https://nodejs.org/en/

Baixe a versão da direita, Latest Features. Após isso, abra o prompt de comando e acesse a pasta que você baixou aqui do git pelo prompt. Copie e cole os comandos abaixo, um de cada vez, esperando cada um acabar os downloads.

npm install webpack --save-dev

npm install webpack-cli --save-dev

npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

npm install react react-dom --save-dev

npm install prop-types --save-dev

npm install file-loader

ACHO que são só esses, mas nao feche o prompt. Quando acabar de baixar, você deve ter uma pasta chamada node_modules dentro da pasta que você colocou os arquivos do git. Colocando o comando:

npm start

Você deve ver a página abrir sozinha no seu browser. Esse comando abre um servidor local no seu computador. Quando já não quiser mais ver a página, digite crtl+c no prompt e digite s ou y para a pergunta que ele faz em seguida.


Cursos pra aprender HTML, CSS, JavaScript e ReactJS:
https://www.codecademy.com/catalog/language/html-css
https://www.codecademy.com/catalog/language/javascript

Exemplos de arte para CSS:
https://codemyui.com/

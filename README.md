# NoteCtts-Back

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:
````
yarn install
````
**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````
# Rotas

````
USER:

get("/user")
post("/user")
patch("/user")
delete("/user/:id")

CONTACT:

get("/contact")
post("/contact")
patch("/contact/:id")
delete("contact/:id")

LOGIN:

post("/login")

DOCS:

get("/api-docs")
````

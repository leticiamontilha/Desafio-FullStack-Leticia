# desafio-fullstack-LeticiaAPI

*baseurl* = http://localhost:3000

# Para instalar a api

> No primeiro uso utilize
> Obs: Lembre-se de setar as variáveis de ambiente de acordo com o arquivo .env.exemple
```
yarn
# após instalar as dependências utilize para realizar as migrações
yarn typeorm migration:run -d src/data-source.ts
# utilize para rodar a aplicação
yarn dev
```

> Após o primeiro uso utilize 

```
yarn dev
```

>  Para parar a aplicação utilize

```
CTRL + C
```

# Rotas que não precisam de autenticação

## Rota para criar um usuário
> POST *baseurl*/users

- Todos os campos devem ser enviados.
- O email deve ser válido e único.

> *Exemplo de envio*
```json
{
	"name": "Exemple Name",
	"email":"exemple@mail.com",
	"password":"1234",
	"phone_number":"14998574236"
}
```
> *Exemplo de retorno*
```json
{
	"id": "a76e9caa-c267-4ee8-9043-5e80d3c515e9",
	"name": "Exemple Name",
	"email":"exemple@mail.com",
	"phone_number":"14998574236",
	"createdAt": "2023-05-31T01:19:16.499Z",
	"contacts": []
}

```

## Rota para realizar o login
> POST *baseurl*/login

- Deve ser enviado um e-mail válido;
- Deve ser enviado uma senha válida;

> *Exemplo de envio* 

 ```json
{
	"email": "exemplo@mail.com",
	"password":"1234"
}
```

> *Exemplo de retorno*

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxldGljaWFAa2VuemllLmNvbSIsImlkIjoiOWQ1Yzk3NDAtOGZhNS00OGQ5LWFkMDQtYWM5MzNiMDMyMTU1IiwiaWF0IjoxNjg1NDk1OTQ3LCJleHAiOjE2ODU1ODIzNDcsInN1YiI6IjlkNWM5NzQwLThmYTUtNDhkOS1hZDA0LWFjOTMzYjAzMjE1NSJ9.rSJIw4IaFcWUD22iUl_3XLZL5Gh2lDaEC5l7PMkF_L0"
}
```

## Rota para buscar usuário pelo token de autenticação
> GET *baseurl*/users

- Deve ser enviado um token de autenticação

> *Exemplo de retorno*

```json 
{
	"id": "8fa388bd-c05b-40e1-8e09-1512c9f0a519",
	"name": "Exemple Name",
	"email": "exemple3@teste.com",
	"phone_number": "12998547521",
	"createdAt": "2023-03-22T23:16:50.846Z",
	"contacts": [
		{
			"id": "3721ab42-fb65-421b-ad87-533d1b033dcc",
			"email": "exemple1@teste.com",
			"name": "Exemple Name",
			"phone_number": "12998547521",
            "createdAt": "2023-05-30T22:41:04.528Z"
		},
		{
			"id": "a83eacc4-6546-4b2a-b4ce-ca861ddbf46c",
			"email": "exemple2@teste.com",
			"name": "Exemple Name",
			"phone_number": "12998547521",
            "createdAt": "2023-05-30T22:41:04.528Z"
		}
	]
}
```

## Rota para atualizar informações do usuário
PATCH *baseurl*/users/{id}

- Deve enviar um id válido na url.
- Os campos id e createdAt não podem ser alterados.
- Deve ser enviado um token de autenticação.

> *Exemplo de envio*

```json
{
	"name": "Exemple Name Patched"
}
```

> *Exemplo de retorno*

```json
{
    "name": "Exemple Name Patched",
    "email": "exemple@mail.com",
    "phone_number": "00000000",
    "id": "9585d0ca-c8ed-4d2e-9c03-8386e9b04f3c",
    "createdAt": "2023-03-25T13:56:27.167Z",
    "contacts": [
        {
            "id": "19be5105-9b25-4902-a1e0-8b6e77f9e1f5",
            "email": "exemple2@mail.com",
            "full_name": "Exemple Name",
            "phone_number": "12998547521"
        },
        {
            "id": "6046babf-9027-408d-8db7-39f283eeecf7",
            "email": "exemple3@mail.com",
            "full_name": "Exemple Name",
            "phone_number": "12998547521"
        }
    ]
}
```

## Rota para deletar um usuário
> DELETE *baseurl*/users/{id}

- Deve enviar o id do usuário na url.
- Deve ser enviado um token de autenticação.

> *Exemplo de retorno*

```
No body returned for response
```


## Rota para listar todos os contatos do usuario logado 
> GET *baseurl*/contacts

- Deve ser enviado um token de autenticação

> *Exemplo de retorno*

```json
{
	"name": "Exemple Name",
	"email":"exemple@mail.com",
	"phone_number":"14998574236",
	"id": "9d5c9740-8fa5-48d9-ad04-ac933b032155",
	"createdAt": "2023-05-24T13:07:46.819Z",
	"contacts": [
		{
			"name": "Exemple Name",
            "email":"exemple@mail.com",
            "phone_number":"14998574236",
			"id": "88b5695c-b592-4cc2-bffc-5eea1acbf4c5",
			"createdAt": "2023-05-30T22:41:04.528Z"
		},
		{
			"name": "Exemple Name",
            "email":"exemple@mail.com",
            "phone_number":"14998574236",
			"id": "f6695ee6-d94b-4c41-9a0f-df372e5ef3d1",
			"createdAt": "2023-05-30T22:41:24.801Z"
		}
	]
}
```


## Rota para criar um contato vinculado ao usuario logado
> POST *baseurl*/contacts

- Todos os campos devem ser enviados.
- O email deve ser válido e único.
- Deve ser enviado um token de autenticação


> *Exemplo de envio*
```json
{
	"name": "Exemple Name",
	"email":"exemple@mail.com",
	"phone_number":"14998574236"
}
```
> *Exemplo de retorno*
```json
{
	"name": "Exemple Name",
	"email":"exemple@mail.com",
	"phone_number":"14998574236",
	"id": "1f18bf30-1c8f-484b-ba2a-52b2174efe3a",
	"createdAt": "2023-05-31T01:30:31.401Z",
	"userId": "9d5c9740-8fa5-48d9-ad04-ac933b032155"
}
```

## Rota para atualizar informações do contato
> PATCH *baseurl*/contacts/{id}

- Os campos id e createdAt não podem ser alterados.
- Deve ser enviado um token de autenticação.
- Deve enviar o id do contato na url.

> *Exemplo de envio*

```json
{
	"name": "Exemple Name Patched"
}
```

> *Exemplo de retorno*

```json
{
	"id": "1bae4b6e-dab9-47be-8725-301c1494c7a2",
	"name": "Example Name Patched",
	"email": "example@example.com",
	"phone_number": "0000000",
	"createdAt": "2023-05-23T19:28:15.160Z"
}
```
## Rota para deletar um contato
> DELETE *baseurl*/contacs/{id}

- Deve enviar o id do usuário na url.
- Deve ser enviado um token de autenticação.

> *Exemplo de retorno*

```
No body returned for response
```


import express, { request, response } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);


// Rota: Endereço completo da requisição
// Receurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// DELETE: Remover uma informação existente no back-end
// PUT: Atualizar uma informação existente no back-end

// POST http://localhost:3333/users = Criar um usuario
// GET http://localhost:3333/users = Listar usuarios
// GET http://localhost:3333/users/5 = bUSCAR DADOS DO USUARIO COM ID 5

// Request param: Parametros que vem na propria rota que identificam um recurso
/*
app.get('/users/:id', (request, response)=>{
	const id = Number(request.params.id);

	const user = users[id];

	return response.json(user);
})
*/
// Query Param: (Opcionais) Parametros que vem na propria tora para filtros, paginação
/*
app.get('/users', (request, response) => {
	const search  = String(request.query.search)	;

	const filteredUsers = search ? users.filter(user => user.includes(search)): users;

	return response.json(filteredUsers);
});
*/
// Request Body: Parametros para criação/Atualização de informações
/*
app.post('/users', (request, response) =>{
	const data = request.body;

	console.log(data);
	
	const user = {
		name:data.name,
		email:data.email
	};
	return response.json(user);
});
*/


// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name','Diego').select('*')

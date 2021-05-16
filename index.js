const express = require('express');

const port = 3001;
const requestCallChatId = '-574786367';

const products = require('./src/scripts/products');
const features = require('./src/scripts/features');
const bodyParser = require('body-parser');
const bot = require('./src/scripts/telegraf');



console.log(features)
console.log(products)

const app = express();
bot.launch()

bot.telegram.sendMessage(
	requestCallChatId,
	'Если что я ещё тут'
)

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get('/', (req, res) => {
	res.render(
		'index',
		{
			message: 'Живите и процветайте',
			pageTitle: 'опа опа оппа па',
			products,
			features
		})	
})

app.get('/product', (req, res) => {
	res.render(
		'product',
		{
			pageTitle: 'Product page',
		})	
})

app.get('/api/request-call', (req, res) => {
	console.log('request: ', req.query);
	bot.telegram.sendMessage(
		requestCallChatId,
		`
			Тут надо протестировать какие-то функции, 
			так что я просто вставлю всё через запятую:
			${req.query.name},
			${req.query.email},
			${req.query.phone}
			Кажись этот человейник заполнил форму на твоём недосайте
		`
	)

	res.redirect('/')
})

app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
})

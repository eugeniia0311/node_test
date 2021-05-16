const { Telegraf } = require('telegraf');

const bot = new Telegraf(
	'1782376467:AAERwAuJaBmkL97Fn-q65sjI_J9QW9R-iHo'
	);

bot.start((ctx) => {
	 ctx.reply('Когда-нибудь у Евгена дойдут руки до персоналзации и я буду писать что-то прикльное, но не сегодня...')
})
bot.on('sticker', (ctx) => ctx.reply(':thumbsup:'))
bot.hears('hi', (ctx) => ctx.reply('Dude? how do u feel?'))

module.exports = bot;
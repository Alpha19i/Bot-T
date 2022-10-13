'use strict'

const Telegram = require('telegram-node-bot')
require('dotenv/config')
const YOUR_TOKEN = process.env.YOUR_TOKEN

const TelegramBaseController = Telegram.TelegramBaseController
const RegexpCommand = Telegram.RegexpCommand
const chatbot = new Telegram.Telegram(YOUR_TOKEN)

class Numb extends TelegramBaseController {
    Calc(scope){
        let msg = `number`
        scope.sendMessage(msg)
    }
    get routes() {
        return{
            'number' :'Calc'
        }
    }
}

chatbot.router
    .when(
        new RegexpCommand( /[0-9]/g, 'number'),
        new Numb()
    )
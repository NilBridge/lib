const WebsocketClient = require('websocket').client;
const md5 = require('md5-node');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

class Server{
    constructor(url,pwd,reconnect=5){
        this.url = url;
        let pwd_md5 = md5(pwd).toUpperCase();
        this.k = pwd_md5.substring(0,16);
        this.iv = pwd_md5.substring(16,32);
        this.client = new WebsocketClient();
        this.client.on('connect')
        this.client.connect(url);
    }
}
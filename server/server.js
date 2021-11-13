const {Server} = require('socket.io')
const io = new Server({
    cors: {
        origin: 'http://192.168.1.240:32881',
        credentials: false
    }
})


io.on('connection', client => {
    client.emit('init', {data: 'hello world'})
})

io.listen(2222)
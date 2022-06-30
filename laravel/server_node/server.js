var io=require('socket.io')(6001,{
    cors: {
        origin: "http://localhost:3000",
      }
});
console.log('connected to port 6001');
io.on('error',(socket)=>{
    console.log('error');
});
io.on('connection',(socket)=>{
    console.log('Co nguoi vua ket noi '+socket.id)
})
var Redis=require('ioredis');
var redis=new Redis(6379);
redis.psubscribe("*",(error,count)=>{

})
redis.on('pmessage',(partner,channel,message)=>{
    console.log(partner);
    console.log(channel);
    console.log(message);
    message=JSON.parse(message);
    io.emit(channel,message.data.message);
    console.log('sent')
})
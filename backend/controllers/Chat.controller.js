
const users = {}
const Chat = (socket) => {
        // console.log("User connected:", socket.id);
        socket.emit('message',"hey user kese ho")

        socket.on('userMessage', (user)=>{
            console.log(user );
        })

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    }
module.exports = Chat;
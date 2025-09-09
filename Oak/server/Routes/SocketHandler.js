import ChatModel from "../Models/ChatModel.js";

export function socketHandler(io) {
    io.on("connection", (socket) => {

    socket.on("usersent",async(data)=>{
            try{
                const { senderId, reciverId, message, time, date } = data;

                const members = [senderId, reciverId].sort();

                let chat = await ChatModel.findOne({ members: { $all: members } });

                if (!chat) {
                chat = await ChatModel.create({
                    members,
                    messages: [{
                    senderId,
                    message,
                    time,
                    date
                    }]
                });
            } else {
                await ChatModel.updateOne(
                    { _id: chat._id },
                    {
                    $push: {
                        messages: {
                        senderId,
                        message,
                        time,
                        date
                        }
                    }
                    }
                );
            }

            io.emit('messagereceived', data);
            }catch(err){
                console.log(err);
            }
    })

    socket.on('getChat', async ({ userId1, userId2 }) => {
        try {
          const chat = await ChatModel.findOne({
            members: { $all: [userId1, userId2] }
          });

          if (chat) {
            socket.emit('chatData', chat.messages); 
          } else {
            socket.emit('chatData', []); 
          }
        } catch (err) {
          console.error(err);
          socket.emit('chatError', 'Failed to fetch chat');
        }
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
})
}
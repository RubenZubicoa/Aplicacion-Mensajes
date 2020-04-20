import Message from '../../models/Message';

const Mutation = {

    createMessage: async (_, {title, content, author}) => {
        const msg = new Message({title, content, author});
        return await msg.save();
    }
};

export default Mutation
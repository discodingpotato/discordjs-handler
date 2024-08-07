import { PrefixCommand } from "../../../types/Commands";

const pingCommand = new PrefixCommand({
    name: 'ping',
    run: async (client, message, args, prefix) => {
        return message.channel.send({
            content: 'This is a sample commnand'
        })
    }
});

export default pingCommand;
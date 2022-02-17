const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Guild } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed with the entered info.')
        .addChannelOption(option => option.setRequired(true).setName("channel").setDescription("Enter the channel you want to send this embed to."))
        .addStringOption(option => option.setRequired(true).setName("title").setDescription("Enter the title of this embed."))
        .addStringOption(option => option.setRequired(true).setName("description").setDescription("enter the description of this embed"))
        .addStringOption(option => option.setName("img").setDescription("URL for the image. (Right Click + Copy Link)")),
	async execute(interaction) {  

        const channel = interaction.options.getChannel("channel");
        const title = interaction.options.getString("title");
        const description = interaction.options.getString("description");
        const img = interaction.options.getString("img");

        if (!img) {

            const embed = new MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setColor("RED")

        await interaction.reply({ ephemeral: true, content: `Successfully sent embed in ${channel}`});

        return channel.send({ embeds: [embed] });


        }

        const embed = new MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setColor("RED")
            .setImage(`${img}`)

        await interaction.reply({ ephemeral: true, content: `Successfully sent embed in ${channel}`});

        return channel.send({ embeds: [embed] });

	},
};

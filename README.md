# How to set up the bot, by brick / deliveryexcellence.

1. Download VSC (Visual Studio Code)
2. Create a new folder -> right click -> OPEN WITH CODE

![image](https://user-images.githubusercontent.com/91328653/154478057-c7183483-6977-4e14-a909-1075212a6f48.png)

3. open terminal -> new terminal

![image](https://user-images.githubusercontent.com/91328653/154478157-d985346d-d6ab-4017-af49-d4c3ef74a206.png)

![image](https://user-images.githubusercontent.com/91328653/154478205-f5c1add7-4655-4bad-a64e-04450aafc7c0.png)


4. Type `npm init -y` (in terminal)
5. Type `npm i discord.js` (in terminal)
6. Type `npm i @discordjs/builders` (in terminal)
7. Type `npm i @discordjs/rest discord-api-types` (in terminal)

8. Once everything is installed, create folders.
`Commands` , `Events`

### Inside Commands: 
 > Create a file called `embed.js`

![image](https://user-images.githubusercontent.com/91328653/154479220-5f585945-864f-4eba-8a2c-40ca83a51fb8.png)


### Inside Events:
> Create a file called `ready.js`

![image](https://user-images.githubusercontent.com/91328653/154479352-30795f38-0663-4157-a28a-7431d2f0524c.png)

9. Now, create 3 files - `index.js`, `deploy-commands.js`, `config.json`

![image](https://user-images.githubusercontent.com/91328653/154479551-6b040e5e-cc5e-45d5-b46b-a1cc18820794.png)

10. **PASTE CODE FROM REPOSITORY INTO THE CORRESPONDING FILES**
 > (code from deploy-commands.js goes into the `deploy-commands.js` file etc. etc..)

11. Once everything is pasted, type `deploy-commands.js` into your terminal, and then type `node .`
12. Enjoy your new bot! 🎉

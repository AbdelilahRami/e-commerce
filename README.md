A ecommerce application developped using NodeJS ExpressJs, typescript, and prisma as ORM.

##Setup

Install NodeJs on your machine https://nodejs.org/en/ (choose LTS version 14.17.3)

Install ts-node globally : 
```bash
npm install -g ts-node
```
Make sure to have sqlite3 on your machine : 

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-sqlite-on-ubuntu-20-04

As a first step, navigate into to your project directory that contains the package.json file and run :
```bash
npm install
```
Next, add the Prisma CLI as a development dependency to your project: 
```bash
npm install prisma --save-dev
```
Prisma was used to generate entities from database (**prisma introspect**) and also to make it easy when we request the database.

After that run : 
```bash
npx prisma generate --schema src/prisma/schema.prisma
```
To launch the server run : 
```bash
npm run start
```

If you encountered errors delete node_modules and package.lock.json and repeat instructions.

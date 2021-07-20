A ecommerce application developped using NodeJS ExpressJs, typescript, and prisma as ORM.

##Setup

Install NodeJs on your machine https://nodejs.org/en/ (choose LTS version 14.17.3)

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

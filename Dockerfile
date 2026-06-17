# Usa a imagem oficial do Node.js na versão 22, baseada no Alpine Linux, que é leve e otimizada para produção.
FROM node:22-alpine 
# Define o diretório de trabalho dentro do contêiner como /app. 
WORKDIR /app 
# Copia os arquivos package.json e package-lock.json para o diretório de trabalho no contêiner.
COPY package*.json ./ 
# Instala as dependências do projeto usando o npm.
RUN npm install 
# Copia todos os arquivos do diretório atual para o diretório de trabalho no contêiner.
COPY . . 
# Expõe a porta 3000 para permitir que o aplicativo seja acessível externamente.
EXPOSE 3000 
# Define o comando padrão para iniciar a aplicação, que é "npm start".
CMD ["npm", "start"] 
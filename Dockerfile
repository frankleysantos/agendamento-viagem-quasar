# Use a imagem Node.js como base
FROM node:18.16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN yarn global add @quasar/cli

RUN yarn install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação será executada (substitua pela porta que sua aplicação QuasarJS utiliza)
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for iniciado
#CMD ["quasar dev"]


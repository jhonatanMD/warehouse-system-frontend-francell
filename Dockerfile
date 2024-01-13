# Utiliza la imagen oficial de Node como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /warehouse-system-frontend-francell

# Copia el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 3000, que es el puerto predeterminado para aplicaciones React
EXPOSE 3006

# Comando para iniciar la aplicación
CMD ["npm", "start"]

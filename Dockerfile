# Usar una imagen base de Node
FROM node:latest

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY . /app

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "dev", "--", "--port=3000"]

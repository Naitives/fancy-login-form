# Fancy Login Form

Este proyecto es una aplicación de inicio de sesión construida con JavaScript y React. Proporciona un formulario de inicio de sesión elegante y funcional.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
fancy-login-form
├── src
│   ├── app.js               # Punto de entrada de la aplicación
│   ├── components
│   │   └── LoginForm.js     # Componente del formulario de inicio de sesión
│   └── styles
│       └── LoginForm.css    # Estilos para el formulario de inicio de sesión
├── Dockerfile                # Instrucciones para construir la imagen de Docker
├── docker-compose.yml        # Configuración de servicios y contenedores
├── package.json              # Configuración de npm y dependencias
└── README.md                 # Documentación del proyecto
```

## Requisitos

Asegúrate de tener instalado Docker y Docker Compose en tu máquina.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd fancy-login-form
   git add .
   git commit -m "Initial commit"
   git push -u origin main --force
   ```

2. Construye la imagen de Docker:
   ```
   docker-compose build
   ```

3. Ejecuta la aplicación:
   ```
   docker-compose up
   ```

## Uso

Una vez que la aplicación esté en funcionamiento, podrás acceder al formulario de inicio de sesión en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
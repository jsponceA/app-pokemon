# App Pokédex ⚡

Una aplicación web moderna que simula una Pokédex, permitiendo explorar y conocer información detallada sobre diferentes Pokémon. Construida con React y Redux, utilizando la PokéAPI oficial.

## ✨ Características Principales

- 📱 Interfaz intuitiva y moderna con Bootstrap
- 🔍 Exploración de Pokémon con paginación
- 📊 Información detallada de cada Pokémon
- 🎯 Gestión de estado con Redux Toolkit
- 🛣️ Navegación fluida con React Router
- ⚡ Optimización de rendimiento con Vite

## 🛠️ Tecnologías Utilizadas

- React 18
- Redux Toolkit
- React Router DOM
- Bootstrap 5
- Axios
- Vite
- SASS
- React Paginate

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jsponceA/app-pokemon
```

2. Navega al directorio del proyecto:
```bash
cd app-pokemon
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera una build de producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter en archivos .js y .jsx

## 📚 Estructura del Proyecto

```
app-pokedex/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── store/          # Configuración y slices de Redux
│   ├── services/       # Servicios de API
│   └── routes/         # Configuración de rutas
└── public/             # Archivos estáticos
```

## 🎮 Funcionalidades

- Lista de Pokémon con paginación
- Vista detallada de cada Pokémon
- Información de estadísticas base
- Tipos y habilidades
- Sistema de navegación entre Pokémon
- Diseño responsive para todos los dispositivos

## 🌐 API Utilizada

Este proyecto utiliza la [PokéAPI](https://pokeapi.co/), una RESTful API que proporciona datos extensos sobre el universo Pokémon.

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 🐛 Reportar Problemas

Si encuentras algún problema o tienes una sugerencia, por favor crea un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo `LICENSE` para más detalles.

## 👏 Agradecimientos

- [PokéAPI](https://pokeapi.co/) por proporcionar los datos de Pokémon
- La comunidad de React por su documentación y recursos
- Contribuidores del proyecto

## 📝 Notas de Desarrollo

- El proyecto utiliza Bootstrap para el diseño responsive
- Se implementa Redux Toolkit para una gestión eficiente del estado
- La paginación se maneja con react-paginate para una mejor experiencia de usuario

# Manufacturing API

Aplicación web para la administración de usuarios, grupos de seguridad y niveles de acceso para un sistema de manufactura.

## Tecnologías utilizadas

**Backend:** Node.js con Express  
**Frontend:** React con Vite y Tailwind CSS  
**Base de datos:** PostgreSQL

## Estructura del proyecto

```
/
├── scripts/       # Scripts SQL para la base de datos
├── backend/       # API REST con Node.js
└── frontend/      # Interfaz web con React
```

## Requisitos previos

- Node.js
- PostgreSQL

## Instalación y ejecución

### Base de datos

Ejecutar los scripts en orden desde la carpeta `scripts/`:

1. Script de creación de base de datos, tablas y relaciones
2. Script de inicialización de niveles de acceso
3. Script de registro de usuarios con grupos de seguridad de ejemplo
4. Script para listar usuarios con sus grupos de seguridad y niveles de acceso

### Backend

```bash
cd backend
npm install
```

Crear un archivo `.env` con las variables de conexión a PostgreSQL con el siguiente formato:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/nombre_bd
```

```bash
npm run dev
```

El servidor quedará corriendo en `http://localhost:8000`.

### Frontend

```bash
cd frontend
npm install
```

Crear un archivo `.env` con la URL de la API con el siguiente formato:

```
VITE_API_URL=http://localhost:8000/api
```

```bash
npm run dev
```

## Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Listar todos los usuarios |
| GET | `/api/users/:username` | Obtener usuario por nombre de usuario |
| POST | `/api/users` | Registrar un nuevo usuario |
| GET | `/api/users/:username/groups` | Obtener grupos de seguridad de un usuario |
---
> **Nota:** El frontend consume únicamente `GET /api/users` y `POST /api/users`, correspondientes al listado y creación de usuarios requeridos en la consigna.

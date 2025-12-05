# TURORIAL-ANGULAR

Un tutorial completo del framework Angular. Una web estática generada con Angular + TypeScript que explica paso a paso cómo funciona Angular, con ejemplos desde “Hola Mundo” hasta arquitectura de componentes, rutas, servicios y despliegue.  

> ⚠️ Este proyecto ha sido creado como actividad para la asignatura de “Desarrollo de Aplicaciones en Red” de la universidad.  

---

## 📖 Qué contiene este repositorio

- Código fuente dentro de `src/`: componentes standalone, rutas, estilos SCSS, páginas HTML.  
- Archivos de configuración de Angular (angular.json, tsconfig, etc.).  
- Estilos globales y estructuración de CSS/SCSS para el tutorial.  
- Contenido del tutorial en `pages/blog/`, con texto explicativo estructurado (secciones, subsecciones).

---

## 🧠 Estructura del proyecto

```bash
tutorial-angular/
│
├── src/                    # Código fuente Angular
│   ├── app/                # Componentes, rutas, configuración
│   ├── pages/              # Páginas del tutorial (home, blog, etc.)
│   ├── assets/             # Imágenes, recursos, favicon, etc.
│   └── index.html          # HTML base
│
├── angular.json            # Configuración del build
├── tsconfig*.json          # Configuración de TypeScript
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo de documentación
```

---

## 🚀 Cómo ejecutar localmente

Para ver el proyecto en tu máquina:

```bash
# Clonar el repositorio
git clone https://github.com/yfontanet/tutorial-angular.git
cd tutorial-angular

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ng serve
```

Luego abre en el navegador: http://localhost:4200

---

## 🔧 Cómo generar build de producción / desplegar

Para preparar los archivos para producción y publicación (por ejemplo en GitHub Pages):

```bash
# Compilar optimizado para producción
ng build --configuration production

# Publicar con angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/act2
```

Una vez desplegado, el sitio estará disponible en:
https://yfontanet.github.io/tutorial-angular/

---

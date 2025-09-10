# SuperMarket - Ecommerce en React

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)

Ecommerce moderno para supermercado desarrollado en React como trabajo práctico final.

## 🚀 Características

- **Catálogo de productos** con grid responsive
- **Páginas de detalle** de productos completas
- **Sistema de autenticación** (Login y Register)
- **Diseño moderno y completamente responsive**
- **Formularios con validación en tiempo real**
- **Navegación intuitiva** con React Router
- **Componentes reutilizables** y modulares

## 🛠️ Tecnologías

- **React 18** - Biblioteca principal
- **React Router DOM** - Navegación entre páginas
- **CSS3** - Estilos con Grid, Flexbox y animaciones
- **Font Awesome** - Iconografía
- **Vite** - Herramientas de build y desarrollo

## 📦 Estructura del Proyecto
```bash
📦 src/
 ┣ 📂 **components/** # Componentes reutilizables
 ┃ ┣ 📜 Button.js           # Botón personalizado
 ┃ ┣ 📜 Footer.js           # Pie de página
 ┃ ┣ 📜 Header.js           # Navegación principal
 ┃ ┗ 📜 ProductCard.js      # Tarjeta de producto
 ┣ 📂 **pages/** # Páginas de la aplicación
 ┃ ┣ 📜 Home.js             # Página principal
 ┃ ┣ 📜 Login.js            # Inicio de sesión
 ┃ ┣ 📜 ProductDetail.js    # Detalle de producto
 ┃ ┗ 📜 Register.js         # Registro de usuario
 ┣ 📂 **data/** # Datos mock
 ┃ ┗ 📜 products.js         # Catálogo de productos
 ┗ 📜 App.jsx                 # Componente principal
```
## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Sistema de routing con React Router
- [x] Diseño responsive para móviles, tablets y desktop
- [x] Catálogo de productos con grid de tarjetas
- [x] Páginas de detalle de productos individuales
- [x] Formularios de login y registro con validación
- [x] Navegación entre todas las páginas
- [x] Componentes reutilizables
- [x] Estados de carga y manejo de errores

### 📱 Responsive Design
La aplicación se adapta perfectamente a:
- 📱 Móviles (320px+)
- 📟 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd romero_final

2. **Instalar dependencias**
   ```bash
   npm install

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev

4. **Abrir en el navegador**
   ```bash
   http://localhost:5173

## 🎨 Componentes Principales

**ProductCard**
Componente reutilizable para mostrar productos en grid.
  ```bash
  <ProductCard 
    product={productData}
    onAddToCart={handleAddToCart}
  />
  ```

**Button**
Botón personalizado con múltiples variantes y estados.
  ```bash
  <Button
    variant="primary"
    size="large"
    isLoading={isLoading}
    onClick={handleClick}
  >
    Comprar ahora
  </Button>
  ```
## 📊 Datos de Ejemplo
La aplicación incluye 20 productos mock con:

- Imágenes de alta calidad

- Precios variados y realistas

- 15 categorías diferentes

- Sistema de stock e inventario

- Códigos de producto únicos

## 🎨 Diseño y UX
- Paleta de colores: Azul corporativo, verde de confirmación, naranja de acciones

- Tipografía: Sistema moderno y legible

- Iconografía: Font Awesome para consistencia visual

- Animaciones: Transiciones suaves y feedback visual

- Layout: Grid para productos, Flexbox para elementos de UI

## 📋 Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build de producción
```
## 👨‍💻 Autor
Gabriel Romero - Desarrollo frontend y diseño
## 📄 Licencia
Este proyecto fue desarrollado como trabajo práctico final. Todos los derechos reservados.

# Maik & Co. - Plataforma Web

## Descripción General

Maik & Co. es una plataforma web moderna que conecta propietarios de viviendas con profesionales verificados en toda España. Permite buscar, comparar y contratar servicios profesionales de forma segura, eficiente y transparente. Esta demo es una versión visual y funcional orientada a mostrar la experiencia de usuario, el diseño y la arquitectura front-end.

---

## Tabla de Contenidos

- [Maik \& Co. - Plataforma Web](#maik--co---plataforma-web)
  - [Descripción General](#descripción-general)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características Principales](#características-principales)
    - [🔄 **Cambios Recientes (Última Actualización)**](#-cambios-recientes-última-actualización)
    - [🎯 **Sistema de Autenticación Integrado**](#-sistema-de-autenticación-integrado)
    - [🏠 **Panel de Cliente Avanzado**](#-panel-de-cliente-avanzado)
    - [👤 **Gestión de Perfiles**](#-gestión-de-perfiles)
    - [🎨 **Diseño y Experiencia de Usuario**](#-diseño-y-experiencia-de-usuario)
    - [📋 **Contenido y Legal**](#-contenido-y-legal)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Guía para Usuarios](#guía-para-usuarios)
    - [🚀 **Cómo Usar la Plataforma**](#-cómo-usar-la-plataforma)
    - [📱 **Funcionalidades Destacadas**](#-funcionalidades-destacadas)
  - [Guía para Desarrolladores](#guía-para-desarrolladores)
    - [🛠️ **Requisitos y Instalación**](#️-requisitos-y-instalación)
    - [🔧 **Personalización y Desarrollo**](#-personalización-y-desarrollo)
      - [**Modificar Datos de Ejemplo**](#modificar-datos-de-ejemplo)
      - [**Personalizar Estilos**](#personalizar-estilos)
      - [**Agregar Nuevas Funcionalidades**](#agregar-nuevas-funcionalidades)
      - [**Conectar con Backend**](#conectar-con-backend)
    - [📦 **Dependencias**](#-dependencias)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [🎨 **Frontend**](#-frontend)
    - [🚀 **Características Avanzadas**](#-características-avanzadas)
  - [Recursos y Medios](#recursos-y-medios)
    - [🖼️ **Imágenes**](#️-imágenes)
    - [🎨 **Estilos**](#-estilos)
    - [⚙️ **Scripts**](#️-scripts)
  - [Legal](#legal)
  - [Contacto](#contacto)

---

## Características Principales

### 🔄 **Cambios Recientes (Última Actualización)**

- **Sistema de Modales Unificado**: Implementado en `index.html` y `profesional.html`
- **Eliminación de Archivos Obsoletos**: Removidos `registro-profesional.html`, `login.html`, `login-profesional.html`
- **Funcionalidad de Cambio entre Modales**: Nueva función `switchToLogin()` para navegar entre registro y login
- **Botones Actualizados**: Todos los botones de registro ahora abren modales en lugar de redirigir
- **Estilos Mejorados**: Botón "Plataforma" con efecto hover personalizado

### 🎯 **Sistema de Autenticación Integrado**

- **Modales de Login y Registro**: Formularios integrados en ventanas modales sin redirección
- **Selección de Tipo de Usuario**: Elección entre Cliente y Profesional en el mismo modal
- **Registro de Profesionales**: Formulario específico con campo "Profesión" obligatorio
- **Navegación Fluida**: Transiciones suaves entre selección de tipo y formularios
- **Sistema Unificado**: Mismo sistema de modales en `index.html` y `profesional.html`
- **Cambio entre Modales**: Funcionalidad para cambiar de registro a login sin cerrar ventanas

### 🏠 **Panel de Cliente Avanzado**

- Dashboard con navegación lateral intuitiva
- Búsqueda avanzada de profesionales con filtros múltiples
- Fichas de profesionales con valoraciones y reseñas
- Gestión de proyectos, favoritos y soporte integrado

### 👤 **Gestión de Perfiles**

- Perfil de cliente editable con diseño moderno
- Perfil de profesional con información detallada
- Sistema de valoraciones y reseñas
- Gestión de especialidades y ubicaciones

### 🎨 **Diseño y Experiencia de Usuario**

- **Responsive Design**: Adaptable a todos los dispositivos
- **Modales Interactivos**: Formularios integrados sin salir de la página
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Accesibilidad**: Cumple estándares de accesibilidad web

### 📋 **Contenido y Legal**

- Blog integrado con artículos informativos
- FAQ interactivo con categorías
- Páginas legales completas: Términos, Privacidad y Cookies
- Historia de la empresa con diseño atractivo

---

## Estructura del Proyecto

```
Maik & co._Pagina_web_plataforma/
├── index.html                  # Landing page principal con modales integrados
├── plataforma-cliente.html     # Dashboard del cliente
├── perfil-cliente.html         # Edición de perfil de cliente
├── perfil-profesional.html     # Ficha de profesional (demo)
├── profesional.html            # Portal para profesionales con modales integrados
├── blog.html                   # Blog de la plataforma
├── faq.html                    # Preguntas frecuentes interactivas
├── nuestra-historia.html       # Historia de la empresa
├── mantenimiento.html          # Página de mantenimiento
├── terminos.html               # Términos y condiciones
├── privacidad.html             # Política de privacidad
├── cookies.html                # Política de cookies
├── css/                       # Hojas de estilo CSS
│   ├── styles.css              # Estilos globales con modales y formularios
│   ├── plataforma-cliente.css  # Estilos del dashboard
│   ├── profesional.css         # Estilos específicos para página profesional
│   └── ...                    # Otros estilos por página
├── js/                        # Scripts JavaScript
│   ├── main.js                 # Funciones generales, animaciones y modales
│   ├── plataforma-cliente.js   # Lógica del dashboard
│   ├── registro.js             # Validación de formularios de registro
│   ├── contadores.js           # Contadores de usuarios/servicios
│   └── faq.js                  # Lógica de preguntas frecuentes
├── img/                       # Recursos gráficos
│   ├── favicon/                # Favicon del sitio
│   ├── Logo/                   # Logo de la empresa
│   ├── Profesionales.png       # Imagen principal de profesionales
│   └── blog/                   # Imágenes del blog
└── README.md                  # Este archivo
```

---

## Guía para Usuarios

### 🚀 **Cómo Usar la Plataforma**

1. **Acceso Principal**: Abre `index.html` en tu navegador
2. **Registro/Login**: 
   - Haz clic en "Iniciar sesión" o "Registrarse"
   - Selecciona tu tipo de usuario (Cliente o Profesional)
   - Completa el formulario correspondiente
   - Cambia entre registro y login sin cerrar el modal
3. **Portal Profesional**: Accede a `profesional.html` para el área de profesionales
4. **Navegación**: Usa el menú superior para acceder a diferentes secciones
5. **Dashboard**: Accede a `plataforma-cliente.html` para ver el panel completo

### 📱 **Funcionalidades Destacadas**

- **Modales Integrados**: Todo el proceso de login/registro se realiza sin salir de la página principal
- **Sistema Unificado**: Mismos modales en `index.html` y `profesional.html`
- **Registro de Profesionales**: Incluye campo obligatorio "Profesión" con múltiples opciones
- **Navegación entre Modales**: Cambio fluido entre registro y login
- **Búsqueda Avanzada**: Filtros por categoría, ubicación y valoraciones
- **Perfiles Completos**: Información detallada de profesionales y clientes

---

## Guía para Desarrolladores

### 🛠️ **Requisitos y Instalación**

- **Requisitos**: Solo necesitas un navegador moderno (Chrome, Firefox, Edge, Safari)
- **Instalación**: No requiere instalación ni dependencias externas
- **Ejecución**: Simplemente clona el repositorio y abre los archivos HTML

### 🔧 **Personalización y Desarrollo**

#### **Modificar Datos de Ejemplo**

- Los datos están en los archivos JavaScript (`js/` folder)
- Puedes cambiar profesionales, categorías, valoraciones, etc.

#### **Personalizar Estilos**

- Los estilos están en la carpeta `css/`
- Variables CSS globales en `css/styles.css`
- Estilos específicos por página en archivos separados

#### **Agregar Nuevas Funcionalidades**

- **Modales**: Los modales están en `index.html` y `profesional.html` con JavaScript en `main.js`
- **Formularios**: Validación en `js/registro.js`
- **Animaciones**: Funciones en `js/main.js`
- **Sistema de Modales**: Funciones `openRegisterModal()`, `showRegisterForm()`, `switchToLogin()` en ambos archivos

#### **Conectar con Backend**

- Adapta la lógica en los archivos JavaScript
- Modifica los formularios para enviar datos a tu API
- Implementa autenticación real en lugar de la demo

### 📦 **Dependencias**

- **Font Awesome**: Iconos (CDN)
- **Google Fonts**: Tipografía Inter (CDN)
- **AOS**: Animaciones (opcional, CDN)

---

## Tecnologías Utilizadas

### 🎨 **Frontend**

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para consistencia
  - Grid y Flexbox para layouts
  - Animaciones y transiciones
  - Diseño responsive
- **JavaScript ES6+**: 
  - Funciones modernas
  - Manipulación del DOM
  - Validación de formularios
  - Gestión de modales

### 🚀 **Características Avanzadas**

- **Modales Interactivos**: Sistema completo de login/registro en múltiples páginas
- **Formularios Inteligentes**: Validación en tiempo real con campo "Profesión" obligatorio
- **Navegación entre Modales**: Cambio fluido entre registro y login sin cerrar ventanas
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Responsive Design**: Adaptable a todos los dispositivos
- **Accesibilidad**: Cumple estándares WCAG

---

## Recursos y Medios

### 🖼️ **Imágenes**

- `img/Logo/Logo.jpg`: Logo principal de la empresa
- `img/favicon/favicon.png`: Favicon del sitio
- `img/Profesionales.png`: Imagen principal de profesionales
- `img/blog/`: Imágenes para el blog

### 🎨 **Estilos**

- `css/styles.css`: Estilos globales, variables CSS y modales
- `css/plataforma-cliente.css`: Dashboard del cliente
- `css/profesional.css`: Estilos específicos para página profesional
- **Modales**: Estilos integrados en `css/styles.css` para formularios y ventanas modales

### ⚙️ **Scripts**

- `js/main.js`: Funciones generales, animaciones, modales y navegación
- `js/plataforma-cliente.js`: Lógica del dashboard y gestión de sesión
- `js/registro.js`: Validación de formularios de registro
- `js/contadores.js`: Contadores dinámicos de usuarios/servicios
- `js/faq.js`: Lógica interactiva de preguntas frecuentes
- **Funciones de Modales**: `openRegisterModal()`, `showRegisterForm()`, `switchToLogin()`, `closeRegisterModal()`

---

## Legal

- [Términos y Condiciones](terminos.html)
- [Política de Privacidad](privacidad.html)
- [Política de Cookies](cookies.html)

---

## Contacto

- **Email:** info@maikandco.com
- **Teléfono:** +34 900 123 456
- **Dirección:** Calle Principal 123, 48001 Bilbao, España
- **Horario:** Lunes a Viernes de 9:00 a 18:00
- **Redes Sociales:**
  - [Facebook](https://facebook.com/maikandco)
  - [Twitter](https://twitter.com/maikandco)
  - [Instagram](https://instagram.com/maikandco)
  - [LinkedIn](https://linkedin.com/company/maikandco)

---

© 2025 Maik & Co. Todos los derechos reservados.

*Unimos personas, solucionamos problemas.* 🚀 
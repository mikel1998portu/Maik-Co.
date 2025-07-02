# Maik & Co. - Plataforma Web

## Descripción General
Maik & Co. es una plataforma web moderna que conecta propietarios de viviendas con profesionales verificados en toda España. Permite buscar, comparar y contratar servicios profesionales de forma segura, eficiente y transparente. Esta demo es una versión visual y funcional orientada a mostrar la experiencia de usuario, el diseño y la arquitectura front-end.

---

## Tabla de Contenidos
- [Maik \& Co. - Plataforma Web](#maik--co---plataforma-web)
  - [Descripción General](#descripción-general)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características Principales](#características-principales)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Guía para Usuarios](#guía-para-usuarios)
  - [Guía para Desarrolladores](#guía-para-desarrolladores)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Recursos y Medios](#recursos-y-medios)
  - [Legal](#legal)
  - [Contacto](#contacto)

---

## Características Principales
- Panel de cliente con navegación lateral (dashboard)
- Búsqueda avanzada de profesionales con filtros y tarjetas visuales
- Ficha de profesional con valoración, reseñas y acciones
- Gestión de proyectos, favoritos y soporte
- Perfil de cliente editable y moderno
- Estilos CSS avanzados y responsive
- Páginas legales: Términos, Privacidad y Cookies
- Demo visual, sin backend real (los datos son de ejemplo)

---

## Estructura del Proyecto

```
Maik & co._Pagina_web_plataforma/
├── index.html                  # Landing page principal
├── plataforma-cliente.html     # Dashboard del cliente
├── perfil-cliente.html         # Edición de perfil de cliente
├── perfil-profesional.html     # Ficha de profesional (demo)
├── profesional.html            # Portal para profesionales
├── registro-cliente.html       # Registro de clientes
├── registro-profesional.html   # Registro de profesionales
├── login.html                  # Login de clientes
├── login-profesional.html      # Login de profesionales
├── blog.html                   # Blog de la plataforma
├── faq.html                    # Preguntas frecuentes
├── nuestra-historia.html       # Historia de la empresa
├── mantenimiento.html          # Página de mantenimiento
├── terminos.html               # Términos y condiciones
├── privacidad.html             # Política de privacidad
├── cookies.html                # Política de cookies
├── css/                       # Hojas de estilo CSS
│   ├── styles.css              # Estilos globales
│   ├── plataforma-cliente.css  # Estilos del dashboard
│   ├── ...                    # Otros estilos por página
├── js/                        # Scripts JavaScript
│   ├── main.js                 # Funciones generales y animaciones
│   ├── plataforma-cliente.js   # Lógica del dashboard
│   ├── registro.js             # Validación de formularios de registro
│   ├── contadores.js           # Contadores de usuarios/servicios
│   ├── faq.js                  # Lógica de preguntas frecuentes
├── img/                       # Recursos gráficos
│   ├── favicon/                # Favicon del sitio
│   ├── Logo/                   # Logo de la empresa
│   ├── Profesionales.png       # Imagen principal de profesionales
│   └── blog/                   # Imágenes del blog
└── README.md                  # Este archivo
```

---

## Guía para Usuarios
1. Abre `index.html` o `plataforma-cliente.html` en tu navegador.
2. Navega por las secciones usando el menú lateral o superior.
3. Prueba la búsqueda de profesionales, edición de perfil, soporte, etc.
4. Los datos son de ejemplo y no se almacenan en un backend real.

---

## Guía para Desarrolladores
- **Requisitos:** Solo necesitas un navegador moderno (Chrome, Firefox, Edge, etc.).
- **Instalación:** No requiere instalación ni dependencias externas. Simplemente clona el repositorio y abre los archivos HTML.
- **Personalización:**
  - Puedes modificar los datos de ejemplo en los archivos JS.
  - Los estilos están en la carpeta `css/` y son fácilmente editables.
  - Para conectar a un backend real, adapta la lógica en los JS y los formularios.
- **Dependencias externas:**
  - No se utilizan frameworks ni librerías externas obligatorias. Opcionalmente, se carga `lazysizes` para lazy loading de imágenes si el navegador no lo soporta.

---

## Tecnologías Utilizadas
- HTML5 y CSS3 (responsive, variables CSS, grid/flexbox)
- JavaScript (ES6+)
- Optimización SEO básica
- Accesibilidad y buenas prácticas UX/UI
- Integración opcional de APIs (para futuras versiones)

---

## Recursos y Medios
- **Imágenes:**
  - `img/Logo/Logo.jpg`: Logo principal
  - `img/favicon/favicon.png`: Favicon
  - `img/Profesionales.png`: Imagen de profesionales
  - `img/blog/`: Imágenes para el blog (puede estar vacío)
- **Estilos:**
  - `css/styles.css`: Estilos globales y variables
  - `css/plataforma-cliente.css`: Dashboard cliente
  - Otros archivos CSS para páginas específicas
- **Scripts:**
  - `js/main.js`: Funciones generales, animaciones, lazy loading
  - `js/plataforma-cliente.js`: Navegación y control de sesión
  - `js/registro.js`: Validación de formularios
  - `js/contadores.js`: Contadores de usuarios/servicios
  - `js/faq.js`: Lógica de preguntas frecuentes

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

© 2026 Maik & Co. Todos los derechos reservados.

*Unimos personas, solucionamos problemas.* 

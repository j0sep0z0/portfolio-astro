# INSTRUCCIONES DE ESTILO Y DISEÑO: Portfolio Minimalismo Industrial

**Perfil del Usuario:** Profesional Senior (48 años), enfoque en Arquitectura/Diseño.
**Objetivo Visual:** Estética seria, sofisticada, técnica y "arquitectónica".

## 1. Paleta de Colores (Tailwind CSS)

Configura el tema de Tailwind con los siguientes valores exactos:

- **Carbon (Base):** #1A1A1B (Fondo principal)
- **Carbon-Deep (Dark):** #121212 (Navbar, Cards, Pie de página)
- **Carbon-Light (Bordes):** #2E2E30 (Líneas divisorias, bordes sutiles)
- **Lavender (Acento):** #B497D6 (Solo para elementos críticos y estados activos)
- **Lavender-Muted:** #9575CD (Hovers o estados de clic)

## 2. Reglas de Composición y UI

- **Fondo:** No usar colores planos. Aplicar siempre un gradiente radial o lineal: `bg-gradient-to-tr from-[#1A1A1B] via-[#1A1A1B] to-[#2D2438]`.
- **Minimalismo Industrial:** Priorizar el espacio negativo (espacio en blanco/negro). Nada de sombras pesadas ni decoraciones innecesarias.
- **Bordes:** Usar bordes finos (1px) en lugar de sombras. Color de borde preferido: `border-carbon-light`.
- **Botones:** Estilo "Ghost". Borde lavanda, texto lavanda, fondo transparente. En hover: fondo lavanda y texto oscuro (#121212).
- **Tipografía:** - Títulos: Sans-serif geométrica (inter, montserrat) con `font-bold` or `font-black`.
  - Cuerpo: Sans-serif limpia con tracking (espaciado de letras) ligeramente aumentado.

## 3. Guía de Uso del Lavanda (Acento)

- El lavanda NO debe dominar. Debe aparecer en:
  - Una sola palabra de un título importante.
  - El icono del logo.
  - Puntos de un Timeline de experiencia.
  - La barra de scroll o indicadores de progreso.
  - El estado 'active' de los enlaces del menú.

## 4. Comportamiento de Imágenes

- Todas las imágenes deben tener un filtro inicial de escala de grises (`grayscale`).
- Al hacer hover sobre una imagen, debe transicionar suavemente a color o aplicar un ligero tinte lavanda `mix-blend-multiply`.

# Documentación - Tienda de Tecnología

## Descripción General

Bienvenidos a **La Tienda de Tecnología**. Somos una tienda online donde podés encontrar los productos tecnológicos más copados del momento: smartphones, laptops, tabletas, auriculares, cámaras y relojes inteligentes. Nuestra web está diseñada para que navegues de manera fácil y rápida, con una experiencia de usuario de primer nivel. ¡Hasta tenemos nieve en invierno para que te sientas bien en onda con el clima!

---

## Estructura del Proyecto

### 1. HTML (Páginas Principales)

Estas son las páginas principales que forman parte de la estructura del sitio:

- **index.html**: Es la página principal, donde vas a encontrar un carrusel con los productos más destacados, una lista con descripciones y reseñas de usuarios, y un botón de "Conócenos" para saber más de nosotros.
- **contacto.html**: Acá podés mandar un mensaje con preguntas o comentarios a través de un formulario de contacto. Además, te dejamos nuestros links de redes sociales y un mapa interactivo para que nos encuentres fácil.
- **carrito.html**: Aquí se ve el carrito de compras con todos los productos que elegiste, junto con su cantidad, precio unitario, subtotal y total de la compra.

### 2. CSS (Estilos)

El diseño visual de la tienda se compone de lo siguiente:

- **header**: En el encabezado vas a ver un fondo rojo con onda navideña y una barra de navegación bien centrada para ir a las secciones de productos, contacto y música.
- **productos**: Los productos se muestran en un grid que se adapta a cualquier dispositivo, cada uno con su imagen, título, descripción y un botoncito para agregar al carrito.
- **footer**: El pie de página tiene la info de copyright con un toque dorado que le da ese estilo especial.
- **modal**: Una ventanita emergente para que conozcas más sobre nosotros y lo que hacemos.
- **efecto de nieve**: Durante el invierno, verás copitos de nieve cayendo de manera aleatoria sobre la página. ¡Le da un toque muy festivo!

### 3. JavaScript (Funcionalidad)

- **Agregar al Carrito**: Los botones "Agregar al carrito" permiten a los usuarios sumar productos al carrito. Además, la información se guarda en el `localStorage`, para que no pierdas lo que ya seleccionaste.
- **Efecto de Nieve**: Un script genera copitos de nieve cayendo aleatoriamente sobre la página, creando un ambiente navideño.
- **Carrusel de Productos**: Los productos destacados se muestran en un carrusel interactivo para que puedas ver más opciones sin tener que recargar la página.

---

## Funcionalidades

### 1. Carrito de Compras

El carrito es donde podés ver los productos que elegiste, el total de tu compra, y si querés, podés eliminar lo que no te interese. Lo mejor es que, si cerrás la página y volvés después, el carrito recuerda lo que habías sumado, gracias al `localStorage`.

### 2. Formulario de Contacto

Si necesitás hacer alguna consulta, tenemos un formulario para que nos escribas directamente. Usamos **Formspree** para manejar los correos electrónicos, así que cualquier duda que tengas, ¡nos llega al toque!

### 3. Redes Sociales y Ubicación

En la página de contacto podés encontrar todos nuestros links a redes sociales para estar al tanto de nuestras novedades, y también te dejamos un mapa interactivo de Google Maps para que nos ubiques sin problemas.

---

## Estilo y Diseño

### 1. Diseño Responsivo

El diseño de la web se adapta perfectamente a cualquier dispositivo. Usamos **media queries** y el framework **Bootstrap** para que la experiencia sea óptima tanto en celulares como en computadoras de escritorio.

### 2. Tema Navideño

Durante la temporada de fiestas, el sitio tiene una onda navideña con colores rojos y dorados, y por supuesto, el efecto de nieve que le da ese toque mágico.

### 3. Interactividad

Cuando pasás el ratón por encima de un producto en la página de inicio, ¡verás cómo se agranda un poco! Es mi forma de atraer tu atención para que no te pierdas nada.

---

## Tecnologías Utilizadas

- **HTML**: La estructura básica de todas las páginas del sitio.
- **CSS**: Los estilos visuales para que todo se vea prolijo y bien bonito.
- **JavaScript**: La magia detrás del carrito de compras y el efecto de nieve.
- **Bootstrap**: Framework que uso para garantizar que el diseño se vea bien en cualquier dispositivo.
- **Font Awesome / Bootstrap Icons**: Los iconitos que aparecen en el sitio para hacer todo más claro y atractivo.
- **Formspree**: El servicio que uso para gestionar el formulario de contacto.

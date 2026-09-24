# Entrega de AdsLatam

## Estado actual

- Landing publicada: https://adslatam.vercel.app/
- Página de confirmación: https://adslatam.vercel.app/compra-completada
- Repositorio público: https://github.com/tdobleta/Adslatam
- Los packs estáticos disponibles son de 25 unidades por US$ 6.99 y 50 unidades por US$ 9.99.
- El pack independiente de videos de dropshipping tiene 50 videos por US$ 14.99.
- La base de datos de pedidos está preparada y `DATABASE_URL` ya está configurada en Vercel.
- `LEMONSQUEEZY_TEST_MODE` está en `false` para producción.

## Estructura del sitio

- `index.html`: la landing. Estilos en `assets/landing.css` y carrito en `assets/landing.js`.
- `compra-completada.html`: página de confirmación y acceso a las carpetas.
- `lumen/`: sistema de diseño Lumen (tokens, componentes y guía en `lumen/README.md`).
- Los precios de vitrina de `assets/landing.js` deben coincidir con `api/_catalog.js`, que es el que cobra.

## Pendiente antes de vender

1. Esperar la aprobación de la cuenta de Lemon Squeezy.
2. Crear una API key de producción y cargarla en Vercel como `LEMONSQUEEZY_API_KEY`.
3. Crear o identificar la variante de producción y cargar su ID como `LEMONSQUEEZY_VARIANT_ID`.
4. Crear en Lemon Squeezy el webhook `https://adslatam.vercel.app/api/webhooks/lemonsqueezy`, guardar su secreto en Vercel como `LEMONSQUEEZY_WEBHOOK_SECRET` y activar los eventos de creación de pedido, reembolso y fallo.
5. Crear las carpetas finales de Google Drive y cargar sus enlaces como JSON en `DRIVE_FOLDERS`. Cada clave debe coincidir con un `product_id` del catálogo, por ejemplo `static_fashion_25` o `dropship_100`.
6. Después de guardar las variables, volver a desplegar y hacer una compra real de importe bajo. Verificar que el pedido queda pagado y que la página de confirmación muestra el enlace correcto.

Mientras falten la API key, la variante, el secreto del webhook o las carpetas de Drive, la página puede verse pero la entrega automática no está lista para clientes.

## Antes de entregar la PC

- Cerrar sesión en Lemon Squeezy, Vercel, GitHub, Google Drive, Neon y cualquier otro servicio usado.
- Borrar credenciales guardadas del navegador y quitar el perfil personal de Chrome.
- Revocar o rotar cualquier API key que haya estado copiada en archivos locales, capturas o mensajes.
- Si el comprador no recibe el proyecto, borrar esta carpeta local después de conservar una copia privada.
- No colocar claves reales en este repositorio: es público.


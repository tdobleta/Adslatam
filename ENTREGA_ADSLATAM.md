# Entrega de Sora

## Estado actual

- Marca: Sora. Dominio: https://www.sorathemes.com (hoy también responde en https://adslatam.vercel.app).
- Titular: Virginia Barbeito, persona humana, Argentina. Contacto: soporte@sorathemes.com.
- Página de confirmación: https://www.sorathemes.com/compra-completada
- Páginas legales: /terminos, /privacidad, /reembolsos y /arrepentimiento.
- Repositorio público: https://github.com/tdobleta/Adslatam
- Los packs estáticos disponibles son de 25 unidades por US$ 6.99 y 50 unidades por US$ 9.99.
- El pack independiente de videos de dropshipping tiene 50 videos por US$ 14.99.
- La base de datos de pedidos está preparada y `DATABASE_URL` ya está configurada en Vercel.
- Los pagos se cobran con Mercado Pago Checkout Pro.

## Estructura del sitio

- `index.html`: la landing. Estilos en `assets/landing.css` y carrito en `assets/landing.js`.
- `compra-completada.html`: página de confirmación y acceso a las carpetas.
- `lumen/`: sistema de diseño Lumen (tokens, componentes y guía en `lumen/README.md`).
- Los precios de vitrina de `assets/landing.js` deben coincidir con `api/_catalog.js`, que es el que cobra.
- `api/checkout.js`: crea el pedido y la preferencia de Mercado Pago.
- `api/webhooks/mercadopago.js`: único punto que marca un pedido como pagado. Consulta el pago a Mercado Pago, verifica importe, moneda y referencia, y tolera notificaciones repetidas.

## Dominio sorathemes.com

- Hecho: en Vercel están `sorathemes.com` y `www.sorathemes.com`, y `sorathemes.com` redirige a `www.sorathemes.com`.
- Hecho: DNS en Hostinger con `A @ → 216.198.79.1` y `CNAME www → 9643a98f0d4da193.vercel-dns-017.com`.
- Pendiente: cambiar la variable `PUBLIC_BASE_URL` a `https://www.sorathemes.com` y volver a desplegar.
- Importante: toda URL que se cargue en proveedores externos (webhook de Mercado Pago, dLocal) debe usar `www`. Una URL sin `www` recibe una redirección, y los webhooks no siguen redirecciones.
- Pendiente: el correo `soporte@sorathemes.com`, que figura en toda la web y en las páginas legales. Si se usa un reenvío gratuito con registros MX, no deben quedar otros registros MX en la zona DNS.

## Pendiente antes de vender

1. En [Tus integraciones](https://www.mercadopago.com.ar/developers/panel/app), crear una aplicación de tipo Checkout Pro.
2. Copiar el Access Token **de prueba** (empieza con `TEST-`) y cargarlo en Vercel como `MP_ACCESS_TOKEN`. Nunca ponerlo en el código.
3. En la aplicación, sección Webhooks, configurar la URL `https://www.sorathemes.com/api/webhooks/mercadopago`, marcar el evento **Pagos** y guardar la clave secreta en Vercel como `MP_WEBHOOK_SECRET`.
4. Elegir la moneda: `MP_CURRENCY=USD` (precios del catálogo) o `MP_CURRENCY=ARS` con `MP_ARS_PER_USD` (pesos por dólar, por ejemplo `1400`). Si Mercado Pago rechaza USD en la cuenta, usar ARS.
5. Crear las carpetas finales de Google Drive y cargar sus enlaces como JSON en `DRIVE_FOLDERS`. Cada clave debe coincidir con un `product_id` del catálogo, por ejemplo `static_fashion_50` o `dropship_100`.
6. Volver a desplegar y probar con las [tarjetas de prueba](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integration-test): pago aprobado, rechazado, pendiente y cancelado, y cerrar la ventana antes de volver a la tienda. En todos los casos, la descarga solo debe aparecer con el pago aprobado.
7. Cambiar `MP_ACCESS_TOKEN` por el Access Token de producción (empieza con `APP_USR-`), volver a desplegar y hacer una compra real de importe bajo.

dLocal (para compradores fuera de Argentina) se integra cuando aprueben la cuenta: hace falta saber qué producto habilitan y sus credenciales.

Revisar las páginas legales con un contador o abogado. Probablemente haya que agregar el CUIT y el domicilio de la titular.

Mientras falten el Access Token o las carpetas de Drive, la página puede verse pero la entrega automática no está lista para clientes.

## Antes de entregar la PC

- Cerrar sesión en Mercado Pago, Vercel, GitHub, Google Drive, Neon y cualquier otro servicio usado.
- Borrar credenciales guardadas del navegador y quitar el perfil personal de Chrome.
- Revocar o rotar cualquier API key que haya estado copiada en archivos locales, capturas o mensajes.
- Si el comprador no recibe el proyecto, borrar esta carpeta local después de conservar una copia privada.
- No colocar claves reales en este repositorio: es público.


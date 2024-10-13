### Colección de datos en Postman o Insomnia 

## Q1. Obtener los detalles de un producto dado su ID.
HGETALL producto:ps001:sucursal:001
url: GET http://localhost:3000/producto/ps001/sucursal/001

## Q2. Añadir un nuevo cliente al conjunto de clientes de una sucursal y verificar que no exista previamente

exists cliente:XYZ016
exists sucursal:001
SISMEMBER sucursal:001:cliente "XYZ016"
SADD sucursal:001:cliente "XYZ16"

url: POST http://localhost:3000/clients/add 
json:
{
  "cliente": "RFC123",
	"nombre":"Juan Peralta",
	"sucursal":"001"
}

## Q3.  Registrar una nueva venta para un cliente en específico.
exists sucursal:001
exists cliente:XYZ11
exists producto:PS003
RPUSH sucursal:001:ventas:2024 "VENTA:20001:PRODUCTO:ps002:CANTIDAD:4:COSTO_UNITARIO:60:TOTAL:240:CLIENTE:RFC23456:SUCURSAL:001:FECHA:20240925:HORA:123500"

url: POST http://localhost:3000/sales/2024/sucursal/001 
json: 
{
	"ventaId":"2001",
	"productoId":"ps001",
	"cantidad":"2",
	"costo_unitario":"60",
	"rfc":"RFC1234",
	"fecha":"20240722",
	"hora":"092012"
}

## Q4. Buscar sucursales cercanas a una ubicación geográfica específica usando consultas geoespaciales.
GEORADIUS sucursal -104.892315 21.511813 100 km WITHDIST

url: NO REALIZADA
json: NO REALIZADA 
## Q5. Obtener el conjunto de clientes que han comprado en una sucursal específica.
SMEMBERS sucursal:001:cliente

URL: GET http://localhost:3000/clients/sucursal/001 

## Q6. Registro histórico de los clientes que han hecho compras en cada sucursal
SMEMBERS sucursal:001:clientes
SMEMBERS sucursal:002:clientes
SMEMBERS sucursal:003:clientes
SMEMBERS sucursal:005:clientes
SMEMBERS sucursal:006:clientes

URL: GET http://localhost:3000/clients/sucursal/001 
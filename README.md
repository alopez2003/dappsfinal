# Programación de una primer versión de DApp  por Alberto López Gutiérrez

Este es mi primer proyecto de DApp y tiene mucho tiempo que no programo, así que estoy muy emocionado por esto. Comencemos.

NOTA: Desde que inicié este master, no ha existido un grupo, siempre hemos entregado mis compañeros y yo el trabajo de forma individual, me parece que sólo ha habido un grupo. En mi caso continuaré con la entrega individual. Muchas gracias!!

## Sprint 2

Lo siguiente fue desplegado en un Ubuntu LTS 22.04, lo primero que hice fue instalar Node.js en el ubuntu, recurrí directamente a las herramientas de Ubuntu (APT) donde instale nodejs y también npm, se puede verificar su versión. Ocupé el blog de [Edward S. & Aris B.](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9047091&gad_source=1&gclid=CjwKCAiAuYuvBhApEiwAzq_Yiay1MIqRX_uv-ElLgxUZHYyhim5ske-hRuoeqoNvAhFRWnORk975dhoCFjUQAvD_BwE) de Hostinger para realizar esta operación. Esta primer parte también viene del Sprint 1, a pesar de que fue teórico, realicé la parte del despliegue del Ganache, por medio del tutorial de [Diego Escalona](https://github.com/Diegoescalonaro/react-simple-truffle-box). Gracias Profesor!

Primero actualicé la máquina

![image](https://github.com/alopez2003/dapps1/assets/67942268/28a4a934-b168-4969-9757-c14f6bf7342d)

Posteriormente instalé Nodejs

![image](https://github.com/alopez2003/dapps1/assets/67942268/1237345e-b4a0-4e52-9257-10acab81827b)

Posteriormente instalé NPM

![image](https://github.com/alopez2003/dapps1/assets/67942268/acf49a07-5dd9-441e-9757-19ce78db115d)

Podemos ver las versiones de nodejs y npm, sin embargo son antiguas las que se encuentran en las librerias de Ubuntu 22.04

![image](https://github.com/alopez2003/dapps1/assets/67942268/697bc45c-153b-4eaa-bb85-1a40b63ec1ab)

Después bajamos e instalamos NVM

![image](https://github.com/alopez2003/dapps1/assets/67942268/af6dbbde-e10c-4b86-90f3-0d3f7bc0efc7)

Con esto logramos actualizar Nodejs

![image](https://github.com/alopez2003/dapps1/assets/67942268/fb15317e-b1be-46d3-9ff8-f26af566b4ae)

![image](https://github.com/alopez2003/dapps1/assets/67942268/1646084b-85ee-4b7b-9480-97044fc0495f)

![image](https://github.com/alopez2003/dapps1/assets/67942268/d0b3fef6-eec5-417c-b383-05dc0a68ddc7)

Para la actualización recurrimos a las siguientes ligas

[https://phoenixnap.com/kb/update-node-js-version](https://phoenixnap.com/kb/update-node-js-version)
[https://www.howtoforge.com/how-to-manage-nodejs-versions-with-n-in-ubuntu-20-04/](https://www.howtoforge.com/how-to-manage-nodejs-versions-with-n-in-ubuntu-20-04/)

Posteriormente creamos una cuenta de MetaMask en la máquina Ubuntu

![image](https://github.com/alopez2003/dapps1/assets/67942268/d9065465-e6cb-41bd-b534-f5aab5d47341)

De inicio, tiene la siguiente Address 0xFa61B9977887aC8A3A2d2ba86e7b46E3194Effe4, sin embargo estaremos trabajando con Ganache

Después creamos el directorio para la instalación de Truffle

![image](https://github.com/alopez2003/dapps1/assets/67942268/44d8f3b1-572b-4bab-bcb4-633d16d4fd3e)

![image](https://github.com/alopez2003/dapps1/assets/67942268/5ea1c746-3e60-4ca4-b226-dd79881f5db8)

Realizamos el unbox del compartido de Diego Escalona

![image](https://github.com/alopez2003/dapps1/assets/67942268/5cbd8278-2789-47dd-a83a-bfbb23e215f4)

Podemos ver el contenido ya en la carpeta

![image](https://github.com/alopez2003/dapps1/assets/67942268/79f75f31-9947-439f-839c-c2cd348fb7f2)

Cabe mencionar que el Smart Contract que ocuparemos para la verificación de integridad en la blockchain de un archivo lo tomamos modificando el archivo de [Auction.sol](https://github.com/Diegoescalonaro/auction-smartcontract/blob/master/Auction.sol), también de Diego Rodriguez.

El archivo se llama Integrity.sol, mismo que anexo en este repositorio.

Ejecutamos ganache 

![image](https://github.com/alopez2003/dapps1/assets/67942268/aad0cad5-e071-4647-96a9-d23d3ebd2aea)

![image](https://github.com/alopez2003/dapps1/assets/67942268/9422c092-61f1-4d9d-bcbb-a1c5661711d8)

![image](https://github.com/alopez2003/dapps1/assets/67942268/e5b92f6e-9731-4cb0-a5cf-f5927f293237)

Añadimos el archivo Integrity.sol a la carpeta de contratos

![image](https://github.com/alopez2003/dapps1/assets/67942268/7838a6b3-e20a-4bc9-993e-25d14c9faea2)

Modificamos el script de despliegue para que despliegue el contrato de Integrity

![image](https://github.com/alopez2003/dapps1/assets/67942268/08f2e242-3251-4ed1-b04e-90d0b8a147fb)

Modificamos el archivo truffle-config.js para que coincida el puerto de conexión de ganache, tenía el 8545 y está ejecutando sobre el 7545 con el network ID 5777

![image](https://github.com/alopez2003/dapps1/assets/67942268/92be1aa9-91a6-470e-b5f9-ee7a1281bd13)

Añadimos la red de Ganache y tres cuentas a MetaMask

![image](https://github.com/alopez2003/dapps1/assets/67942268/e8472615-81d8-42c3-aa0c-92f4b26df3b3)

Cuenta 1 (Ganache 1) Address 0x2989db0E81301A93D0E3d1052C8D395F97Ac5042

![image](https://github.com/alopez2003/dapps1/assets/67942268/299f9fdb-0720-478e-a02a-801fad1e5f0f)

Cuenta 2 (Ganache 2) Address 0x24CD225A69F6FAC096e08f87C3b458FF6ff61FE4

![image](https://github.com/alopez2003/dapps1/assets/67942268/13526e32-c086-49ec-8c60-1e29a7739204)

Cuenta 3 (Ganache 3) Address 0xdFFcA12A955255D8E6BD95F2E7bf5037481C39f3

![image](https://github.com/alopez2003/dapps1/assets/67942268/c3712c46-c93e-4f57-a19e-f90a2078721c)

Posteriormente ejecutamos truffle para compilar los contratos con "truffle migrate --network ganache" desde que estamos haciendo todo con la red de ganache

![image](https://github.com/alopez2003/dapps1/assets/67942268/bd3dac8f-068a-41cf-a8db-870d5f2a7fe9)

Tuvimos un problema con la compilación del SimpleStorage.sol, desde que realmente no lo necesitamos, lo vamos a quitar del script de despliegue

![image](https://github.com/alopez2003/dapps1/assets/67942268/6da7c033-9d59-4bab-b9fa-fcbd42da01d7)

![image](https://github.com/alopez2003/dapps1/assets/67942268/726c17cd-844c-4b35-8a40-2ebb0d2fee41)

![image](https://github.com/alopez2003/dapps1/assets/67942268/b445d176-54fc-4153-8037-a7353eb50049)

![image](https://github.com/alopez2003/dapps1/assets/67942268/654346b2-f0cb-49af-8db0-87cc2db8025b)

Vemos en las transacciones de Ganache que ya tenemos una

![image](https://github.com/alopez2003/dapps1/assets/67942268/0bfb52d7-f46f-47f0-a6a2-40dd64b1e6ab)

Nota: por las versiones de truffle y de los contratos, tuvimos que hacer algunas adecuaciones a los contratos y también a las configuraciones, anexo las ligas que consulté para dicho fin

[https://stackoverflow.com/questions/76377136/migrations-hit-an-invalid-opcode-while-deploying](https://stackoverflow.com/questions/76377136/migrations-hit-an-invalid-opcode-while-deploying)
[https://www.edureka.co/community/33078/solidity-error-syntaxerror-no-visibility-specified](https://www.edureka.co/community/33078/solidity-error-syntaxerror-no-visibility-specified)


Ahora ejecutamos el aplicativo, vamos al directorio "dapps1/client" y ejecutamos "npm start"

![image](https://github.com/alopez2003/dapps1/assets/67942268/f0178188-e66d-4e11-a516-12b6cf6ecfcc)

Tuve el siguiente error al intentar inicializar, al parecer un error con Nodes.js y la version de OpenSSL

![image](https://github.com/alopez2003/dapps1/assets/67942268/60e095f4-dea1-4fb6-b7e4-7e47c28bc201)

Aplique lo siguiente

![image](https://github.com/alopez2003/dapps1/assets/67942268/805289c8-8f94-4ea5-a2ca-14bfed8bad18)

Y posteriormente un "npm update"

![image](https://github.com/alopez2003/dapps1/assets/67942268/ab54c7da-2b70-4003-bdf1-2a3af4227856)

![image](https://github.com/alopez2003/dapps1/assets/67942268/56c7e465-cf9c-4be2-9798-4382d121d1df)

Esto siguiendo lo puesto en el comentario 33 del blog de stackoverflow:
[https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e](https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e)

Y así funcionó correctamente

![image](https://github.com/alopez2003/dapps1/assets/67942268/126e7acd-7121-40b0-a22c-d6b7e0d6900d)

Ya estaba ejecutando la primera parte que es decir la red y la cuenta, sin embargo al hacer las demás modificaciones, compila todo muy bien, sin embargo me aparecen errores:

![image](https://github.com/alopez2003/dapps1/assets/67942268/4e07f77b-bb81-4b66-8068-39a16d38c507)

Estaré investigando al respecto, no estoy seguro que me de tiempo para la entrega de la tarea, sin embargo seguiré revisando, mientras tanto dividiré los archivos que he compilado en dos fases, espero llegar a la Fase 2. La Fase 1 es la que tiene los archivos como los tengo hasta ahora.

En esta carpeta voy a poner los siguientes archivos:

- Integrity.sol
- truffle-config.js
- Apps.js
- Integrity.json

Mientras respondo las preguntas planteadas en el Sprint:

**- Cúal es la finalidad / propósito de la DApp? **
Tal cual fue planteado en el Sprint 1, el objetivo de esta DApp es poder darle utilidad a la integridad de la blockchain para otro campo de la informática que es la ciberseguridad. La mayor parte de los productos o desarrollos en ese ámbito, se centran en la disponibilidad y la confidencialidad (la mayor parte es en este rubro), sin embargo la integridad no lo es.
Gracias Diego por darme luz por donde desarrollar esto, probé el smart contract y funciona bien en la parte inicial, donde estableciendo manualmente un hash a un archivo, es posible añadir en la blockchain tanto el nombre de la persona que lo realizó, el nombre del archivo y el hash otorgado por el programa hasher. Desde luego que puede tener modificaciones esto para ser más automatizado, pero de inicio puede funcionar así cumpliendo su propósito.


**- ¿Qué variables y funciones contiene el Smart Contract? **
Contiene sólo una función de escritura con tres valores
Función: hash_update
Valores: newhash, file, name

Funciones de lectura, van orientadas a consumir estos datos:
filer - ligada a file
namer - ligada a name
hash_verify - ligada a newhash
updater - ligada a la cuenta que ejecuta la transacción


**- ¿Qué librería habéis implementado para la capa de conexión: Web3.js o Ethers.js? ¿Por qué?**
Ha sido Web3.js derivado de lo enseñado en clase, no he tenido tiempo de explorar Ethers.js, ha sido esta la principal razón por la que no lo he explorado.

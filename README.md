# Programación de una primer versión de DApp  por Alberto López Gutiérrez (Trabajo Final)

Este es mi primer proyecto de DApp y tiene mucho tiempo que no programo, así que estoy muy emocionado por esto. Comencemos.

NOTA: Desde que inicié este master, no ha existido un grupo, siempre hemos entregado mis compañeros y yo el trabajo de forma individual, me parece que sólo ha habido un grupo. En mi caso continuaré con la entrega individual. Muchas gracias!!

## Sprint 1

Se seleccionará un caso de uso específico donde se utilice una DApp como parte fundamental de la solución / servicio. El caso de uso y la DApp a diseñar será libre elección por el grupo.

Posibles preguntas para resolver.
-	¿Cuál es la idea / caso de uso?
-	¿Qué beneficios aporta la tecnología Blockchain en el caso de uso?
-	¿Qué PROS/CONTRAS tiene el uso de una DApp frente a una aplicación tradicional?
Objetivo de la actividad: Entender el diseño, funcionamiento y beneficios de una aplicación descentralizadas (DApp) aplicada a un posible caso de uso real.

### CASO DE USO

 **¿Cuál es la idea / caso de uso?**

Para este caso de uso emplearemos una empresa que tiene un área de seguridad de la información, esta área por cumplimiento le fue exigido el tener integridad en los envíos de determinado tipo de archivos con el fin de poder cumplir con la triada de seguridad (confidencialidad, integridad y disponibilidad).
A nivel ciberseguridad, la confidencialidad la cumplen con el control de accesos a los archivos y así como el cifrado de los mismos, así como la disponibilidad el poder tener bóvedas con arreglos de discos y que puedan ser redundantes, sin embargo la integridad no es algo común que se maneje en la ciberseguridad a nivel de envío de archivos, sólo en los desarrollos de programas centralizados.
La idea es poder desarrollar una DApp que permita el intercambio de dichos archivos entre algunos usuarios ocupando la blockchain para poder otorgar integridad a las transacciones que se efectúan, y en caso de alguna auditoría, poder demostrar que la blockchain otorga ese nivel de integridad.

**¿Qué beneficios aporta la tecnología Blockchain en el caso de uso?**

La tecnología blockchain nació desde un inicio segura, en la cuestión de la integridad que proporciona a las transacciones que transcurren.
Es posible el compartir información y transacciones entre diversos individuos y que estas transacciones sean comprobables, y lo mejor, no son modificables, por lo que se puede demostrar la integridad de las mismas, la inmutabilidad de estas transacciones hace de este caso de uso, algo muy viable.

**¿Qué PROS/CONTRAS tiene el uso de una DApp frente a una aplicación tradicional?**

En el mundo tradicional de TI, es posible recurrir a compartición de archivos por medio de carpetas compartidas, y es posible el poder habilitar logs para poder saber cuándo, cómo y quién fue la persona que realizó la subida/bajada o consulta de determinado tipo de archivos. Al igual que la blockchain, es posible poder sacar un hash de los archivos y verificar la inmutabilidad de los archivos, sin embargo no así para la transacción (lo que se conoce data en reposo/data en tránsito respectivamente). Así mismo, el sacar este hash por algunos archivos podría ser manejable, sin embargo, cuando se trata de muchos archivos, esto demanda mucho trabajo, por lo que se vuelve inviable.
Con la nube tenemos el mismo tipo de problema, sin contar que para el caso de uso del área de seguridad de la información, la jurisdicción y quién gestiona los datos podría ser un desafio, sin contar que la integridad de las transacciones no depende del usuario, sino del protocolo de comunicaciones (https), por lo que también tener registro de esto no es viable.
Por otro lado, se podría realizar esto con bases de datos, sin embargo tenemos el mismo problema que con la nube, fuera de que podemos resguardar la información en discos, la integridad depende de la transacción en la comunicación, misma que no está diseñada para poder establecer mecanísimos de integridad, sino de comunicación (comunicación por http o https).
Es por eso que blockchain tiene varios PROS y mas siendo diseñada en una DApp para uso de los usuarios que así lo requieran.
Dentro de los contras es que es necesario tener wallets que gestionen la información, por lo que es más trabajo para el personal de sistemas el que los usuarios conozcan como funciona la parte de blockchain y que sería trasladado a una DApp. Por lo que la concientización y el training sobre la DApp debe ser forzoso.


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

## Sprint 3

Posibles preguntas para resolver.
-	¿Qué mejoras visuales introducirías a la DApp?
-	¿La DApp requiere de un sistema de almacenamiento descentralizado como IPFS?
-	¿La DApp requiere de algún mecanismo para gestionar el gas de los usuarios?
-	¿Consideras necesario utilizar alguna solución de escalabilidad como Polygon para tu caso de uso?

Objetivo de la actividad: Analizar y proponer mejoras de diseño y escalabilidad para la DApp en el caso de uso planteado.

Respuestas

**¿Qué mejoras visuales introducirías a la DApp?**

Me parece que el manejo de errores es elemental en este tipo de aplicativos puesto que, ya que se requiere un nivel un poco más especializad en nivel técnico para manejar este tipo de aplicaciones (manejo de wallets, firmas, uso de gas, etc) en caso de algo que no salga como debiera sería muy agradecido por los usuarios del aplicativo.
A pesar de que seguramente se ocuparía solo una red y un token para hacer las transacciones, sería muy bueno en alguna migración por actualización o mejoras, el que se pudiera agregar de forma automática las redes necesarias, por lo que se podría incorporar.
La gestión del gas desde luego que es algo necesario, puesto que a pesar de poder mintear tokens “infinitos” para los usuarios, sería mucho mas útil el tener una entidad que gestione estos eventos.

**¿La DApp requiere de un sistema de almacenamiento descentralizado como IPFS?**

Sería una gran herramienta puesto que se podría cargar la DApp en dicho repositorio así como los registros, que podrían estar centralizados en este repositorio descentralizado (una disculpa por la expresión), sin embargo no es algo que sea mandatorio. Todo dependería del costo/beneficio a largo plazo

**¿La DApp requiere de algún mecanismo para gestionar el gas de los usuarios?**

Fue tocado en el primer punto sin embargo me parece que puede aportar mucho el tener una entidad que se haga cargo de las tarifas de gas, para que los usuarios tengan que realizar este paso, así mismo, con la mejora visual de firmar transacciones, sería ideal que esto diera como caso de uso, la integridad de cada una de las transacciones de consulta/modificación del algún archivo, anexado con su propio hash en la cadena de bloques. Al meter un factor de cobro de gas por el uso de la red, perdería un poco el sentido de la parte de la integridad.

**¿Consideras necesario utilizar alguna solución de escalabilidad como Polygon para tu caso de uso?**

Mi respuesta es si, puesto que se sabe que Ethereum tiene limitantes importantes, y sobre todo, para el procesamiento de transacciones. Una solución como Polygon u otras más, como las capa 2, podrían dar un mayor rendimiento en el manejo de las transacciones en volumen y en velocidad. Adicional Ethereum ha trabajado en algunos hard Fork (Dencun) que permiten optimizar a las soluciones de capa dos este tipo de cuestiones, inclusive hablando para el costo de las tarifas de gas.


## Fase 4

Se implementarán las últimas mejoras y customizaciones de la DApp para el caso de uso planteado. Se podrán tomar como referncia las mejoras de diseño y escalabilidad analizadas en la fase 3 de análisis.

NOTA: Se puede consultar en el foro que no fue posible el tomar los datos de los smart contracts, y no he podido encontrar una solución, sin embargo si fue posible hacer la capa visual.

Desplegué una máquina virtual nueva con los smart contracts y la DApp y desde un inicio, con el contrato "SimpleStorage.sol" no despliega los datos del Smart Contract.

![image](https://github.com/alopez2003/dappsfinal/assets/67942268/07b70dbc-306c-4de2-bfc3-2c6fb566bae4)

Desde que los cambios son por la parte visual, trabajaremos sobre la parte visual de la DApp de Integrity.sol

![image](https://github.com/alopez2003/dappsfinal/assets/67942268/2b19853d-e15b-4095-b524-23f3fbda644e)









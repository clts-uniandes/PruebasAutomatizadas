
# Integrantes del equipo

| Nombre                           | Correo                    |
|----------------------------------|---------------------------|
| Luis Soler Sajami                | l.solier@uniandes.edu.co  |
| David Orlando Zuñiga Boyacá      | d.zunigab@uniandes.edu.co |
| Edgar Fernado Melara Guevara     | e.melara@uniandes.edu.co  |
| Cristian Leonardo Toro Sarmiento | c.toros@uniandes.edu.co   |

# Funcionalidades bajo pruebas

1. Login
2. Crear Página
3. Publicar página
4. Crear Tag
5. Crear Post
6. Editar Usuario


# Escenarios de prueba

La entrega de esta semana esta compuesta por # escenarios haciendo uso de las herramientas Playwright y Kraken. 

* En Kraken los escenarios relacionados con `Post` prueban la creacion de post validando diferentes campos y tipos de datos. Encontrará archivos `post_random.feature` con 17 escenarios y `post_apriori.feature` 14 escenarios, los cuales tienen escenarios compartidos con diferentes estrategias de generacion de datos.

* En Kraken los escenarios relacionados con `Pages` prueban la creacion de post validando diferentes campos y tipos de datos. Encontrará archivos `page_random.feature` y `page_apriori.feature` con 17 escenarios y `post_apriori.feature` 14 escenarios, los cuales tienen escenarios compartidos con diferentes estrategias de generacion de datos.

# Instrucciones de ejecución de código de escenarios de pruebas

## Precondiciones generales

1. Instalar node versiones 14 (recomendado v14.15.0)  segun su sistema operativo. Se recomienda NVM tanto para Windows como para sistemas Linux. Instrucciones disponibles tanto para Linux: (https://github.com/nvm-sh/nvm) o su spin'off en Windows (https://github.com/coreybutler/nvm-windows)
2. Tener instalada una instancia de Ghost v3.41.1. Más información en https://ghost.org/docs/install/local/
3. Activar la instancia de Ghost requerida con el comando `ghost start` si no lo ha hecho para la instancia con pruebas deseadas
4. Descargar los contenidos del repositorio en su carpeta de preferencia, sea por descarga de ZIP o por "git clone https://github.com/clts-uniandes/PruebasAutomatizadas.git"

### Instalar Ghost:

- Ejecutar el comando `ghost install 3.41.1 --local --force` en el directorio que desee hacer la instalacion de la version 3.41.1

### Desplegar Ghost con Docker

- docker run -d -e url=http://localhost:3002 -p 3001:2368 --name ghost_x.yy.z ghost:x.yy.z donde x.yy.z se reemplaza con la imagen requerida (3.41.1)
ej. `docker run -d -e url=http://localhost:3002 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1`

## Kraken

En Kraken usamos 2 estrategias para la generación de datos:
- **Data pools a-priori**: Con ayuda de la herramienta **Mockaroo** se generó un archivo en formato `JSON` que cuenta con la siguiente estructura:
A traves de este archivo trabajo una funcion para la lectura de estos datos en diferentes escenarios.
```json 
[
  {
    "words": "ante ipsum primis in faucibus orci luctus et ultrices",
    "paragraph": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "numbers": 48027289345045750,
    "chars": ",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’"
  }
 ]
```
- **Data random**: Con la libreria de javascript `Faker` se generan datos de manera aleatoria durante la ejecucion de las pruebas, se implementa una funcion que permite hacer uso de esta herramienta y las bondades de Cucumber y Gherkin, la funcion tiene la siguiente estructura: 
```javascript
useFaker(string) {
    const type = string.split("-")[0];
    const cantidad = string.split("-")[1] || faker.random.numeric(1);
    switch (type) {
      case "#words":
        return faker.random.words(cantidad);
      case "#paragraph":
        return faker.lorem.paragraphs(cantidad);
      case "#numbers":
        return faker.random.numeric(cantidad);
      case "#chars":
        return faker.datatype.string(cantidad);
      case "#url":
        return faker.internet.url();
      case "#vacio":
        return "";
      default:
        return string;
    }
  }
```
En el directorio `/utilsDataGeneration` puede encontrar la manera en que se hizo la implementacion de estas dos estrategias de generacion de datos
   
### Prerequisitos:
- NodeJS 12 o posterior
- Ghost V3.41.1

### Ejecución de pruebas:
1. Ingresar al directorio kraken `cd kraken`
2. Instalar dependencias `npm install`
3. Configurar el archivo `kraken/properties.js` con los parametros 
```json
{
    "USERNAME": "usuario@login.ghost", //usuario login del sitio
    "PASSWORD": "*******", //Contraseña login del sitio
    "LOGIN_URL": "http://localhost:2369/ghost/#/signin", //URL del sitio a probar
    "BASE_URl": "http://localhost:2369/ghost/#/signin", //URL del sitio a probar
    "PATH_SCREENSHOTS": "./screenshots/ghost3" //debe cambiar el directorio al cambiar version de Ghost
}
```
4. Ejecutar el comando `./node_modules/kraken-node/bin/kraken-node run`

## Playwright

### Prerequisitos:
- NodeJs 14 o posterior
- Instancia Ghost V3.41.1 disponible 

### Ejecución de pruebas:
1. Ingresar al directorio playwright deseado (Playwright/ghost3 o Playwright/ghost4) `cd Playwright`
2. Ejecutar el comando `npm install`
3. Configurar el archivo `util/environment.ts` con los parametros comentados (`BASE_URL`, `USER`, `PASS`)
![image](https://user-images.githubusercontent.com/98668775/168510550-069b32ab-d3eb-4ae4-99e7-2775191c3ed2.png)

4. Ejecutar el comando `npx playwright test test/pa0xy.test` donde xy se reemplaza con la prueba deseada a ejecutar, e.g. PA001 usa `npx playwright test test/pa001.test` (no se soporta ejecución simultánea)
5. Verificar que se haya creado la carperta `screenshots`


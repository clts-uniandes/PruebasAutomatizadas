
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

La entrega de esta semana está compuesta por # escenarios haciendo uso de las herramientas Playwright y Kraken. 

* En Kraken los escenarios relacionados con `Post` prueban la creación de post validando diferentes campos y tipos de datos. Encontrará archivos `post_random.feature` con 17 escenarios y `post_apriori.feature` 14 escenarios, los cuales tienen escenarios compartidos con diferentes estrategias de generación de datos.

* En Kraken los escenarios relacionados con `Pages` prueban la creación de post validando diferentes campos y tipos de datos. Encontrará archivos `page_random.feature` y `page_apriori.feature` con 17 escenarios y `post_apriori.feature` 14 escenarios, los cuales tienen escenarios compartidos con diferentes estrategias de generación de datos.

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
A través de este archivo trabajo una función para la lectura de estos datos en diferentes escenarios.
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
- **Data random**: Con la librería de javascript `Faker` se generan datos de manera aleatoria durante la ejecución de las pruebas, se implementa una función que permite hacer uso de esta herramienta y las bondades de Cucumber y Gherkin, la función tiene la siguiente estructura: 
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
En el directorio `/utilsDataGeneration` puede encontrar la manera en que se hizo la implementación de estas dos estrategias de generación de datos
   
### Prerequisitos:
- NodeJS 12 o posterior
- Ghost V3.41.1

### Ejecución de pruebas:
1. Ingresar al directorio kraken `cd kraken`
2. Instalar dependencias `npm install`
3. Configurar el archivo `kraken/properties.js` con los parámetros 
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

En Playwright usamos 3 estrategias para la generación de datos:
- **Data pools a-priori**: Con ayuda de la herramienta **Mockaroo** se generó un archivo en formato `JSON` que cuenta con la siguiente estructura:
A través de este archivo trabajo una función para la lectura de estos datos en diferentes escenarios.
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
En el archivo `util/MOCK_DATA.json` puede encontrar la manera en que se hizo la implementación de la estrategia.

- **Data pools pseudo aleatorea**: Con ayuda de la herramienta **FakerJS** se creo una clase typescript que cuenta con la siguiente estructura:
A través de este archivo se trabajo la generacion de la tupla de datos pseudo aleatorea justo antes de la ejecucion de la prueba .
```javascript 
public getPageDataListWithTitleAndContentAndPageUrlAndExcerpt() {
        let pageDataList: Map<PageFields, any>[] = [];

        let pageData1 = new Map<PageFields, any>();
        pageData1.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 1));
        pageData1.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.CHARS, 3000));
        pageData1.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.CHARS, 15));
        pageData1.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageDataList.push(pageData1);

        let pageData2 = new Map<PageFields, any>();
        pageData2.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData2.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData2.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData2);

        let pageData3 = new Map<PageFields, any>();
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.WORDS, 500));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.WORDS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageDataList.push(pageData3);

        return pageDataList;
    }
```
En el archivo `util/pseudo-random-data.ts` puede encontrar la manera en que se hizo la implementación de la estrategia.

- **Data random**: Con la librería de javascript `Faker` se generan datos de manera aleatoria durante la ejecución de las pruebas, se implementa una función que permite hacer uso de esta herramienta y las bondades de Cucumber y Gherkin, la función tiene la siguiente estructura: 
```javascript
public useFaker(fakerValue: FakerCategories, quantity?: number) {
        switch (fakerValue) {
            case FakerCategories.WORDS:
                return faker.random.words(quantity);
            case FakerCategories.PARAGRAPH:
                return faker.lorem.paragraphs(quantity);
            case FakerCategories.NUMBERS:
                return faker.random.numeric(quantity);
            case FakerCategories.CHARS:
                return faker.datatype.string(quantity);
            case FakerCategories.URL:
                return faker.internet.url();
            case FakerCategories.FULL_NAME:
                return faker.name.findName();
            case FakerCategories.FIRST_NAME:
                return faker.name.firstName();
            case FakerCategories.EMAIL:
                return faker.internet.email();
            case FakerCategories.CITY:
                return faker.address.cityName();
            case FakerCategories.PAGE_URL:
                return faker.internet.url();
            case FakerCategories.FB_PROFILE:
                return 'https://www.facebook.com/' + faker.name.firstName();
            case FakerCategories.TWITTER_PROFILE:
                return 'https://twitter.com/' + faker.name.firstName();
            case FakerCategories.ALPHANUMERIC:
                return faker.random.alphaNumeric(quantity);
            case FakerCategories.EMPTY:
                return "";
            default:
                return "";
        }
    }
```
En el archivo `util/utilFaker.ts` puede encontrar la manera en que se hizo la implementación de la estrategia.

### Prerequisitos:
- NodeJs 14 o posterior
- Instancia Ghost V3.41.1 disponible 

### Ejecución de pruebas:
1. Ingresar al directorio playwright `cd Playwright`
2. Ejecutar el comando `npm install`
3. Configurar el archivo `util/environment.ts` con los parametros comentados (`BASE_URL`, `USER`, `PASS`)
![image](https://user-images.githubusercontent.com/98668775/168510550-069b32ab-d3eb-4ae4-99e7-2775191c3ed2.png)

4. Ejecutar el comando `npx playwright test test/`



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
  "nombre": "Katharine",
  "apellido": "Ollivier",
  "nombre_completo": "Katharine Ollivier",
  "e_mail": "kollivier0@whitehouse.gov",
  "texto_llave": "n3mp40t9v18YRu868Rw3V9379T",
  "contenido": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
  "url": "http://house.gov/nullam/molestie/nibh/in/lectus/pellentesque.xml?sapien=ut&cursus=mauris&vestibulum=eget&proin=massa&eu=tempor&mi=convallis&nulla=nulla&ac=neq
ue&enim=libero&in=convallis&tempor=eget&turpis=eleifend&nec=luctus&euismod=ultricies&scelerisque=eu&quam=nibh&turpis=quisque&adipiscing=id&lorem=justo&vitae=sit&matti
s=amet&nibh=sapien&ligula=dignissim&nec=vestibulum&sem=vestibulum&duis=ante&aliquam=ipsum&convallis=primis&nunc=in&proin=faucibus&at=orci&turpis=luctus&a=et&pede=ultr
ices&posuere=posuere&nonummy=cubilia&integer=curae&non=nulla&velit=dapibus&donec=dolor&diam=vel&neque=est&vestibulum=donec&eget=odio&vulputate=justo&ut=sollicitudin&u
ltrices=ut&vel=suscipit&augue=a&vestibulum=feugiat&ante=et&ipsum=eros&primis=vestibulum&in=ac&faucibus=est&orci=lacinia&luctus=nisi&et=venenatis&ultrices=tristique&po
suere=fusce&cubilia=congue&curae=diam&donec=id&pharetra=ornare&magna=imperdiet&vestibulum=sapien&aliquet=urna&ultrices=pretium&erat=nisl&tortor=ut&sollicitudin=volutp
at&mi=sapien&sit=arcu&amet=sed&lobortis=augue&sapien=aliquam&sapien=erat&non=volutpat&mi=in&integer=congue&ac=etiam&neque=justo",
  "fecha": "12/8/2021",
  "ciudad": "Kuanping",
  "palabra": "methodology",
  "numero": 7,
  "letras_limite": "eSgmkGOYlAJsPXqMQiNTKraxbBVhzwnDfLvRtWpcIUEdHZyCFj",
  "numero_limite": "525012265723723501583192085689667815418790398427291881808631271900565222601731750861912780887875489",
  "contenido_limite": "2417bgg3Q4J90e2qZb6t0P69801z32618CiY7651192CGE7L74y2gokhZ056064180iwFS0R452W2Jg637088A7mwq8hZ60lUE5C4Eo46vas855571c5i9wG3j7XF64o08bd273s3cmY7OuqK
16G8Lb20Q6u61nX4c66825Y494Uud6Wj78w2hdgr7aL38g2r01X8l1E96J07KagAjN5U0923C9y0R670u4NUyCc7t90Pd0A559jjj22gQ960B2i9W6g7f7C1E43D9n5tKm5Tv7Q966pJ9N5V0uu82N32m0z0gE5P1ULWr7
Vd3N2wD58607p0E64cg2Y15286J5vwS3nT55v7G5bNayP4064G1VoqNatyZUf7sa7o3cCi2T8b2440E8hF8w6CB70031164T6f57eTT09v16MP8Iy6a6u5b781sTQ173i681q0gG3D4n6R000ve9k8m3N6Octw33T871x8
p7G862HS202u94Tf5630j5Br49A22Oc9zrZT88L77arb6qEz05ay53S82Z319UHU2VbUU0683aQcDU7798Nte24Ff98406lQ30464Ca4jD9V95iTs4R256o8082Nu6K96IL9b5763R87dEpT4S2z005sgi487pw2ia4b78
p20ap4e38xtk1V5u29k35dzc61w0w101y47Q43A7G886G4Wm1IPuTn604OC3qsg897Y5hy899S4jd2jXxG8z6794q5G99613h77U3HZrGRv960uU652z1900dJ2mmbf866OP9O6U56Erdx7w95S4I9ttX9673v8AN78250
7dT56oIZ8AvK5q67W1542F6237o2ckC22Ch7lY9pbKk52fP925jY876172ok9g099u9WC0464eN6Sy6zZ3u3V4k3Hsy1561X6c8vtI60Z2802H5yl70L6p4cY02S8Aj14w3S85IB81Z049t2l1KgK7C4E8pQ7H41226AFS
9x5bX5b4P52413e565wV4T121SW56f405d9vAuy123l6Tdm234f07S2lvKpM10Xe4S3m7do2Z88r5L4Cq30X8amiKXIs56q1K0k8891768W91797NK3YH07oJ66dE7pEKM8EWh0QVVs732a1s16Pe6w301f27y24254189
U51RS115e8n8a33qJ7Ip9ts221Tu5h22768124vf7HZ7557qO1ti63WvDp1v2xvp321279k2295Z0855E4390n4i61qvR754Xj3j586983Zeb2ggh08BcAw6R82c0teFAd657sn52v5G1P7M04399E3cDN319t71729L1b
J2w6SQVPJ2733k01WQ083ReX1rc3LL02n46e7o33i4sYZHdB8l83eJ75n02p4T8921o8e1u9190z3i538654280k2F65E4919m3q7T03W9e1eK98q3neQ471V0r7F3vY80724j5Bb8nx4Z17637f6A0JAPc96009NqG8w5
0gPMoh164XQ6EG1l8178eA9I0r60F6d05LLS80y10h47T266Q165uqqzYk21y8z1o5579lfxqt0FUi8w915773114mR2R74aKx7P82L065J74590GnZP9507543bV86Gq56Dr24Y716AW5N0H73P81k0FLT9a3426mh23j
677i529o24nI5mm5Z2fB5jzX6A9M5078MPt6l26W7Ku4H8va04884T049Yei570222u861k27Hr608998h77QR1eH3L89X25c99D2eR74t4GGcE5RN94wb9Ow4go1Fj09S29e9mS467rqo36r7Q5SK48d373JeKVROp2N6
q32C0e0wL1901oJ4IBc14z85NEp4X6685647oEal3aVMu6674P33XZ08M82rZwte1kTP91M5TSXv2HG53I4l2c1cz497o5M7XtN5e426iC4i180y0f4YLd94I8wFT1837M924ddB2W69HfKz1G5Bwy8o130Y85536to53N
fJUar6038825568iN6AyETZrVy8qodalE0",
  "travieso": "$#%#$"
}
]
```
En el archivo `data/MOCK_DATA.json` puede encontrar la manera en que se hizo la implementación de la estrategia.

- **Data pools pseudo aleatorea**: Con ayuda de la herramienta `FakerJS` se creo una clase typescript que cuenta con la siguiente estructura:
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

- **Data random**: Con la librería de javascript `FakerJS` se generan datos de manera aleatoria durante la ejecución de las pruebas, se implementa una función que permite hacer uso de esta herramienta de una forma mas sencilla de acuerdo a la necesidad de cada escenario de prueba, la función tiene la siguiente estructura: 
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


# PruebasAutomatizadas
Para los contenidos a desarrollar en la asignatura Pruebas Automatizadas

# Integrantes del equipo

| Nombre                           | Correo                    |
|----------------------------------|---------------------------|
| Luis Soler Sajami                | l.solier@uniandes.edu.co  |
| David Orlando Zuñiga Boyacá      | d.zunigab@uniandes.edu.co |
| Edgar Fernado Melara Guevara     | e.melara@uniandes.edu.co  |
| Cristian Leonardo Toro Sarmiento | c.toros@uniandes.edu.co   |

# Funcionalidades bajo pruebas

1. Crear Página
2. Publicar página
3. Eliminar Página
4. Editar NavBar
5. Navegación NavBar
6. Asignar Tag
7. Eliminar Tag
8. Editar Tag
9. Crear Post
10. Eliminar Post
11. Crear Usuario
12. Editar Usuario
13. Eliminar Usuario
14. Suspender Usuario
15. DeSuspender Usuario

# Escenarios de prueba

1. Edición de página: Al hacer log-in en la aplicación, se accede al módulo de creación de nueva página y se crea una nueva página. Luego se accede a lista de páginas y se verifica la creación.
2. Publicación programada de página
3. ...
4. ...
5. ..
6. ...
7. ...
8. ...
9. ...
10. ...
11. ...
12. ...
13. ...
14. ...
15. ...
16. ...
17. ..
18. ...
19. ..
20. Remover la suspensión puesta sobre un usuario:

# Instrucciones de ejecución de código de escenarios de pruebas

## Precondiciones generales

1. Instalar node v14.15.0 segun su sistema operativo. Se recomienda NVM tanto para Windows como para sistemas Linux. Instrucciones disponibles tanto para Linux: (https://github.com/nvm-sh/nvm) o su spin'off en Windows (https://github.com/coreybutler/nvm-windows)
2. Tener instalada una instancia de Ghost v3.41.1. Más información en https://ghost.org/docs/install/local/
3. Descargar los contenidos del repositorio en su carpeta de preferencia, sea por descarga de ZIP o por "git clone https://github.com/clts-uniandes/PruebasAutomatizadas.git"

## Cypress

1. Instalar Cypress desde consola de comandos con el comando "npm install cypress"
2. Ejecutar el comando "cypress open". Espere a que apareza la pantalla de cypress
3. Hacer click en "select manually"
4. Escoger la ubicación "pruebasautomatizadas/Cypress/pruebas_e2e/" desde la carpeta donde descargó el contenido de repositorio
5. Configure usuario de login de admin de Ghost en el archivo Cypress/pruebas_e2e/cypress/fixtures/loginData.json. Cambie los valores "username1" y "password1" segun el usuario admin disponible en Ghost
6. Haga clic en la prueba que desee ejecutar (elementos tipo PAxyz.spec.js ) ![image](https://user-images.githubusercontent.com/98668775/167325358-429e0884-73a3-45ad-95ab-8f2c38b38f33.png)

## Kraken

1. Ejecutar comando...
2. ...
3. ...

## Playwright

Prerequisitos:

- Instalar NodeJs ver 14+

Pasos para ejecutar los test

1. Ingresar a la carpeta playwright
2. Ejecutar el comando `npm install`
3. Ejecutar el comando `npx playwright test`




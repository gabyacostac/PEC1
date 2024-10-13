# PEC 1 — Des. Front-End JS Frameworks

**Login UOC:** gabrielacarolina@uoc.edu

**Nombre y apellidos:** Gabriela Carolina Canosa Acosta

**Descripción de la PEC 1**

En este proyecto se han realizado tres ejercicios siguiendo las guías de vídeo propuestas en el enunciado. Una vez teníamos la base de los ejercicios lista, se han realizado algunas adiciones al código, que serán las que se expliquen a continuación:

## Ejercicio 2.1

En este ejericio, tras seguir la guía de vídeo se añadieron los requisitos extra del ejercicio, que fueron:

- Un campo extra en el formario que permitiera introducir la edad del usuario. A este campo se le ha agregado una validación que permite informar al usuario si introduce una edad incorrecta, menor que 0 o mayor que 1000. En caso de que fuera así se muestra un mensaje bajo el campo de edad.

- Se añade una validación a la contraseña para que se cumplan las condiciones que indica el enunciado y, en caso de que no se cumpla, se muestra un mensaje indicando los requisitos que debe cumplir la contraseña.

## Ejercicio 2.2

Para este ejercicio, tras seguir el vídeo guía, se añadieron las diguientes funcionalidades:

- Añadimos un elemento *loader* al HTML para mostrar cuando se esté cargando la consulta a la API de los cambios de moneda. Mediante CSS se crea una animación circular y se añade un atributo _visibility_ para poder mostrar y ocular el elementos según el estado del código. En la función que calcula el cambio de moneda, se añade al principio la funcionalidad del *loader* modificando la propiedad *visibility*. Dado que la API es muy rápida y apenas se aprecia el momento de carga, se ha añadido un temporizador para retrasar la consulta y que se pueda visualizar el *loader*.

- Se añade también una comprobación del resultado de la consulta a la API y se muestra un mensaje por pantalla en caso de que esta consulta falle, en el lugar donde debería ir el cambio de moneda. 

- Por último, introduciremos una validación al campo donde el usuario indica la cantidad que desea convertir, para que no pueda introducir números negativos (atributo *min="0"* en el elemento HTML) y en caso de que lo haga, se vuelve a mostrar el valor predeterminado y aparece un mensaje de error que indica que intrudca un número positivo. El mensaje aparece durante 5 segundos y desaparece.

## Ejercicio 2.3

En el último ejercicio, también se siguió la guía del vídeo y a contiuación se añadieron las siguientes modificaciones:

- Se implementó en la aplicación de selección de sitios para el cine el cambio de moneda con la llamada a la API de las conversiones trabajada en el anterior ejercicio, resultando en una web que permite seleccionar los sitios y automátciamente calcular el precio total de nuestra selección en la moneda que hayamos escogido.

- Se añade una función al código que será la encargada de llamar a la API y devolverá la tasa de cambio de moneda entre USD y la que haya esocgido el usuario. También se añade una función para establecer la moneda que se haya escogido, tanto en el desplegable de películas como en el precio total de las entradas. La función que calcula el precio de las entradas se actualizará para incluir la llamada a la función para establecer la moneda, que a su vez llama a la función que obtiene la tasa de conversión de la API. 

- Se actualizaron las funciones y las llamadas que guardaban los datos seleccionados por el usuario en el almacenamiento local del navegador para que incluyesen la moneda seleccionada.

- Se ha añadido asincronía al proceso de llamar a la API para obtener el cambio de la moneda y al proceso de calcular el precio total, para asegurarnos de que se muestran los datos una vez que se tenga toda la información necesaria y evitar errores.
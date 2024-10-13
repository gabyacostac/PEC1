**La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)**

**1. ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**

Las etiquetas semánticas en HTML son importantes por varias razones, siendo algunas de ellas las siguientes:

1. Organización del contenido. A la hora de desarrollar y diseñar una web es importante que el código esté ordenado, sea comprensible por todos los integrantes del proyecto y sea fácil de mantener en el tiempo. Las etiquetas semánticas nos ayudan a conseguir este objetivo ya que dan significado a las distintas partes de nuestro código, en lugar de usar simplemente etiquetas que engloban contenido sin indicarnos su función.

2. Accesibilidad. Hoy en día es fundamental que una web no sólo sea comprensible y transmita la información de manera clara, sino que debe serlo para todos los usuarios que deseen acceder a ella. Esto implica que es posible que el usuario tenga capacidades diversas que requieran de herramientas en el navegador para poder acceder al contenido. Las etiquetas semánticas son importantes para que estas herramientas puedas transmitir el contenido de la web de la forma más eficiente posible.

3. SEO. El posicionamiento web es una parte crítica del desarrollo web en la actualidad, dado que por mucho que los contenidos de nuestra web estén perfectamente construidos y dispuestos, si el navegador no es capaz de indexarl as páginas de nuestra web y mostrarla en las búsquedas de los usuarios, no conseguiremos alcanzar a nuestro público. Las etiquetas semánticas favorecen la identificación de las keywords y la clasificación de cada una de las páginas de nuestra web, permitiendo que el navegador la muestre en los resultados de búsqueda que más nos convengan.

**2. Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**

Algunas APIs que podemos usar en HTML5 son:

1. Canvas. Permite crear desde gráficos simples hasta animaciones multimedia de alta complejidad.

2. HTMLMediaElement y WebRTC. Son APIs de audio y video que permiten
hacer cosas interesantes con multimedia como escuchar un
audio, ver un vídeo, grabar un vídeo con tu webcam, etc.

3. Geolocation API. Permite recuperar tu localización y se usa, por ejemplo, para que Google Maps pueda determinar tu ubicación.

4. Drag and Drop. Es la API que nos permite crear elementos HTML que puedan ser arrastrados y soltados en otro lugar de nuestra web.

**3. Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

CSS3 introduce los Media Queries. Son reglas @media que permiten aplicar un bloque de relgas CSS sólo si se cumple una condición, en este caso, características del dispositivo desde el que se esté visualizando el contenido.

**4. Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**

Algunas de las características de TypeScript son:

1. Orientación a objetos. TypeScript es un lengjae orientado a objetos e incluye todas las herramientas que esto implica como clases, interfaces, herencia, módulos, etc

2. Compatibilidad con JavaScript. Dado que este lenguaje está basado en JavaScript (es un superset de este lenguaje) con él se pueden usar todas las bibliotecas, marcos y herramientas JavaScript con facilidad.

3. A diferencia de JavaScript, que usa tipado dinámico, TypeScript tiene una base sólida de tipado estático que facilita la detección de errores de manera temprana.

4. Organización del código. En TypeScript es muy fácil organizar el código ya que incluye soporte integrado para módulos y espacios de nombres.

**El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**

**1. Cita al menos 2 de estos preprocesadores.**

Dos de los preprocesadores más conocidos son SAAS y LESS.

**2. Cita al menos 4 ventajas que ofrecen estos preprocesadores.**

Algunas de las ventajas de estos preprocesadores son:

1. Variables. Los preprocesadores nos permiten establecer variables que almacenarán valores y propiedades CSS que podremos reutilizar a lo largo de todo nuestro código fácilmente y que podremos editar sin esfuerzo globalmente.

2. Anidamiento. Estas herramientas ofrecen la posibilidad de anidar selectores dentro de otros selectores y por lo tanto mantener una estructura más ordenada en nuestro código.

3. Mixins. Otra de las ventajas de los preprocesadores es la posibilidad de crear mixins. Estos son bloques de estilos reutilizables también en distintas partes del código. Promueven la modularidad y nos facilitan mantener una consistencia en la escritura del código.

4. Parciales e importaciones. Con respecto a la modularidad también podremos dividir nuestro código CSS en archivos más pequeños que agrupen estilos correspondientes a la parte de la web que nos interese.

En general, los preprocesadores nos facilitan la escritura de código CSS y nos aportan caracteríticas adicionales que nos ayudan a mejorar la estructura del código, su mantenimiento y su escalabilidad.

**3. Explica brevemente en qué consisten los sourcemaps.**

Los *sourcemaps* son archivos que facilitan la depuración del código, conteniendo la información del origen del código una vez ha sido transpilado para ser interpretado por el navegador.

**4. Explica qué es un transpilador.**

Si bien un compilador es un programa que traduce un código escrito en lenguaje de programación (lengauje fuente) a otro lenguaje (objeto), un transpilador nos permite traducir un lenguaje de programación a otro lenguaje fuente. Un uso muy común de los transpiladores es portar un código existente a un lenguaje más moderno o, por lo contrario, convertir código en una versión más antigua del mismo lenguaje para mejorar la compatibilidad con navegadores antiguos.

**El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**

**1. Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**

Algunos de los sistemas de control de versiones más utilizados hoy en día son Git, CVS o Subversion. En cuanto a las herramientas de gestión de módulos tenemos, por ejemplo, npm o yarn.

**2. Cita y explica al menos 3 comandos de Git.**

Algunos comandos que son recurrentes en Git son:

```git init``` : Nos permite iniciar un repositorio en la carpeta en la que nos encontremos.

```git clone``` : De esta forma clonamos un repositorio para poder trabajar sobre él. 


```git add``` : Añadimos los archivos que indiquemos cuando estén listos para realizar el commit en el respositorio.

```git branch``` : Nos da una lista de las ramas de nuestro repositorio.

    

**3. Cita y explica brevemente las características más definitorias de WebPack.**

1. Módulos. Webpack trata todo como un módulo, ya sea JavaScript, CSS, imágenes, lo cual permite una gestión eficiente de las dependencias.

2. Hot Module Replacement (HMR). Esta característica permite actualizar módulos en la aplicación en tiempo real sin necesidad de recargar toda la página, mejorando la experiencia de desarrollo.

3. Plugins. Webpack tiene un sistema de plugins muy flexible que permite extender su funcionalidad. Los plugins pueden ayudar a optimizar el tamaño del paquete, gestionar el entorno de desarrollo, y mucho más.

4. Optimización. Incluye funcionalidades para optimizar el rendimiento, como minificación de código, división de código (code splitting) y carga diferida (lazy loading).

5. Cargadores (Loaders). Permiten transformar archivos de diferentes tipos en módulos que pueden ser utilizados por la aplicación. Por ejemplo, puedes usar loaders para procesar archivos TypeScript, Sass o imágenes.

6. Configuración personalizable. Ofrece un archivo de configuración (webpack.config.js) donde puedes definir cómo se debe comportar Webpack, permitiendo una gran personalización.

7. Integración con frameworks. Se integra fácilmente con frameworks populares como React, Angular y Vue, facilitando la creación de aplicaciones complejas.

8. Soporte para ES6 y JSX. Permite usar las últimas características de JavaScript y JSX (en el caso de React), lo que facilita el desarrollo moderno.
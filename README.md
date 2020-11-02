# Robofriends app

### Live project at: http://jlaguilardev.me/robofriends-app/

**_El objetivo de este módulo es integrar REDUX en la aplicación realizada con REACT que tiene la compañía. Así mismo se nos pide optimizar y revisar la aplicación._**

La incremental complejidad de las páginas webs y aplicaciones, ha hecho que el código JS crezca de una forma exponencial. Para posibilitar el mantenimiento a largo plazo así como la reducción de bugs y/o detección y eliminación de los mismos, nacen los **"frameworks"** y las **"librerías".**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82f0c19d-a04c-491b-b96b-c497fee0abd3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82f0c19d-a04c-491b-b96b-c497fee0abd3/Untitled.png)

Debemos valorar **PROS y CONTRAS de cada framework** / librería a la hora de llevar a cabo una aplicación. Ninguna es mejor o peor y es el mercado y las necesidades de producto las que deben determinar su uso.

En el curso se pone un ejemplo de Angular como una cocina con todas las herramientas disponibles, se considera a React como una herramienta muy flexible y con gran facilidad de adaptación y a Vue una herramienta inicial perfecta (ten en cuenta que el video es de JUL 17, las cosas han cambiado mucho desde entonces)

Pensemos por un momento en la gestión de componentes por parte de React y comparemoslo con la bilogía molecular de los seres vivos.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/240cb3c9-edda-4a65-a6a5-972d097bb550/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/240cb3c9-edda-4a65-a6a5-972d097bb550/Untitled.png)

Hay que recordar también que el flujo de datos en React va siempre "aguas abajo", es decir, sólo los componentes hijos son conscientes de cambios en el componente padre, no a la inversa, como vemos en el dibujo siguiente:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c530bc33-044f-4f73-b1d2-2ad53ead5c6c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c530bc33-044f-4f73-b1d2-2ad53ead5c6c/Untitled.png)

Otra de las características más importantes de React es el manejo del **DOM virtual**. Ya no somos nosotros el "pintor" que manipula el DOM (cuanto menos manipulación directa, mejor para el rendimiento), ahora es una especie de "bot" de React el que recibe la estructura y composición del DOM mediante un objeto de JS y se encarga de introducir y realizar los cambios de la forma más óptima posible.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0adaade-3ee6-4fa0-84ba-d025d1025a65/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0adaade-3ee6-4fa0-84ba-d025d1025a65/Untitled.png)

## Create React App

Son 3 los vídeos que nos introducen a este tema en el curso, pero es el 3 el que nos importa, ya que es el más actualizado.

Ya no es necesario instalar la dependencia global "create-react-app", ya que podemos inicializar la aplicación directamente mediante NPX con el comando:

```jsx
npx create-react-app APPNAME
```

Se instalan los "package" y las librerías necesarias:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7995238-7bce-4d8b-a180-d5af894b7765/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7995238-7bce-4d8b-a180-d5af894b7765/Untitled.png)

### # Configurar proyecto de React con Linter y Prettier

[How to configure ESLint and Prettier in React](https://www.imaginarycloud.com/blog/how-to-configure-eslint-prettier-in-react/)

---

Utilizamos como librería de CSS 'Tachyons'. No tengo ni idea de cómo es ni reseñas de la misma. Vamos a probarla ...

[tachyons-css/tachyons](https://github.com/tachyons-css/tachyons)

### Props

Recuerda la utilizad de los props en React:

```jsx
ReactDom.render(
  <Hello greeting="{'Hello Peeedro}" />,
  document.getElementById('root')
);
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c36af6fe-f609-47fb-ad34-16a617f48a19/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c36af6fe-f609-47fb-ad34-16a617f48a19/Untitled.png)

Si utilizamos la notación de funciones en lugar de la de clases, podemos pasarle los **"props"** como argumentos de la función:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f20d424f-4a77-40f7-b44f-ade54d1396a5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f20d424f-4a77-40f7-b44f-ade54d1396a5/Untitled.png)

## Comenzamos con el ejercicio de la "robot-app"

Utilizamos como referencia para las imagenes la API siguiente, que nos permite generar imagenes aleatorias de robots:

[RoboHash](https://robohash.org/)

Usamos **'destructuring'** para transformar las propiedades del objeto "props" en las variables que queremos, así es más "accesible":

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98db432c-f6a5-4aa1-ad1b-8f38259be5f1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98db432c-f6a5-4aa1-ad1b-8f38259be5f1/Untitled.png)

Como se trata de un array de datos (la lista de robots), vamos a iterar en la misma para crear una **<Card>** por cada elemento de dicho array.

Creamos un nuevo componente (**CardList)** e iteramos en el mismo mediante el método "map":

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75a64576-6d71-4d7f-8c24-b431b25afcb1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75a64576-6d71-4d7f-8c24-b431b25afcb1/Untitled.png)

**OJO: Cuando generamos un listado de elementos para ser renderizado en el DOM, React exige (con razón), que demos una ID única a cada uno de dichos elementos para poder identificarlos en caso necesario. En este caso lo hacemos mediante key={robot.id} que sabemos que es un identificador único.**

_\*\* A 02/11/20 hay una nueva versión de "create-react-app":_

[Getting Started | Create React App](https://create-react-app.dev/docs/getting-started/#quick-start)

Recordemos que para estilos estoy usando la librería "Tachyons":

[TACHYONS - Css Toolkit](https://tachyons.io/)

Y así puedo dar algo de estilo a la aplicación sin tener que gastar mucho tiempo en ello:

```html
<div class="pa2">
  <input
    class="pa3 ba b--greeen b-lighttest-blue"
    type="search"
    placeholder="search robots"
  />
</div>
```

Estamos en este punto:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fee4f69-f447-40f3-997e-b55c61c9b8e4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fee4f69-f447-40f3-997e-b55c61c9b8e4/Untitled.png)

Para establecer una comunicación entre el componente `SearchBar` y el `CardList`, mediante la comunicación "_One Way Data Flow_" debemos pasar por `AppComponent`

Sería un tipo de comunicación entre "hermanos?"

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65a30df8-8ca9-44b6-be35-c38c5edc5539/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65a30df8-8ca9-44b6-be35-c38c5edc5539/Untitled.png)

El componente `CardList` es un componente "puro" ya que recibe siempre un array de "robots" (PROPS) y SIEMPRE devuelve lo mismo.

No necesita saber ni hacer nada más.

**Entra ahora en juego el STATE es decir, un objeto que describe CÓMO está la aplicación en un momento determinado. Se puede modificar.**

Para el uso de STATE, debemos volver al método habitual de creación de un component en React mediante CLASS ( en lugar de arrow function ):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6e238bc-9121-486b-81cf-3d487d280af4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6e238bc-9121-486b-81cf-3d487d280af4/Untitled.png)

Recuerda que para poder usar `this` en el constructor, primero debes llamar a `super()`

\*\* _Investiga React Hooks, anda, que esto parece que ha cambiado un poquito_

Recuerda una vez más "bindear" el this actual cuando estes pasando un método por PROPS a otro componente:

```jsx
constructor() {
    super();
    this.state = {
      robots: robots,
      searchfields: '',
    };
    **this.onSearchChange = this.onSearchChange.bind(this)**
  }

  onSearchChange(event) {
    const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase()))
    console.log(filteredRobots)
  }
```

**OJO!!, tienes una forma mejor de bindear el this: crear la función mediante ARROW funcion (consulta tus notas: mediante una ARROW FUNCTION, el "this" se genera en el momento de creación, no en su invocación)**

```jsx
constructor() {
    super();
    this.state = {
      robots: robots,
      searchfields: '',
    };
  }

  **onSearchChange =(event) =>** {
    const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase()))
    console.log(filteredRobots)
  }
```

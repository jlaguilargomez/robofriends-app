# Robofriends app

Deploy: http://jlaguilardev.me/robofriends-app/

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

---

## Lyfecycle methods

Actualmente tenemos el archivo que contiene los "robots" que se muestran en pantalla, dentro de la misma estructura de carpetas del proyecto. Vamos a llevarlo a un servidor externo (vease JSON placeholder)

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Modificamos el STATE de nuestro `App` component (SMART component, ojo) para que inicialmente tenga un array vacío de datos:

```jsx
constructor() {
    super();
    this.state = {
      robots: [],
      searchfields: '',
    };
  }
```

Lanzaremos la petición al servidor donde se "almacenan" nuestros robots para traer esos datos una vez resuelta la misma.

Vamos a utilizar los "**ciclos de vida**" de REACT para cargar los datos nada más crear ("_mounting_") la aplicación.

[React.Component - React](https://es.reactjs.org/docs/react-component.html)

Ten en cuenta el orden siguiente (constructor - render - componentDidMount - render):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3d63136-4ee2-4ed9-8f56-72b1ae13245b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3d63136-4ee2-4ed9-8f56-72b1ae13245b/Untitled.png)

¿Por qué?

Sencillo: el método `componentDidMount` se ejecuta una vez que la aplicación se ha renderizado, PERO, el método `render` se vuelve a lanzar (es del tipo Updating) cuando detecta cambios.

Nos ponemos manos a la obra para hacer el "fetch" y traernos los datos que queremos renderizar:

```jsx
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
  }
```

---

## Scroll component

Vamos a crear un componente para poder hacer "scroll" en los ROBOTS sin perder el buscador superior

En este caso, vamos a usar la propiedad `children`para manejar unas tags o componentes que están DENTRO de nuestro componente actual:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be1dc483-4cf0-4ff7-9fc7-b39012ddc5a9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be1dc483-4cf0-4ff7-9fc7-b39012ddc5a9/Untitled.png)

Para ello, dentro del componente Scroll, renderizaremos su contenido:

```html
<Scroll>
  <CardList robots="{filteredRobots}"></CardList>
</Scroll>
```

Le damos al componente `scroll` una funcionalidad que nos permite "recoger" cualquier otro componente y añadir un **scroll** propio. Para esto hemos utilizado en este caso la opción de añadir estilos en línea:

```jsx
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '3px solid black',
        height: '500px',
      }}
    >
      {props.children}
    </div>
  );
};
```

---

## Estructura de carpetas

El siguiente paso (que debería haber sido el primero...) es crear una estructura de carpetas adecuada para ayudar a cualquier persona que se adentre en el proyecto a saber dónde narices están las cosas.

Dentro de `src` vamos a diferenciar dos subcarpetas principales:

- `components` - la utilizaremos para guardar componentes de renderizado o aquellos simples que sólo tienen PROPS (quizá lo podría explicar mejor)
- `containers` - contiene los componentes SMART, aquellos que tienen un STATE interno y que se crean mediante `class Component extends React.Component{}`. Contienen "cosas" y pasan sus cambios a otros COMPONENTS

Tras aplicar los cambios básicos, la nueva estructura de carpetas queda de la siguiente forma:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c652645-a0f9-43a5-bd3e-c397c485b37b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c652645-a0f9-43a5-bd3e-c397c485b37b/Untitled.png)

Bueno, no está mal.

También aprovechamos para **refactorizar** el código en el componente `App.js`

```jsx
render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) =>
      robots.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (!robots.length) ?
       <h1>Loading ...</h1>
    :
       (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <CardList robots={filteredRobots}></CardList>
          </Scroll>
        </div>
      );
  }
```

- Usamos "**destructuring**" para no tener que estar llamando continuamente a `this.state`
- Cambiamos el **IF-ELSE** a una "ternary expression" (sólo si es más comprensible)

---

## Keep the project Update

Es probable que a la hora de utilizar algún proyecto de nuestro repositorio nos encontremos con que las dependencias del **package.json** estén desactualizadas.

Incluso, en muchas ocasiones, nos encontramos con que al hacer el `npm install` nos dice que se encontraron X vulnerabilidades:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3520e917-2cb5-4ba5-9c03-bdaa32cdba5c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3520e917-2cb5-4ba5-9c03-bdaa32cdba5c/Untitled.png)

Si ocurre esto podemos lanzar el comando `npm audit fix` para solucionar aquellas vulnerabilidades que tengan una actualización "simple".

Se dan casos en los que nos dice que hay que hacerlo de forma manual (podemos usar el comando `npm audit` para entrar en el detalle sin actualizar.

Si queremos hacerlo "a lo bestia", todavía podemos usar `npm audit fix --force`. Pero si hacemos esto, hay que tener muy en cuenta el revisar la aplicación al detalle.

**Ojo con actualizar al "tun tun" que podemos generar un cambio en algunas librerías que haga que la aplicación deje de funcionar**

Para prevenir posibles errores a la hora de actualizar, las dependencias incorporan una especie de "control de versiones" que determinan hasta dónde se pueden actualizar estas. Un ejemplo:

```jsx
"react": "^16.**10**.2"
```

Indica que sólo se puede realizar una actualización "**minor**", es decir, que podría cambiarse el segundo término de la misma.

Una vez terminada las actualizaciones de seguridad (comprobar en la pestaña de seguridad del proyecto), volvemos a hacer PR.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/422c7da9-fc81-4ec7-a7d0-f5b0982007ec/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/422c7da9-fc81-4ec7-a7d0-f5b0982007ec/Untitled.png)

Como ejemplo práctico, ya que hemos empezado el proyecto con la versión 16 de React, **vamos a hacer la actualización a la versión 17** que ya es estable:

```powershell
npm install react@17.0.0 react-dom@17.0.0
```

**Recuerda que DEBES revisar el proyecto después de una actualización importante.**

Según la documentación de la v17 de React, no se incluyen cambios que puedan hacer dejar de funcionar la aplicación.

---

## Error Boundary in React

Vamos a ver cómo podemos realizar el **"manejo de errores"** en React, para que si, por lo que sea, uno de nuestros componentes deja de funcionar de la forma que se espera, no se produzca un fallo en toda la aplicación.

Creamos un componente `ErrorBoundry` que encapsule los componentes que queremos "controlar" y se encargue de manejar sus errores:

- Si todo va bien, mostrar el componente
- Si algo falla, capturar el error gracias al componente de ciclo de vida `componentDidCatch(error, info) {}` y cambiar el estado interno del `ErrorBoundry` para que muestre el error

```jsx
import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    }
  }

	// si ocurre un error, lo captura. Es como el "catch()"
  **componentDidCatch(error, info) {
		console.log(error, info);
    this.setState({
      hasError: true
    })
  }**

  render() {
    if (this.state.hasError) {
      return <h1>Oops. That is not good</h1>
    }
    return this.props.children;
  }

}

export default ErrorBoundry;
```

Si "wrapeamos" el `CardList` component y generamos un error internamente en él:

```jsx
const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot) => {

    **if (true) {
      throw new Error('NOOOOO!')
    }**

    return <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}
    />
  })

  return <div>
    {cardComponent}
  </div>;
}
```

El componente que hemos creado para manejar estos errores se activará y lanzará el mensaje que hemos configurado.

Pero ten en cuenta que en desarrollo, el manejo de errores lo hace React y nos mostrará la siguiente pantalla:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddf5e332-282c-4916-a347-614230abf8ec/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddf5e332-282c-4916-a347-614230abf8ec/Untitled.png)

**¡¡ Por lo tanto, esto que hemos hecho es útil para producción !!**

---

## Deployment

Ya la tengo desplegada, para hacerlo seguimos los pasos que nos indica la propia página de React:

[Deployment | Create React App](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

Atento porque también se indica como desplegar en otros sitios como **FIREBASE, HEROKU ....**

---

## React Hooks !

_La idea de esta sección es hacer el cambio para usar "hooks" en los "class component" de la app robofriends_

[Presentando Hooks - React](https://es.reactjs.org/docs/hooks-intro.html)

Los **Hooks** son una nueva característica de React que permite usar el **estado** y otras características de React sin necesidad de usar Clases. Ejemplo:

```jsx
import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**Importante cuando hay una novedad en una librería: leer la documentación. Sobretodo la parte de "motivation" (el por qué de su inclusión)**

Vamos a entender los que llevaron a crear los **React Hooks**:

- _Es difícil reutilizar la lógica de estado entre componentes_
- _Los componentes complejos se vuelven difíciles de entender_
- _Las clases confunden tanto a las personas como a las máquinas (?)_

Hasta la fecha, sólo usabamos "functional components" cuando creabamos componentes SIN estado, ahora la cosa va a cambiar.

```jsx
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
}
```

El esquema para convertir lo anterior en Hooks es la siguiente:

```jsx
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');
```

1. Usaremos "destructuring" para asignar las dos variables (un valor y una función)
2. Como valor, recibirá el nombre del estado con el que trabajamos
3. Como función, le asignaremos como norma `setLoquesea`
4. Igualamos al método de React `useState` (previamente importado), al que le pasamos como parámetro el estado inicial.

Ojo que ahora tampoco tenemos los tradicionales métodos del ciclo de vida de los componentes (estaban disponibles al heredar la clase `React.Component`) por lo que lo eliminamos y usaremos, en el caso de nuestra aplicación, el `Effect Hook`:

```jsx
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
  }
```

> _Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados._

El cambo sería el siguiente:

```jsx
useEffect(
  () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setRobots(users));
  },
  [
    /*definimos aquí qué valores determinan cuándo debe lanzarse el useEffect */
  ]
);
```

**Presta atención al parámetro adicional que puede recibir "useEffect" para no tener ciclos infinitos: _"If present, affect will only activate if the values in the list change"_**

Sí, porque si añadimos un `console.log` a nuestra función `App`, veremos que se está ejecutando continuamente:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1655e2fb-4f6b-43b5-8443-5be0f0a4d02e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1655e2fb-4f6b-43b5-8443-5be0f0a4d02e/Untitled.png)

Si le pasamos, por ejemplo:

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => setRobots(users));
}, [searchfield]);
```

Sólo se ejecutará al cambiar `searchfield`, no está mal, pero no es del todo óptimo.

Para tener un comportamiento igual al que teníamos antes con `componentDidMount()` tenemos un pequeño "truqui" que es pasarle un ARRAY vacío:

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => setRobots(users));
}, []);
```

Le decimos que cambie cuando ... ¡no tiene condición!, así que no cambia 🤨. Sólo carga los datos 1 vez.

¿¿ Tengo que cambiar ahora todo el código ??

NO. Los **_hooks_** pueden convivir con normalidad con los **_class components._**

De hecho en la misma página de React se desaconseja estar cambiando todo el proyecto existente, pero se recomienda empezar a usarlo en adelante.

Ten en cuenta estas dos recomendaciones:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b3cd313-a8f6-4427-8559-3e945ebd931d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b3cd313-a8f6-4427-8559-3e945ebd931d/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2102a46d-6758-4ee8-8922-f6e0a21aaece/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2102a46d-6758-4ee8-8922-f6e0a21aaece/Untitled.png)

**Otra de las ideas es que podemos crear nuestros propios Hooks para ser compartidos y reutilizados posteriormente**

---

## Redux and Webpack

[Read Me](https://es.redux.js.org/)

En el siguiente apartado, queremos mejorar el "flujo" de la aplicación:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce2fc805-86cf-4b3d-aa1c-fad3572be165/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce2fc805-86cf-4b3d-aa1c-fad3572be165/Untitled.png)

Cada uno de los componentes de nuestra aplicación puede tener un STATE propio, que determina la configuración del mismo y podríamos decir que es como la "memoria" la app:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6cd8cb1e-154e-4a63-b69f-a271c53f6222/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6cd8cb1e-154e-4a63-b69f-a271c53f6222/Untitled.png)

Vale, pero ¿qué pasa cuando nuestra APP empieza a tener una cantidad muy considerable de componentes y estados diferentes?. Que gestionar estados "locales" empieza a ser algo bastante más complejo...

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/761f1956-3a85-467c-8ebc-3bf8a0f08d45/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/761f1956-3a85-467c-8ebc-3bf8a0f08d45/Untitled.png)

Imagina que los rojos son los que tienen STATE y los azules cambian el estado de otros

Y si pensáramos en un **OBJETO masivo que contuviera todo el STATE de la aplicación** y que cada uno de los componentes tuviera sólo (o no) PROPS ?

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd1c89f6-5e51-4252-b1b5-b4750298a36a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd1c89f6-5e51-4252-b1b5-b4750298a36a/Untitled.png)

**REDUX** está para ayudarnos, toma ideas y conceptos de una estructura de BBDD

### ¿Por qué REDUX?

- Se lleva muy bien con React
- Es bueno para manejar "grandes estados"
- Muy útil para intercambiar datos entre contenedores (componentes)
- **PREDICTABLE STATE MANAGEMENT USING THE 3 PRICIPLES**:
  - **SINGLE SOURCE OF TRUTH**: 1 sólo objeto que contiene todo el estado de la aplicación
  - **STATE IS READ ONLY**: inmutabilidad, el objeto original no se modifica, se crea uno nuevo en cada cambio realizado (?)
  - **CHANGES USING PURE FUNCTIONS**: como debería ser siempre!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0871b263-570b-4537-a9f9-82cc8b36e431/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0871b263-570b-4537-a9f9-82cc8b36e431/Untitled.png)

REDUCER es un "filtro" que mediante funciones puras se encarga de manejar el STORE

Ten en cuenta el patrón que se utiliza en Redux:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f60bc695-3da2-457a-b813-180c3aa6bab5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f60bc695-3da2-457a-b813-180c3aa6bab5/Untitled.png)

Lo mismo te suena de NgRx en Angular, verdad?

Quedate con un concepto que simplifica las cosas:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e8a8048-b762-48ee-9145-41a29ce2fca6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e8a8048-b762-48ee-9145-41a29ce2fca6/Untitled.png)

**En teoría, según esto, con REDUX no es necesario tener estados locales en los componentes de REACT.**

Pero ojo, no es excluyente, podemos encontrar casos en los que se combinan ambos.

### Configure Redux

```powershell
npm install redux
```

**La configuración de REDUX se realiza en JS, y lo mejor de esto es que la librería maneja conceptos y muy buenas prácticas que mejorará nuestro conocimiento base en JS**

Para conectar React con Redux, utilizamos la librería:

```powershell
npm install react-redux
```

**Salvo el componente SMART, el resto no tiene por qué tener constancia de la existencia de REACT. En nuestro proyecto (robofriends) se realizará la conexión con `App.js`**

Existe una "cosita" llamada **Redux Toolkit**:

[Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

que se encarga de gestionar toda la configuración de REDUX en nuestra aplicación (ya que según se comenta es un poco compleja). Tenlo en cuenta, pero no lo vamos a usar en el curso ya que es mejor "mancharse las manos" haciéndolo todo de 0.

### Redux: actions and reducers

Según el esquema que vimos arriba, vamos a crear nuestras `actions`, `reducers` y `constants`

`actions.js`

```jsx
import { CHANGE_SEARCHFIELD } from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});
```

`reducers.js`

```jsx
import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
```

`constants.js`

```jsx
export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';
```

Una vez los hemos creado, vamos a conectarlos a nuestra aplicación React

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/496fa852-a869-4146-98be-92b9bc8637b7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/496fa852-a869-4146-98be-92b9bc8637b7/Untitled.png)

Ahora podríamos, en teoría, pasarle el STORE como prop a `App.js`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80c077e5-cfa8-4fc4-b23d-924640e5b61e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80c077e5-cfa8-4fc4-b23d-924640e5b61e/Untitled.png)

¿Y voy a tener que estar pasando el STATE como PROP en cada componente?

NO. Para eso tenemos el conector `<Provider></Provider>` y los conectores que veremos a continuación:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2653c1e6-70b2-4ac9-9905-46d6190d6703/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2653c1e6-70b2-4ac9-9905-46d6190d6703/Untitled.png)

**Las buenas prácticas dicen que a los componentes SMART los llamemos `containers`y los agrupemos juntos, separados de los `components` (no Smart)**

Revisar la clase 105, en la que se explica al detalle un ejemplo de la integración de la aplicación "robofriends" con Redux. No estaría de más darle un par de vueltas antes de seguir, con el siguiente video:

[https://www.youtube.com/watch?v=ngc9gnGgUdA&feature=youtu.be&ab_channel=JavaScriptMastery](https://www.youtube.com/watch?v=ngc9gnGgUdA&feature=youtu.be&ab_channel=JavaScriptMastery)

Una vez terminada la integración del componente `App.js` con Redux, queda de la siguiente forma:

```jsx
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll'

import './App.css'
import ErrorBoundry from '../core/error/ErrorBoundry';
import { setSearchField } from '../redux/actions';

**const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>{dispatch(setSearchField(event.target.value))}

  }
}**

function App (props) {
  const [robots, setRobots] = useState([]);

  // const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setRobots( users))
  },[]) // only run if [something] changes

  // Recuerda que usamos un ARROW FUNCTION para que obtenga el THIS del "sitio" en el que se ha creado, NO de donde se invoca (en este caso en SearchBox Component)
  // const onSearchChange = (event) => {
  //   setSearchfield( event.target.value)
  // }

  const filteredRobots = robots.filter((robots) =>
    robots.name.toLowerCase().includes(props.searchField.toLowerCase())
  );

  return (!robots.length) ?
    <h1>Loading ...</h1>
  :
    (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={props.onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
    );
}

**export default connect(mapStateToProps, mapDispatchToProps)(App);**
```

**Presta atención a las funciones `mapStateToProps` y `mapDispatchToProps` y a la forma de "exportar" el componente (`connect(...)(App)`)**

Para entenderlo mejor, podemos mostrar por consola lo que se "cuece" en nuestra única `Action`:

```jsx
import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => {
  console.log('searchfield: ', text);
  return { type: CHANGE_SEARCH_FIELD, payload: text };
};
```

---

## Redux Middleware

Podemos introducir "middlewares" en la aplicación (entre las `actions` y `reducers`) para controlar, mapear y gestionar la ejecución de estos.

¿Para qué?

Un ejemplo... Empezamos instalando `npm install redux-logger`

Es una "librería" que nos permite **monitorizar estados y acciones de la App a tiempo real** (se ejecuta entre la acción y el reducer):

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8268db87-083a-4aea-8976-5dee7b9415a9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8268db87-083a-4aea-8976-5dee7b9415a9/Untitled.png)

---

## Redux Async Actions

Vamos a cambiar ahora la petición asíncrona que hacemos para obtener los robots al iniciar el componente `App.js`, para hacerla con la librería **REDUX**

Instalamos:

```jsx
npm install redux-thunk
```

(Es otro **Middleware)**

Comenzamos creando tres nuevas acciones (**es un estandar a la hora de trabajar con peticiones asíncronas**):

```jsx
export const REQUEST_ROBOTS_**PENDING** = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_**SUCCESS** = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_**FAIL** = 'REQUEST_ROBOTS_FAIL';
```

```jsx
export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err }));
};
```

Una vez tenemos las **acciones,** creamos los `reducers`:

```jsx
const initialStateRobots = {
  isPending: false,
  robots: [],
  err: '',
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, action, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAIL:
      return Object.assign({}, state, {
        err: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
```

Y ojo, porque ahora tenemos que hacer "consciente" al `index.js` de que tenemos varios **REDUCERS**.

Utilizamos el método que viene con la librería de REACT: `combineReducers`

```jsx
const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
```

Ojo porque ahora nuestra **STORE** contiene 2 estados, y cada vez que la llamemos, debemos indicarle en concreto cuál queremos utilizar. Veamos....

**El nuevo "middleware" que estamos utilizando...**

```jsx
import thunkMiddleware from 'redux-thunk';
```

**se ejecutará cada vez que uno de nuestros REDUCERS devuelva una función, no un objeto.**

❗ Recuerda que para que no se produzca un bucle infinito de peticiones, en el método `useEffect` hay que pasarle como segundo parámetro un ARRAY vacío

```jsx
useEffect(() => props.onRequestRobots(), []);
```

Insisto una vez más, no está de más leer la documentación antes de empezar a usarlo:

[Read Me](https://es.redux.js.org/)

¡¡ No es que no esté de más, es que es imperativo !!

---

## Module bundlers

Cuando el proyecto ya va teniendo cierta jerarquía, la cantidad de archivos JS que tenemos para los distintos componentes empieza a ser considerable, por lo que se hace muy necesario algún sistema para "empaquetar" y servir de manera más optimizada estos archivos.

El objetivo es "maximizar" la entrega efectiva de estos archivos.

Tenemos varias herramientas a día de hoy para hacer esto, aunque como sabemos, la más utilizada es **WEBPACK:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72ee3ded-0ed1-4f9e-87b2-d3e35c490f24/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72ee3ded-0ed1-4f9e-87b2-d3e35c490f24/Untitled.png)

¿Voy a usar el resto? Puede que sí, en las siguientes casuísticas:

- Si el proyecto es grande, **WEBPACK**, sin duda
- Si es para un pequeño proyecto personal, **PARCEL**

¡Vamos con Webpack!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7899744e-368e-4be3-961e-c733bd99643a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7899744e-368e-4be3-961e-c733bd99643a/Untitled.png)

[https://webpack.js.org/](https://webpack.js.org/)

**LOADERS: herramientas que compilan o transpilan nuestro código, usadas por librerías como Webpack**

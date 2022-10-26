## Configuración proyecto typescript

**1.- instalar typescript en el folder proyecto**

```
npm install typescript -D
```
**2.- añadir tsconfig.json**

```
tsc --init
```

**3.- añadir configuración ts**

```
{
  "compilerOptions": {
    "module": "commonjs",/* cuando compila usará commonjs */
    "esModuleInterop": true, /* para que funcione tanto ES6 y commonjs */
    "strict": true, /* cuanto de estricto va a ser nuestro proyecto typescript, lo podemos dejar por deefecto en true, luego hay muchas más especificaciones */
    "outDir": "dist" /* Donde va a guardar los archivos transpiladors a js */
  },
}
```

**4.- añadir dependencias jest**

@types/jest
ts-jest

**4.- añadir dependencias babel**

npm install --save-dev babel-jest @babel/core @babel/preset-env

**5.- añadir archivo .babelrc**

{
    "presets":[ ["@babel/preset-env", { "targets": {"node": "current"}} ], "@babel/preset-typescript"]
}

**6.- añadir scripts test y debugger en package.json**

```
  "scripts": {
    "test": "jest",
    "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand"
  },
```

**7.- quizás cambios en launch de vsc**
```
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "port": 9229
    }
```

**8.- Compilar ts a js**

Intalar dependencia package.json
```
npm i -D tsc-watch
```

Crear scrpit
```
    "tsc": "tsc",
```

Si usamos el comando tsc, nos crea los archivos de ts a js. Si usamos el comando tsc --watch (el -- aplica a tsc, y le estamos aplicando el watch).

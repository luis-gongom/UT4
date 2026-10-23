# UT4 · Seguimiento de clases

Este repositorio contiene el material de seguimiento de la **Unidad de Trabajo 4 (UT4)**. En él se recopilan los ejemplos de código, las prácticas resueltas y las actividades realizadas durante las clases.

## Objetivos

- Mantener organizado el material trabajado en clase.
- Disponer de ejemplos y ejercicios para facilitar el estudio y el repaso.
- Aprender a utilizar **Git y GitHub** para gestionar proyectos.
- Mantener una copia personal del repositorio y trabajar con ella desde el aula o desde casa.
- Aprender a incorporar las actualizaciones publicadas por el profesor.

## Organización del repositorio

El contenido se organiza en dos carpetas principales:

- **Sesiones de clase**: contiene una carpeta por cada sesión, con los ejemplos de código y las prácticas desarrolladas en el aula.
- **Ejercicios**: contiene una carpeta por cada ejercicio, práctica o actividad evaluable.

### Estructura del repositorio

```text
UT4/
├── Sesiones de clase/
│   ├── Clase 1/
│   ├── Clase 2/
│   └── Clase 3/
└── Ejercicios/
    ├── Ejercicio 1/
    ├── Ejercicio 2/
    └── Actividad evaluable 1/
```

Esta estructura irá creciendo a medida que avancemos en la unidad.

## 1. Crear tu copia personal del repositorio (fork)

Para trabajar con el material desde tu propio ordenador, primero debes crear una copia del repositorio del profesor en tu cuenta de GitHub.

Repositorio original del profesor: [https://github.com/luis-gongom/UT4](https://github.com/luis-gongom/UT4)

Sigue estos pasos:

1. Accede al repositorio original del profesor.
2. Inicia sesión en tu cuenta de GitHub. Si todavía no tienes una cuenta, tendrás que crearla.
3. Pulsa el botón **Fork**, situado en la parte superior derecha de la página.
4. Selecciona tu cuenta personal como destino y crea el fork.

Al finalizar, tendrás una copia propia del repositorio en tu cuenta de GitHub.

> **Importante:** tu fork es independiente del repositorio del profesor. Cuando se publiquen nuevos contenidos, tendrás que incorporarlos siguiendo las instrucciones de actualización de este documento.

## 2. Descargar el repositorio en tu ordenador

Una vez creado el fork, debes descargarlo en tu equipo para trabajar con los archivos desde Visual Studio Code.

### Paso 1. Copiar la URL de tu repositorio

1. Accede a tu fork personal en GitHub.
2. Pulsa el botón **Code**.
3. Selecciona la opción **HTTPS** y copia la URL de tu repositorio.

La URL tendrá un formato similar a este:

```text
https://github.com/TU-USUARIO/UT4.git
```

Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub.

### Paso 2. Clonar el repositorio

Abre Visual Studio Code y accede al menú **Terminal → Nuevo terminal**.

Ejecuta el siguiente comando utilizando la URL de tu fork personal:

```bash
git clone https://github.com/TU-USUARIO/UT4.git
```

Este comando descargará el repositorio en tu ordenador.

### Paso 3. Abrir el proyecto

Accede a la carpeta descargada:

```bash
cd UT4
```

A continuación, abre el proyecto en Visual Studio Code:

```bash
code .
```

Si el comando `code .` no está disponible, puedes abrir la carpeta `UT4` desde el menú **Archivo → Abrir carpeta**.

Ya puedes consultar, ejecutar y modificar los archivos del proyecto.

## 3. Configurar el repositorio original del profesor

Para recibir los nuevos contenidos que se publiquen durante las clases, debes configurar una conexión con el repositorio original del profesor.

Esta configuración se realiza **una sola vez** en cada copia local del proyecto.

Abre el terminal de Visual Studio Code, asegurándote de estar dentro de la carpeta `UT4`, y ejecuta:

```bash
git remote add upstream https://github.com/luis-gongom/UT4.git
```

Con este comando se añade el repositorio original del profesor con el nombre `upstream`.

### Comprobar la configuración

Ejecuta:

```bash
git remote -v
```

Deberías ver dos repositorios remotos:

- **origin**: tu fork personal de GitHub.
- **upstream**: el repositorio original del profesor.

Por ejemplo:

```text
origin    https://github.com/TU-USUARIO/UT4.git (fetch)
origin    https://github.com/TU-USUARIO/UT4.git (push)
upstream  https://github.com/luis-gongom/UT4.git (fetch)
upstream  https://github.com/luis-gongom/UT4.git (push)
```

Las direcciones de `origin` serán diferentes para cada alumno, ya que apuntarán a su propio repositorio.

## 4. Actualizar el material desde casa

Cada vez que el profesor publique una nueva clase, un ejercicio o una actividad, tendrás que incorporar esos cambios a tu copia local.

Este procedimiento permite actualizar el material sin tener que descargar de nuevo todo el repositorio.

### Paso 1. Comprobar el estado del repositorio

Antes de actualizar, ejecuta:

```bash
git status
```

Si has modificado archivos, guarda tu trabajo mediante un commit antes de continuar:

```bash
git add .
git commit -m "Guarda el trabajo realizado"
```

Si no tienes cambios pendientes, puedes continuar directamente.

### Paso 2. Descargar las novedades del profesor

Ejecuta:

```bash
git fetch upstream
```

Este comando consulta el repositorio original y descarga la información de los cambios publicados, pero no modifica directamente los archivos de tu carpeta de trabajo.

### Paso 3. Incorporar las novedades

Si la rama principal se llama `main`, ejecuta:

```bash
git switch main
git merge upstream/main
```

El primer comando cambia a la rama principal de tu repositorio local. El segundo incorpora las novedades publicadas por el profesor.

Si Git indica que hay conflictos, tendrás que revisar los archivos afectados y resolverlos antes de continuar.

### Paso 4. Subir la actualización a tu fork personal

Una vez incorporados los cambios, ejecuta:

```bash
git push origin main
```

De esta forma, tu repositorio personal de GitHub también tendrá los nuevos contenidos.

### Resumen de los comandos de actualización

Cuando quieras incorporar las novedades del profesor, el procedimiento habitual será:

```bash
git status
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

> **Recuerda:** si tienes cambios propios sin guardar, debes guardarlos antes de actualizar. Si Git detecta conflictos, resuélvelos antes de ejecutar el último comando.

## 5. Trabajar desde diferentes equipos

Si trabajas tanto en el aula como en casa, recuerda que los archivos de tu ordenador no se sincronizan automáticamente con GitHub.

### Al terminar de trabajar en un equipo

Guarda tus cambios y súbelos a tu fork:

```bash
git add .
git commit -m "Describe los cambios realizados"
git push origin main

# Angular Logger


Application example built with [Angular](https://angular.io/) 13 and adding the log component using the [ngx-logger](https://www.npmjs.com/package/ngx-logger) library.

This tutorial was posted on my [blog](https://rodrigo.kamada.com.br/blog/adicionando-o-componente-de-log-em-uma-aplicacao-angular) in portuguese and on the [DEV Community](https://dev.to/rodrigokamada/adding-the-log-component-to-an-angular-application-49f9) in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))



## Getting started


### Create the Angular application


**1.** Let's create the application with the Angular base structure using the `@angular/cli` with the route file and the SCSS style format.

```shell
ng new angular-logger
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE angular-logger/README.md (1059 bytes)
CREATE angular-logger/.editorconfig (274 bytes)
CREATE angular-logger/.gitignore (604 bytes)
CREATE angular-logger/angular.json (3255 bytes)
CREATE angular-logger/package.json (1076 bytes)
CREATE angular-logger/tsconfig.json (783 bytes)
CREATE angular-logger/.browserslistrc (703 bytes)
CREATE angular-logger/karma.conf.js (1431 bytes)
CREATE angular-logger/tsconfig.app.json (287 bytes)
CREATE angular-logger/tsconfig.spec.json (333 bytes)
CREATE angular-logger/src/favicon.ico (948 bytes)
CREATE angular-logger/src/index.html (299 bytes)
CREATE angular-logger/src/main.ts (372 bytes)
CREATE angular-logger/src/polyfills.ts (2820 bytes)
CREATE angular-logger/src/styles.scss (80 bytes)
CREATE angular-logger/src/test.ts (788 bytes)
CREATE angular-logger/src/assets/.gitkeep (0 bytes)
CREATE angular-logger/src/environments/environment.prod.ts (51 bytes)
CREATE angular-logger/src/environments/environment.ts (658 bytes)
CREATE angular-logger/src/app/app-routing.module.ts (245 bytes)
CREATE angular-logger/src/app/app.module.ts (393 bytes)
CREATE angular-logger/src/app/app.component.scss (0 bytes)
CREATE angular-logger/src/app/app.component.html (24617 bytes)
CREATE angular-logger/src/app/app.component.spec.ts (1097 bytes)
CREATE angular-logger/src/app/app.component.ts (219 bytes)
✔ Packages installed successfully.
```

**2.** Install and configure the Bootstrap CSS framework. Do steps 2 and 3 of the post *[Adding the Bootstrap CSS framework to an Angular application](https://github.com/rodrigokamada/angular-bootstrap)*.

**3.** Configure the log settings in the `src/environments/environment.ts` and `src/environments/environment.prod.ts` files as below.

```typescript
logger: {
  level: 'TRACE',
},
```

**4.** Install the `ngx-logger` library.

```shell
npm install ngx-logger
```

**5.** Import the `HttpClientModule` and `LoggerModule` modules. Configure the log settings. Change the `app.module.ts` file and add the lines as below.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { environment } from '../environments/environment';

const environmentConfig: any = environment.logger;

imports: [
  BrowserModule,
  HttpClientModule,
  LoggerModule.forRoot({
    level: NgxLoggerLevel[environmentConfig.level],
    serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
    serverLoggingUrl: environmentConfig.serverUrl,
  } as any),
  AppRoutingModule,
],
```

**6.** Remove the contents of the `AppComponent` class from the `src/app/app.component.ts` file. Import the `NGXLogger` service and create the log levels methods as below.

```typescript
import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private logger: NGXLogger) {
  }

  public showTrace(): void {
    this.logger.trace('TRACE level');
  }

  public showDebug(): void {
    this.logger.debug('DEBUG level');
  }

  public showInfo(): void {
    this.logger.info('INFO level');
  }

  public showWarn(): void {
    this.logger.warn('WARN level');
  }

  public showError(): void {
    this.logger.error('ERROR level');
  }

  public showFatal(): void {
    this.logger.fatal('FATAL level');
  }

}
```

**7.** Remove the contents of the `src/app/app.component.html` file. Add the log levels buttons as below.

```html
<div class="container-fluid py-3">
  <h1>Angular Logger</h1>
  <div class="d-grid gap-2 col-4 mt-4 mx-auto">
    <button type="button" class="btn btn-sm btn-primary" (click)="showTrace()">Trace</button>
    <button type="button" class="btn btn-sm btn-success" (click)="showDebug()">Debug</button>
    <button type="button" class="btn btn-sm btn-info" (click)="showInfo()">Info</button>
    <button type="button" class="btn btn-sm btn-warning" (click)="showWarn()">Warn</button>
    <button type="button" class="btn btn-sm btn-danger" (click)="showError()">Error</button>
    <button type="button" class="btn btn-sm btn-secondary" (click)="showFatal()">Fatal</button>
  </div>
  <p class="mt-4 text-center">
    <span class="fw-bold me-1">Note:</span>
    <span class="fst-italic">See the messages displayed in the browser console.</span>
  </p>
</div>
```

**8.** Run the application with the command below.

```shell
npm start

> angular-logger@1.0.0 start
> ng serve

✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   2.55 MB
styles.css          | styles        | 266.58 kB
polyfills.js        | polyfills     | 128.51 kB
scripts.js          | scripts       |  76.67 kB
main.js             | main          |  14.41 kB
runtime.js          | runtime       |   6.63 kB

                    | Initial Total |   3.03 MB

Build at: 2021-09-04T19:25:20.982Z - Hash: dcc562d0e20cf029eab3 - Time: 12067ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

**9.** Ready! Access the URL `http://localhost:4200/` and check if the application is working. See the application working on [GitHub Pages](https://rodrigokamada.github.io/angular-logger/) and [Stackblitz](https://stackblitz.com/edit/angular13-logger).

![Angular Logger](https://res.cloudinary.com/rodrigokamada/image/upload/v1637686964/Blog/angular-logger/angular-logger.png)



## Cloning the application

**1.** Clone the repository.

```shell
git clone git@github.com:rodrigokamada/angular-logger.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Run the application.

```shell
npm start
```

# The Application Shell

## Set up the Development Enviroment

You need to set up your development environment before you can do anything.

Install Node.js® and npm if they are not already on your machine.

Install the Angular CLI globally.
```
npm install -g @angular/cli
```

## Create new project

```
ng new my-zoomchartsApp
```

## Serve the application

Go to project directory 
```
cd my-zoomchartsApp
```
## Create the ZoomCharts component

Using the Angular CLI, generate a new component named **_zoomcharts_**.
```
ng generate component zoomcharts
```
Install ZoomCharts library via npm
```
npm  install --save @dvsl/zoomcharts
```

### _src/app/zoomcharts/zoomcharts.component.ts_ file

The ZoomchartsComponent class 

```javascript
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as zc from '@dvsl/zoomcharts';
import { WindowRef } from './../WindowRef';

@Component({
  selector: 'app-zoomcharts',
  template: `<div class="chart-wrapper">
    <div id="chartPieChart" class="chart"></div>
  </div>`
})

export class ZoomchartsComponent implements AfterViewInit {
  // for optimal operation: ref to zc instance
  private zc: any = zc;

  constructor(private winRef: WindowRef) {
    // Add license key
    winRef.nativeWindow.ZoomChartsLicense = '';
    winRef.nativeWindow.ZoomChartsLicenseKey = '';
  }

  ngAfterViewInit() {
    const PieChart = this.zc.PieChart;
    const t = new PieChart({
      container: document.getElementById('chartPieChart'),
      area: { height: 350 },
      data: {
        preloaded: {
          subvalues: [
            {
              id: 'foo', value: 100, subvalues: [
                { id: 'foo-1', value: 50, style: { expandable: false } },
                { id: 'foo-2', value: 50, style: { expandable: false } }
              ]
            },
            { id: 'bar', value: 50, style: { expandable: false } },
            { id: 'baz', value: 30, style: { expandable: false } }
          ]
        }
      }
    });
  }
}


```

### _.angular-cli.json_ file

```javascript
//Add { "glob": "**/*", "input": "../node_modules/@dvsl/zoomcharts/lib/assets", "output": "./assets/" }

"apps": [
   {
      ...
     "assets": [
       "assets",
       "favicon.ico",
       { "glob": "**/*", "input": "../node_modules/@dvsl/zoomcharts/lib/assets", "output": "./assets/" }
     ],
      ...
   }
 ],
```

### _src/app/app.component.html_ file

To display the ZoomchartsComponent, you must add it to the template of the shell AppComponent.
```html
<app-zoomcharts></app-zoomcharts>
```

## Add license key

Generate class **_WindowRef_**
```
ng generate class WindowRef
```

### _app/WindowRef.ts_ file

```javascript
import { Injectable } from '@angular/core';
function _window(): any {
   return window;
}
@Injectable()
export class WindowRef {
   get nativeWindow(): any {
      return _window();
   }
}
```
### _app/modules.ts_ file

Register WindowRef as provider
```javascript
import { WindowRef } from './WindowRef';

...

@NgModule({
    ...
    providers: [ WindowRef ]
})
export class AppModule{}
```

### _src/app/zoomcharts/zoomcharts.component.ts_

```javascript
...

import { WindowRef } from './../WindowRef';

...

  constructor(private winRef: WindowRef) {
    // Add license key
    winRef.nativeWindow.ZoomChartsLicense = '';
    winRef.nativeWindow.ZoomChartsLicenseKey = '';
  }

  ...

```

## Launch the server

```
ng serve --open
```

## ZoomCharts component library

To save your time you can import already pre-built ZoomCharts components into your project from the link below. To do so you will need to import the component into your project and configure it accordingly. 

https://github.com/zoomcharts/zoomcharts-angular-component-integration-example

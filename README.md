# Angular19Playground


## Angular 19 

#### standalone is true by default
From Angular 19, standalone is true by default when creating new projects. When we create a new project or create a new component, by default, it will be a standalone component(standalone metadata will not be there even if its standalone component). We have to add standalone metadata as false, if we don't want the component as standalone component.

We can strictly enforce standalone(true) for all component by configuring this in tsconfig.json.

```
{
  "angularCompilerOptions": {
    "strictStandalone": true
  }
}

```

- Stabilization of signal APIs

- input and output as functions(not as decorators) is also stable and recommended way of using it.

- schematics for updating to signals if you are not using signals( to change existing input,output, viewChild to signal based function approach with cli command)
ng generate @angular/core:signals

- 2 new ways of adding signals. They are linkedSignal and resource. (experimental feature)

- Incremental hydration (experimental feature)

- A new interface called ServerRoute is introduced, which allows to configure whether the individual routes should be server-side rendered, prerendered, or rendered on the client side with mode key.

```
export const serverRouteConfig: ServerRoute[] = [
  { path: '/login', mode: RenderMode.Server },
  { path: '/dashboard', mode: RenderMode.Client },
  { path: '/**', mode: RenderMode.Prerender },
];

```

- state of zoneless (Still in development, some final touch need from angular team before developer preview)

### References 
Maximilian - https://www.youtube.com/watch?v=B18LKRW617Q

Angular 19 official release blog post - https://blog.angular.dev/meet-angular-v19-7b29dfd05b84




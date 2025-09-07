import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  template: 'yazan <a [routerLink]="\'/ui2\'">router</a><router-outlet></router-outlet>',
  imports: [RouterModule],
  standalone: true,
})
class YazanComponent {}

@Component({
  template: 'yazan2',
  standalone: true,
})
class Yazan2Component {}

@Component({
  template: 'yaza3',
  standalone: true,
})
class Yazan3Component {}

export const appRoutes: Route[] = [
  {path: '', component: YazanComponent, children: [{path: 'ui', component: Yazan2Component}, {path: 'ui2', component: Yazan3Component}, {path: '**', redirectTo: '/ui'}]},
];

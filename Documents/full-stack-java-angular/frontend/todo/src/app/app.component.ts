import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template: '<h1> {{title}} </h1>',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, WelcomeComponent, LoginComponent, FormsModule, CommonModule, MenuComponent, FooterComponent]
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome';
}

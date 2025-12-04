import { Component } from '@angular/core';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}

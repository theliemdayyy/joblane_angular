import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-job-categories',
  standalone: true,
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.scss'],
  imports: [HeaderComponent, FooterComponent],

})
export class JobCategoriesComponent {
  // ...additional properties and methods
}

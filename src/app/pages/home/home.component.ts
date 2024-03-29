import { Component } from '@angular/core';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SmallCardComponent, MenuTitleComponent, MenuBarComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

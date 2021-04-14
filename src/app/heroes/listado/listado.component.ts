import { Component/* , OnInit */ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent /* implements OnInit */ {

  // constructor() {
  //   console.log('constructor')
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit')
  // }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // console.log('Borrando...')
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado)
    // this.heroeBorrado = heroeBorrado

    this.heroeBorrado = this.heroes.shift() || "";
  }

}

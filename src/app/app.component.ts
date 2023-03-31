import { Component } from '@angular/core';

enum ROUTES {
  RECIPES = 'recipes',
  SHOOPING_LIST = 'shopping-list'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // selected: string = 'recipe';
  

  // Routing(selectedRoute: string){
  //   this.selected = selectedRoute;
  // }

  // onSwitchToRecipe(){
  //   if(this.selected === ROUTES.RECIPES){
  //     return true;
  //   } else if (this.selected === ROUTES.SHOOPING_LIST){
  //     return false;
  //   }
  // }

  loadedFeature: string | ROUTES = ROUTES.RECIPES
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }


}

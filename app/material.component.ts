import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'material-app',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.css']
})


export class MaterialAppComponent {
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  formShowing: boolean = true;

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    },
    {
      name: "Uttu",
      description: "Prerna",
      icon: "face",
    }
  ];
  
  dogs: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];
}


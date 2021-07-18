import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { CardComponent } from './components/card/card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Posts';
  postTitle = 'Post';
  openModal = false;
  postDescription: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur  accusamus tenetur, magnam veritatis commodi ullam?';

  @ViewChild('postContent', { read: ViewContainerRef })
  postContent!: ViewContainerRef;

  components = [] as any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addComponent() {
    console.log(this.openModal);
    if (this.components.length < 10) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(CardComponent);
      const component = this.postContent.createComponent(componentFactory);

      this.components.push(component);
    } else {
      this.openModal = true;
    }
  }

  removeComponent() {
    const component = this.components.find(
      (component: any) => component.instance instanceof CardComponent
    );
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      this.postContent.remove();
      this.components.splice(componentIndex, 1);
    }
  }

  removeAll() {
    this.postContent.clear();
    this.components = [];
  }
}

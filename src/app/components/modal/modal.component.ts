import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  text = 'You are not able to add new cards your limit reached!';

  @Input() openModal!: boolean;

  closeModal() {
    this.openModal = false;
  }

}

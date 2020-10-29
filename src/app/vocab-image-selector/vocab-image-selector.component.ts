import {Component, OnInit} from '@angular/core';

// @ts-ignore
// import images from '../../assets/tmp/vocab_image_15k-16k.json';


@Component({
  selector: 'app-vocab-image-selector',
  templateUrl: './vocab-image-selector.component.html',
  styleUrls: ['./vocab-image-selector.component.scss']
})
export class VocabImageSelectorComponent implements OnInit {

  imagesMap = new Map<string, Array<any>>();
  deleteIDs = [];

  constructor() { }

  ngOnInit(): void {
    const images = [];
    console.log(`start init`);
    images.forEach(i => {
      const list = this.imagesMap.get(i.WORD) !== undefined ? this.imagesMap.get(i.WORD) : new Array();
      list.push(i);
      this.imagesMap.set(i.WORD, list);
    });
    console.log(`imagesMap.size: ${this.imagesMap.size}`);
  }

  get imageKeys(): Array<string> {
    return Array.from(this.imagesMap.keys());
  }

  addToDelete(event: any, ID: string): void {
    const position = this.deleteIDs.indexOf(ID);
    if (position < 0) {
      event.target.style.border = 'thick solid #FF0000';
      this.deleteIDs.push(ID);
    } else {
      event.target.style.border = '';
      this.deleteIDs.splice(position, 1);
    }

    console.log(`deleteIDs: ${this.deleteIDs}`);
  }

  showDeleteIDs(): void {
    console.log(`deleteIDs: ${this.deleteIDs}`);
    alert(this.deleteIDs.join(','));
  }
}

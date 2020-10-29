import {Component, HostListener, OnInit} from '@angular/core';

import {AdminService} from '../services/admin.service';
import {WebItem} from '../entity/web-item';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';

interface SelectedImage {
  word: string;
  base64Image: string;
}

@Component({
  selector: 'app-add-vocab-image',
  templateUrl: './add-vocab-image.component.html',
  styleUrls: ['./add-vocab-image.component.scss']
})
export class AddVocabImageComponent implements OnInit {
  words = [];
  word: string;
  images: WebItem[] = [];
  selectedImages: SelectedImage[] = [];
  savedImage = 0;

  constructor(
    private adminService: AdminService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.adminService.getPendingWords().subscribe(pendingWords => {
      this.words = pendingWords;
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    console.log(`${event.key}`);
    if (event.key === 'm') {
      this.retrieveImages(this.word);
    } else if (event.key === 'd') {
      this.markDone();
    } else if (event.key === 's') {
      this.saveImages();
    }
  }

  retrieveImages(word: string): void {
    this.word = word;
    this.adminService.getImageFromWeb(word, this.images.length + 1).subscribe(results => {
      this.images = this.images.concat(results);
    });
  }

  selectImage(event: any, image: WebItem): void {
    this.selectedImages.push({word: this.word, base64Image: image.url});
    event.target.style.border = 'thick solid #FF0000';
  }

  saveImages(): void {
    console.log(`save images: ${JSON.stringify(this.selectedImages)}`);
    this.selectedImages.forEach(i => this.adminService.saveImage(i.word, i.base64Image).subscribe(() => this.savedImage++));
  }

  markDone(): void {
    this.images = [];
    this.selectedImages = [];
    this.words.splice(this.words.indexOf(this.word), 1);
    this.adminService.deletePendingWord(this.word);

    this.word = null;
    this.savedImage = 0;
    window.scrollTo(0, 0);
  }

}

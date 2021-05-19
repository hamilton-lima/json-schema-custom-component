import { Injectable } from '@angular/core';
import { NOTE_TYPES, POTATO } from './examples';
import { LoremIpsum } from 'lorem-ipsum';

export interface INote {
  type: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormSandboxService {
  lorem: LoremIpsum;

  constructor() {
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
  }

  getDefault(): any {
    return POTATO;
  }

  getRandomNote(): INote {
    const randomType = Math.floor(Math.random() * NOTE_TYPES.length);
    const type = NOTE_TYPES[randomType];
    const text = this.lorem.generateSentences(1);
    return <INote>{ type: type, text: text };
  }
}

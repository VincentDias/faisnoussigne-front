import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Files } from './files';


export class Article {

  id: number;
  title: string;
  content: string;
  file: Files[];

}

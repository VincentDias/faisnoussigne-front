import { Files } from './files';


export class Article {

  id: number;
  title: string;
  content: string;

  constructor(private file: Files[]) { }

}

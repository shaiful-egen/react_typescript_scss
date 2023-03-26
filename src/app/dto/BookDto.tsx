export class BookDto {

  id: number | null = null;
  name: string | null = null;
  authorName: string | null = null;

  constructor(o?: Partial<BookDto>) {
    Object.assign(this, o);
  }
}

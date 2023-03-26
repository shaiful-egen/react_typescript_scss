import {BookDto} from "./BookDto";

export class StudentDto {

  id: number | null = null;
  name: string | null = null;

  bookDtoList: Array<BookDto> = []

  constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o);
  }
}

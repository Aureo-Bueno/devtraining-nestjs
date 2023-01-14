import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly course: number;

  @IsNumber()
  readonly ra: number;
}

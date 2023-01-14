import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {
  private Students: Student[] = [
    {
      id: 1,
      name: 'Aluno Exemplo',
      course: 1,
      ra: 98093,
    },
  ];

  findAllStudents() {
    return this.Students;
  }

  findOneStudent(id: string) {
    const Student = this.Students.find(
      (Student: Student) => Student.id === Number(id),
    );

    if (!Student) {
      throw new HttpException(
        `Student ID ${id} not found!`,
        HttpStatus.NOT_FOUND,
      );
    }

    return Student;
  }

  createStudent(createStudentDto: any) {
    this.Students.push(createStudentDto);
    return createStudentDto;
  }

  updateStudent(id: string, updateStudentDto: any) {
    const existingStudent = this.Students.findIndex(
      (Student) => Student.id === Number(id),
    );

    this.Students[existingStudent] = updateStudentDto;
  }

  removeStudent(id: string) {
    const indexStudent = this.Students.findIndex(
      (Student) => Student.id === Number(id),
    );

    if (indexStudent >= 0) {
      this.Students.splice(indexStudent, 1);
    }
  }
}

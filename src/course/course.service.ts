import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJs',
      description: 'Fundamentos do NestJs',
      tags: ['node.js', 'nest.js', 'typescript'],
    },
  ];

  findAllCourses() {
    return this.courses;
  }

  findOneCourse(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found!`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  createCourse(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  updateCourse(id: string, updateCourseDto: any) {
    const existingCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[existingCourse] = updateCourseDto;
  }

  removeCourse(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}

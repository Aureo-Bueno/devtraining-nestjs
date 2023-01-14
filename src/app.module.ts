import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
@Module({
  imports: [CourseModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

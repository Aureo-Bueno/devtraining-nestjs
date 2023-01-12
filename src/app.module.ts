import { Module } from '@nestjs/common';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService],
})
export class AppModule {}

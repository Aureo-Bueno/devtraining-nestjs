import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('list')
  findAll() {
    return this.courseService.findAllCourses();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.courseService.findOneCourse(id);
  }

  @Post('create')
  create(@Body() body) {
    return this.courseService.createCourse(body);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body) {
    return this.courseService.updateCourse(id, body);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.courseService.removeCourse(id);
  }
}

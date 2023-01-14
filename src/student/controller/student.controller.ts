import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { CreateStudentDto } from '../dto/create-student.dto';
import { StudentService } from '../service/student.service';

@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('list')
  findAll() {
    return this.studentService.findAllStudents();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.studentService.findOneStudent(id);
  }

  @Post('create')
  create(@Body() createstudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createstudentDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatestudentDto: any) {
    return this.studentService.updateStudent(id, updatestudentDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.studentService.removeStudent(id);
  }
}

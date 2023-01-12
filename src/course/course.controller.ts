import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('course')
export class CourseController {
  @Get('list')
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos!');
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `Curso do id: ${id}.`;
  }

  @Post('create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualizacao do curso ${id}`;
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return `Exclusao do curso com id: ${id}.`;
  }
}

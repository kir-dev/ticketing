import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { LabelService } from './label.service'
import { EditLabelDto } from '../schemas/label.schema'

@Controller('label')
export class LabelController {
  constructor(private labelService: LabelService) {}

  @Get()
  async getAll() {
    return await this.labelService.findAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.labelService.findOne(id)
  }

  @Put()
  async create(@Body() editLabelDto: EditLabelDto) {
    return await this.labelService.create(editLabelDto)
  }

  @Post(':id')
  async edit(@Param('id') id: string, @Body() editLabelDto: EditLabelDto) {
    return await this.labelService.edit(editLabelDto, id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.labelService.delete(id)
  }
}

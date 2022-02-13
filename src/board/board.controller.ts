import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BoardService } from './board.service'
import { EditBoardDto } from '../schemas/board.schema'

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  async getAll() {
    return await this.boardService.findAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.boardService.findOne(id)
  }

  @Put()
  async create(@Body() editBoardDto: EditBoardDto) {
    return await this.boardService.create(editBoardDto)
  }

  @Post(':id')
  async edit(@Param('id') id: string, @Body() editBoardDto: EditBoardDto) {
    return await this.boardService.edit(editBoardDto, id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.boardService.delete(id)
  }
}

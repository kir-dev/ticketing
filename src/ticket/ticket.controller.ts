import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TicketService } from './ticket.service'
import { EditTicketDto } from '../schemas/ticket.schema'

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Get()
  async getAll() {
    return await this.ticketService.findAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.ticketService.findOne(id)
  }

  @Get(':id/labels')
  async getLabels(@Param('id') id: string) {
    return await this.ticketService.getLabels(id)
  }

  @Delete(':ticketId/labels/:labelId')
  async removeLabel(@Param('ticketId') ticketId: string, @Param('labelId') labelId: string) {
    return await this.ticketService.removeLabel(ticketId, labelId)
  }

  @Put()
  async create(@Body() editTicketDto: EditTicketDto) {
    return await this.ticketService.create(editTicketDto)
  }

  @Post(':id')
  async edit(@Param('id') id: string, @Body() editTicketDto: EditTicketDto) {
    return await this.ticketService.edit(editTicketDto, id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.ticketService.delete(id)
  }
}

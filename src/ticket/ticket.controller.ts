import { Controller, Get, Post, Body } from '@nestjs/common'
import { TicketService } from './ticket.service'
import { CreateTicketDto } from '../schemas/ticket.schema'

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @Get()
  async getTickets() {
    return await this.ticketService.findAll()
  }
  @Post()
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketService.create(createTicketDto)
  }
}

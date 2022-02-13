import { Module } from '@nestjs/common'
import { TicketService } from './ticket.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Ticket, TicketSchema } from '../schemas/ticket.schema'
import { TicketController } from './ticket.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}

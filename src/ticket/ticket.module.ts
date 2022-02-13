import { Module } from '@nestjs/common'
import { TicketService } from './ticket.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Ticket, TicketSchema } from '../schemas/ticket.schema'
import { TicketController } from './ticket.controller'
import { Label, LabelSchema } from '../schemas/label.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Label.name, schema: LabelSchema }
    ])
  ],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}

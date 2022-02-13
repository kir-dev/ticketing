import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateTicketDto, Ticket, TicketDocument } from '../schemas/ticket.schema'
import { Model } from 'mongoose'

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}

  async create(ticketDto: CreateTicketDto): Promise<Ticket> {
    const createdTicket = new this.ticketModel({
      ...ticketDto,
      date: Date.now()
    })
    return createdTicket.save()
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec()
  }
}

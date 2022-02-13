import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { EditTicketDto, Ticket, TicketDocument } from '../schemas/ticket.schema'
import { Model } from 'mongoose'
import { Label, LabelDocument } from '../schemas/label.schema'

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>,
    @InjectModel(Label.name) private labelModel: Model<LabelDocument>
  ) {}
  async findOne(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).exec()
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec()
  }

  async getLabels(id: string): Promise<Label[]> {
    const { labelIds } = await this.ticketModel.findById(id).exec()
    return this.labelModel.find({ _id: { $in: labelIds } })
  }

  async removeLabel(ticketId: string, labelId: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(ticketId).exec()
    ticket.set(
      'labelIds',
      ticket.labelIds.filter((id) => id.toString() !== labelId)
    )
    return ticket.save()
  }

  async create(ticketDto: EditTicketDto): Promise<Ticket> {
    const ticket = new this.ticketModel({
      ...ticketDto,
      createdAt: Date.now()
    })
    return ticket.save()
  }

  async edit({ title, description, labelIds, boardId }: EditTicketDto, id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id).exec()
    ticket.set('title', title)
    ticket.set('description', description)
    ticket.set('labelIds', labelIds)
    ticket.set('boardId', boardId)
    return ticket.save()
  }

  async delete(id: string): Promise<Ticket> {
    return this.ticketModel.findByIdAndDelete(id).exec()
  }
}

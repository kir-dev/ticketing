import { Document, ObjectId } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EditTicketDto = {
  title: string
  description: string
  labelIds: ObjectId[]
  boardId: ObjectId[]
}

export type TicketDocument = Ticket & Document

@Schema()
export class Ticket {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  createdAt: number

  @Prop()
  labelIds: ObjectId[]

  @Prop()
  boardId: ObjectId[]
}

export const TicketSchema = SchemaFactory.createForClass(Ticket)

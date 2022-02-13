import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type CreateTicketDto = {
  title: string
  description: string
  tags: string[]
}

export type TicketDocument = Ticket & Document

@Schema()
export class Ticket {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  tags: string[]

  @Prop()
  date: number
}

export const TicketSchema = SchemaFactory.createForClass(Ticket)

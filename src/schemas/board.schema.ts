import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EditBoardDto = {
  title: string
}

export type BoardDocument = Board & Document

@Schema()
export class Board {
  @Prop()
  title: string

  @Prop()
  createdAt: string
}

export const BoardSchema = SchemaFactory.createForClass(Board)

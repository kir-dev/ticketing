import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { EditBoardDto, Board, BoardDocument } from '../schemas/board.schema'
import { Model } from 'mongoose'

@Injectable()
export class BoardService {
  constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) {}
  async findOne(id: string): Promise<Board> {
    return this.boardModel.findById(id).exec()
  }

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec()
  }

  async create(boardDto: EditBoardDto): Promise<Board> {
    const board = new this.boardModel({
      ...boardDto,
      createdAt: Date.now()
    })
    return board.save()
  }

  async edit({ title }: EditBoardDto, id: string): Promise<Board> {
    const board = await this.boardModel.findById(id).exec()
    board.set('title', title)
    return board.save()
  }

  async delete(id: string): Promise<Board> {
    return this.boardModel.findByIdAndDelete(id).exec()
  }
}

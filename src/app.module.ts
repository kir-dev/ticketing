import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Configuration } from './utils/configuration'
import { TicketModule } from './ticket/ticket.module'
import { LabelModule } from './label/label.module'
import { BoardModule } from './board/board.module'

@Module({
  imports: [MongooseModule.forRoot(Configuration.MONGO_DB_CONNECTION_STRING), TicketModule, LabelModule, BoardModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockController } from './block/block.controller';
import { NetworkController } from "./network/network.controller";

@Module({
  imports: [],
  controllers: [AppController, BlockController, NetworkController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProofsController } from './proofs.controller';
import { ProofsService } from './proofs.service';

@Module({
  controllers: [ProofsController],
  providers: [ProofsService],
  exports: [ProofsService],
})
export class ProofsModule {}

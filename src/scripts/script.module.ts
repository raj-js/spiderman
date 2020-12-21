import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Script } from 'src/core/entities';
import { ScriptController } from './script.controller';
import { ScriptService } from './script.service';

@Module({
  imports: [TypeOrmModule.forFeature([Script])],
  providers: [ScriptService],
  controllers: [ScriptController],
  exports: [TypeOrmModule],
})
export class ScriptModule {}

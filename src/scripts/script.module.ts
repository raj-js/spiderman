import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Script } from 'src/core/entities';
import ScriptService from './script.service';
import ScriptController from './script.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Script])],
  providers: [ScriptService],
  controllers: [ScriptController],
  exports: [TypeOrmModule],
})
export class ScriptModule {}

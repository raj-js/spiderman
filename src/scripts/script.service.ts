import { Injectable } from '@nestjs/common';
import { Script } from 'src/core/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { CreateScriptDto } from './dto/create-script.dto';
import { QueryScriptDto } from './dto/query-script.dto';
import { ScriptDto } from './dto/script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';

@Injectable()
export class ScriptService extends CURLServiceBase<
  number,
  Script,
  ScriptDto,
  QueryScriptDto,
  CreateScriptDto,
  UpdateScriptDto
> {
  constructor(
    @InjectRepository(Script)
    protected repository: Repository<Script>,
  ) {
    super(repository);
  }
}

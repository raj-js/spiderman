import { Injectable } from '@nestjs/common';
import { Script } from 'src/core/entities';
import CreateScriptDto from './dto/CreateScriptDto';
import ScriptDto from './dto/ScriptDto';
import UpdateScriptDto from './dto/UpdateScriptDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import QueryScriptDto from './dto/QueryScriptDto';
import { CURLServiceBase } from 'src/core/CURLServiceBase';

@Injectable()
export default class ScriptService extends CURLServiceBase<
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

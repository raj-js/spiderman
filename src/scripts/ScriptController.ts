import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiResponse,
  Success,
  SuccessOrFailed,
  SuccessOrNotFound,
} from 'src/core/infrastructure/ApiResponse';
import ScriptService from './ScriptService';
import CreateScriptDto from './dto/CreateScriptDto';
import ScriptDto from './dto/ScriptDto';
import UpdateScriptDto from './dto/UpdateScriptDto';
import QueryScriptDto from './dto/QueryScriptDto';
import { Equal, Like } from 'typeorm';
import { Paged } from 'src/core/infrastructure/Paging';

@ApiTags('脚本')
@Controller('script')
export default class ScriptController {
  constructor(private readonly scriptService: ScriptService) {}

  @ApiOperation({ summary: '创建脚本' })
  @ApiOkResponse({ type: ApiResponse })
  @Post()
  async Create(
    @Body() reqDto: CreateScriptDto,
  ): Promise<ApiResponse<ScriptDto>> {
    const script = await this.scriptService.Create(reqDto);
    return Success(script);
  }

  @ApiOperation({ summary: '删除脚本' })
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.scriptService.Delete(id, true),
    });
  }

  @ApiOperation({ summary: '修改脚本' })
  @Put()
  async Update(@Body() reqDto: UpdateScriptDto): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.scriptService.Update(reqDto),
    });
  }

  @ApiOperation({ summary: '通过ID获取脚本' })
  @ApiParam({ name: 'id', description: '脚本ID' })
  @ApiOkResponse({ type: ApiResponse })
  @Get(':id')
  async Get(@Param('id') id: number): Promise<ApiResponse<ScriptDto>> {
    const script = await this.scriptService.Get(id);
    return SuccessOrNotFound(script);
  }

  @ApiOperation({ summary: '分页查询脚本数据' })
  @Get()
  async Paging(
    @Query() reqDto: QueryScriptDto,
  ): Promise<ApiResponse<Paged<ScriptDto>>> {
    if (reqDto.Take < 0 || reqDto.Take > 1000) reqDto.Take = 10;
    if (reqDto.Name) reqDto.Where['Name'] = Like(`%${reqDto.Name}%`);
    if (reqDto.IsDeleted) reqDto.Where['IsDeleted'] = Equal(reqDto.IsDeleted);

    return Success(await this.scriptService.Paging(reqDto));
  }
}

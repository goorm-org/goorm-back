import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { GetAbcByIdHandler } from '@application/abc/handler/GetAbcById.handler';
import { CreateAbcHandler } from '@application/abc/handler/CreateAbc.handler';
import { AbcResDto } from '../dto/Abc.res.dto';
import { CreateAbcReqDto } from '../dto/CreateAbc.req.dto';

@Controller('abc')
export class AbcController {
  constructor(
    private readonly getAbcByHandler: GetAbcByIdHandler,
    private readonly createAbcHandler: CreateAbcHandler,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getAbcByHandler.handle(+id);
  }

  @Post()
  async createAbc(@Body() createAbcDto: CreateAbcReqDto) {
    const abc = await this.createAbcHandler.handle(
      createAbcDto.name,
      createAbcDto.age,
      createAbcDto.isActive,
    );

    return new AbcResDto(abc);
  }
}

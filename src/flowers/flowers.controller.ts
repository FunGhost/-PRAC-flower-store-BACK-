import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from '../conception/auth';
import { LoggingInterceptor } from '../conception/interceptor';
import { FlowersCreateDto } from './dto/flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('Flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Returns an array of flowers',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBody({ type: FlowersCreateDto, description: 'FlowersCreateDto' })
  create(@Body() dto: FlowersCreateDto) {
    return this.flowersService.create(dto);
  }
}

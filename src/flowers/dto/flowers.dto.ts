import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FlowersCreateDto {
  @IsString()
  @ApiProperty({
    example: 'Lavender',
    description: 'Name of the flower',
    required: true,
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'White',
    description: 'Color of the flower',
    required: true,
  })
  color: string;

  @IsNumber()
  @ApiProperty({
    example: 10,
    description: 'Price of the flower',
    required: true,
  })
  price: number;
}

export type TFlowersUpdateDto = Partial<FlowersCreateDto>;

import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleDto {
  @ApiProperty({
    description: 'Tên của mục',
    example: 'Tên mẫu',
  })
  name: string;

  @ApiProperty({
    description: 'Mô tả của mục',
    example: 'Đây là mô tả mẫu',
  })
  description: string;

  @ApiProperty({
    description: 'Giá trị',
    example: 100,
    type: Number,
  })
  value: number;
}

export class ExampleResponseDto {
  @ApiProperty({
    description: 'ID của mục',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Tên của mục',
    example: 'Tên mẫu',
  })
  name: string;

  @ApiProperty({
    description: 'Mô tả của mục',
    example: 'Đây là mô tả mẫu',
  })
  description: string;

  @ApiProperty({
    description: 'Giá trị',
    example: 100,
    type: Number,
  })
  value: number;

  @ApiProperty({
    description: 'Ngày tạo',
    example: '2023-01-01T00:00:00Z',
  })
  createdAt: string;
}

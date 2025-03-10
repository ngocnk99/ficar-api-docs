import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateExampleDto, ExampleResponseDto } from './dto/example.dto';

@ApiTags('examples')
@Controller('examples')
export class ExampleController {
  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tất cả các mục' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Số trang',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Số lượng mục trên mỗi trang',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Danh sách mục được trả về thành công',
    type: [ExampleResponseDto],
  })
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    // Không cần triển khai thực tế
    return [];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy một mục theo ID' })
  @ApiParam({ name: 'id', description: 'ID của mục cần lấy' })
  @ApiResponse({
    status: 200,
    description: 'Mục được tìm thấy',
    type: ExampleResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Không tìm thấy mục' })
  findOne(@Param('id') id: string) {
    // Không cần triển khai thực tế
    return {};
  }

  @Post()
  @ApiOperation({ summary: 'Tạo mục mới' })
  @ApiResponse({
    status: 201,
    description: 'Mục đã được tạo thành công',
    type: ExampleResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Dữ liệu đầu vào không hợp lệ' })
  create(@Body() createExampleDto: CreateExampleDto) {
    // Không cần triển khai thực tế
    return {};
  }

  @Put(':id')
  @ApiOperation({ summary: 'Cập nhật một mục theo ID' })
  @ApiParam({ name: 'id', description: 'ID của mục cần cập nhật' })
  @ApiResponse({
    status: 200,
    description: 'Mục đã được cập nhật thành công',
    type: ExampleResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Không tìm thấy mục' })
  @ApiResponse({ status: 400, description: 'Dữ liệu đầu vào không hợp lệ' })
  update(@Param('id') id: string, @Body() updateExampleDto: CreateExampleDto) {
    // Không cần triển khai thực tế
    return {};
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa một mục theo ID' })
  @ApiParam({ name: 'id', description: 'ID của mục cần xóa' })
  @ApiResponse({ status: 200, description: 'Mục đã được xóa thành công' })
  @ApiResponse({ status: 404, description: 'Không tìm thấy mục' })
  remove(@Param('id') id: string) {
    // Không cần triển khai thực tế
    return {};
  }
}

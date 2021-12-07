import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({
    description: 'Create a new product',
    summary: 'Create a new product',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    description: 'Get all products',
    summary: 'Get all products',
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get a product by id',
    summary: 'Get a product by id',
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Update a product by id',
    summary: 'Update a product by id',
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Delete a product by id',
    summary: 'Delete a product by id',
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}

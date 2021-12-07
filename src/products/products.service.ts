import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(createProductDto);
    return this.repository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.repository.findOne(id);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.repository.preload({
      id: id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.repository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.repository.remove(product);
  }
}

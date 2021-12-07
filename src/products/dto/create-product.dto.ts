import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1639353600&Signature=PeEA-0TX0z7SMZE8fiPFf7Z0HYA7Z587acIYTdfwrqN75WuXQE0OhMwMEqElRp~QbA0JYSbqzAMKKhryTNcYYqar~gA1AQJyV~IFs7lGggGd1XSBR5zH4PR70eQdnlFv2MSFNwrEv-5aTLhRlzzXStqW2WBrkgAMChEZ23rpHBb6~GzZ8g7z0oTa7rcDJtrgcglfMQSx2fQyuc0yiPg8T0aNp~wTV2Sl9V4C9U7GBZjIBncA50fiUgjMXsqrjFDFoIpa6yyQUgHmQaO7FYjhpWybt-RHGwtGB3vadwReD3ppBZ3i2x6qKZa0asB5fB5t6lVyJrpHCKpTavtcLJ73zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ example: 'Monitor LED 27 Gamer Curvo Samsung', description: 'Description of the product' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'R$ 2.813,99', description: 'Initial value of the product' })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  valueInitial: number;

  @ApiProperty({ example: 'R$ 2.599,00', description: 'Product Discounted Value' })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  valueDiscount: number;
}

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt?: Date;

  @Column({ name: 'image_url', type: 'text' })
  imageUrl: string;

  @Column({ name: 'description', type: 'varchar', length: 255 })
  description: string;

  @Column({ name: 'value_initial', type: 'int' })
  valueInitial: number;

  @Column({ name: 'value_discount', type: 'int' })
  valueDiscount: number;
}

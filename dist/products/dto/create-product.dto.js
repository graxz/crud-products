"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1639353600&Signature=PeEA-0TX0z7SMZE8fiPFf7Z0HYA7Z587acIYTdfwrqN75WuXQE0OhMwMEqElRp~QbA0JYSbqzAMKKhryTNcYYqar~gA1AQJyV~IFs7lGggGd1XSBR5zH4PR70eQdnlFv2MSFNwrEv-5aTLhRlzzXStqW2WBrkgAMChEZ23rpHBb6~GzZ8g7z0oTa7rcDJtrgcglfMQSx2fQyuc0yiPg8T0aNp~wTV2Sl9V4C9U7GBZjIBncA50fiUgjMXsqrjFDFoIpa6yyQUgHmQaO7FYjhpWybt-RHGwtGB3vadwReD3ppBZ3i2x6qKZa0asB5fB5t6lVyJrpHCKpTavtcLJ73zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "imageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Monitor LED 27 Gamer Curvo Samsung',
        description: 'Description of the product',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2813.99',
        description: 'Initial value of the product',
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "valueInitial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2599.00',
        description: 'Product Discounted Value',
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "valueDiscount", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map
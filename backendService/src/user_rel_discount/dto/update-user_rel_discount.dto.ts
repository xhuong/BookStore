import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRelDiscountDto } from './create-user_rel_discount.dto';

export class UpdateUserRelDiscountDto extends PartialType(CreateUserRelDiscountDto) {}

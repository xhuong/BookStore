import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderRelPaymentDto } from './create-order_rel_payment.dto';

export class UpdateOrderRelPaymentDto extends PartialType(CreateOrderRelPaymentDto) {}

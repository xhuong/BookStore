import { Test, TestingModule } from '@nestjs/testing';
import { UserRelDiscountController } from './user_rel_discount.controller';
import { UserRelDiscountService } from './user_rel_discount.service';

describe('UserRelDiscountController', () => {
  let controller: UserRelDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRelDiscountController],
      providers: [UserRelDiscountService],
    }).compile();

    controller = module.get<UserRelDiscountController>(UserRelDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

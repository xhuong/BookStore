import { Test, TestingModule } from '@nestjs/testing';
import { UserRelDiscountService } from './user_rel_discount.service';

describe('UserRelDiscountService', () => {
  let service: UserRelDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRelDiscountService],
    }).compile();

    service = module.get<UserRelDiscountService>(UserRelDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

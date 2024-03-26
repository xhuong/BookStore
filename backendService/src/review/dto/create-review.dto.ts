import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  review_content: string;

  @IsDateString()
  @IsNotEmpty()
  review_date: Date;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsNumber()
  @IsNotEmpty()
  book_id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}

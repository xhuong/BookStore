import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  isbn: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  available_quantity: number;

  @IsNumber()
  year_of_publication: number;

  @IsString()
  image_url: string;

  @IsNumber()
  author_id: number;

  @IsNumber()
  publisher_id: number;
}

import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

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

  @IsDateString()
  date_added: Date;
}

export class PayloadSearchBookDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  min_price?: number;

  @IsNumber()
  @IsOptional()
  max_price?: number;

  @IsNumber()
  @IsOptional()
  author_id?: number;

  @IsNumber()
  @IsOptional()
  publisher_id?: number;
}

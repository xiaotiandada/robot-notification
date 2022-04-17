import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsString()
  public breed: string;
}

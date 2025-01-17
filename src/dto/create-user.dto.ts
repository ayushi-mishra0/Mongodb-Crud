import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    username:string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
    @IsOptional() // Optional field
    @IsString()
    description?: string;
}

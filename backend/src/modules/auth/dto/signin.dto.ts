import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignIn {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
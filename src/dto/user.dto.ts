import { IsString, IsEmail, MinLength, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Smith',
    minLength: 3,
    required: false,
  })
  @IsString()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'User email',
    example: 'john.smith@example.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;
}

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;
} 
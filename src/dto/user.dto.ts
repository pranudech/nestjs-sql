import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
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

  @ApiProperty({
    description: 'User password',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;
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

  @ApiProperty({
    description: 'User password',
    example: 'newpassword123',
    minLength: 6,
    required: false,
  })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    example: '507f1f77bcf86cd799439011',
  })
  @IsString()
  _id: string;

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

  @ApiProperty({
    description: 'User creation date',
    example: '2024-03-20T10:00:00.000Z',
  })
  @IsString()
  createdAt: Date;
}

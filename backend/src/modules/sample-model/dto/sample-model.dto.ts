import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SampleModelDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}
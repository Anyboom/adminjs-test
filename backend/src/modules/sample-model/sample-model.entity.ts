import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ContactForm {
	@Field()
	id: number;

	@Field()
	name: string;
}

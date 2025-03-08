import { SampleModel, CreateOneSampleModelArgs } from '../shared/prismagraphql/sample-model'
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { SampleModelService } from './sample-model.service'

@Resolver( () => SampleModel )
export class SampleModelResolver
{
	constructor ( private readonly contactFormService: SampleModelService ) { }

	@Query(() => String)
	hello() {
		return 'Hello, GraphQL!';
	}

	@Mutation( () => SampleModel, { nullable: true } )
	async createSampleModel ( @Args() args: CreateOneSampleModelArgs ): Promise<SampleModel | null>
	{
		return this.contactFormService.create( args )
	}
}
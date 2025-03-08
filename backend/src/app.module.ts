import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SampleModelModule } from './modules/sample-model/contact-form.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { SharedModule } from './modules/shared/shared.module'
import { ConfigModule } from '@nestjs/config'

@Module( {
	imports: [
		ConfigModule.forRoot( {
			envFilePath: '.env',
		} ),
		GraphQLModule.forRoot<ApolloDriverConfig>( {
			driver: ApolloDriver,
			autoSchemaFile: join( process.cwd(), 'src/schema.graphql' ),
			playground: process.env.NODE_ENV === 'development',
			context: ( { req } ) => ( { request: req } ),
		} ),
		SharedModule,
		SampleModelModule
	],
	controllers: [ AppController ],
	providers: [ AppService ],
} )


export class AppModule {}

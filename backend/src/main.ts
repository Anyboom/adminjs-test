import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { createAdminJs } from './adminjs'

export const dynamicImport = async ( packageName: string ) =>
	new Function( `return import('${packageName}')` )()

async function bootstrap ()
{
	const app = await NestFactory.create( AppModule )

	const { rootPath, adminRouter } = await createAdminJs({
		rootPath: '/admin',
		resources: ['SampleModel']
	})

	app.use( rootPath, adminRouter )

	const port = process.env.PORT || 3000
	await app.listen( port )
}

bootstrap()

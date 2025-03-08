import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { createAdminJs } from './adminjs'

async function bootstrap ()
{
	const app = await NestFactory.create( AppModule )

	const { rootPath, adminRouter } = await createAdminJs({
		rootPath: '/admin',
		resources: ['User', 'Post']
	})

	app.use( rootPath, adminRouter )

	await app.listen(3000)
}

bootstrap()

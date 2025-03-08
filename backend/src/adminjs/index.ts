import { CResourceBuilder } from "src/adminjs/prisma/models/CResourceBuilder"
import { AdminJSOptions } from 'adminjs'
import { Router } from "express"

const dynamicImport = async ( packageName: string ) =>
	new Function( `return import('${packageName}')` )()

export interface AdminJsWrapperOptions extends AdminJSOptions
{
	resources?: string[]
}

export const createAdminJs = async ( options: AdminJsWrapperOptions ): Promise<{
	rootPath: string,
	adminRouter: Router
}> =>
{
	const adminJSModule = await dynamicImport( 'adminjs' )
	const AdminJS = adminJSModule.default

	const adminJsExpress = await dynamicImport( '@adminjs/express' )
	const AdminJSExpress = adminJsExpress.default

	const PrismaModule = await dynamicImport( '@prisma/client' )

	const adminJsPrisma = await dynamicImport( '@adminjs/prisma' )
	const { Resource, Database } = adminJsPrisma

	AdminJS.registerAdapter( { Database, Resource } )

	const prisma = new PrismaModule.PrismaClient()


	const rootPath = options.rootPath ?? '/admin'

	const resourceBuilder = new CResourceBuilder( prisma )
	options.resources?.forEach( ( resource: string ) => resourceBuilder.addResource( resource ) ) ?? []

	const admin = new AdminJS( {
		rootPath,
		resources: resourceBuilder.build()
	} )

	const adminRouter = AdminJSExpress.buildRouter( admin )

	return {
		rootPath,
		adminRouter
	}
}
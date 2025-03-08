import { ResourceOptions } from 'adminjs'

export class CResource
{
	model: any
	options: ResourceOptions

	constructor ( model: any, options?: ResourceOptions )
	{
		this.model = model
		this.options = options || {}
	}
}
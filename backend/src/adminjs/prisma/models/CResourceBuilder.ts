import { ResourceOptions, ResourceWithOptions } from "adminjs"
import { CResource } from "./CResource"
import { PrismaService } from "../prisma.service"
import { Prisma } from "@prisma/client"

export class CResourceBuilder
{
	private readonly resources: Array<CResource> = [];
	private readonly dmmf: any;

	constructor ( private readonly prisma: PrismaService )
	{
		this.dmmf = Prisma.dmmf;
	}

	/**
	 * Adds a resource to the builder
	 *
	 * @param resource string
	 * @param options ResourceOptions
	 * @returns this
	 */
	public addResource ( resource: string, options?: ResourceOptions ): this
	{
		const model = this.dmmf.datamodel.models.find((model: any) => model.name === resource);
		if (!model) {
			throw new Error(`Model "${resource}" not found in DMMF.`);
		}
		const obj = new CResource(model, options);
		this.resources.push(obj);
		return this;
	}

	/**
	 * Compiles the resources into an array of objects
	 * that can be passed to the AdminJS module
	 *
	 * @returns Array<ResourceWithOptions | any>
	 */
	public build (): Array<ResourceWithOptions | any>
	{
		return this.resources.map((resource) => ({
			resource: {
				model: resource.model,
				client: this.prisma,
			},
			options: resource.options,
		}));
	}
}
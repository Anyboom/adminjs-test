import { ResourceOptions, ResourceWithOptions } from "adminjs";
import { PrismaService } from "../prisma.service";
export declare class CResourceBuilder {
    private readonly prisma;
    private readonly resources;
    private readonly dmmf;
    constructor(prisma: PrismaService);
    addResource(resource: string, options?: ResourceOptions): this;
    build(): Array<ResourceWithOptions | any>;
}

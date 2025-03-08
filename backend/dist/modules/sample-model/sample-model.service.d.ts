import { PrismaService } from "../../adminjs/prisma/prisma.service";
import { BaseCrudService } from "../../adminjs/prisma/crud.service";
import { SampleModel } from "../shared/prismagraphql/sample-model";
import { CreateOneSampleModelArgs, UpdateOneSampleModelArgs, DeleteOneSampleModelArgs, FindFirstSampleModelArgs, FindUniqueSampleModelArgs, FindManySampleModelArgs, SampleModelGroupByArgs, SampleModelAggregateArgs, CreateManySampleModelArgs, UpdateManySampleModelArgs, DeleteManySampleModelArgs } from "../shared/prismagraphql/sample-model/index.js";
export declare class SampleModelService extends BaseCrudService<SampleModel, FindFirstSampleModelArgs, FindUniqueSampleModelArgs, FindManySampleModelArgs, SampleModelGroupByArgs, SampleModelAggregateArgs, CreateOneSampleModelArgs, CreateManySampleModelArgs, UpdateOneSampleModelArgs, UpdateManySampleModelArgs, DeleteOneSampleModelArgs, DeleteManySampleModelArgs> {
    constructor(prisma: PrismaService);
}

import { Prisma } from '@prisma/client';
import { SampleModelWhereUniqueInput } from './sample-model-where-unique.input';
import { SampleModelCreateInput } from './sample-model-create.input';
import { SampleModelUpdateInput } from './sample-model-update.input';
export declare class UpsertOneSampleModelArgs {
    where: Prisma.AtLeast<SampleModelWhereUniqueInput, 'id'>;
    create: SampleModelCreateInput;
    update: SampleModelUpdateInput;
}

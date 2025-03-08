import { SampleModelUpdateInput } from './sample-model-update.input';
import { Prisma } from '@prisma/client';
import { SampleModelWhereUniqueInput } from './sample-model-where-unique.input';
export declare class UpdateOneSampleModelArgs {
    data: SampleModelUpdateInput;
    where: Prisma.AtLeast<SampleModelWhereUniqueInput, 'id'>;
}

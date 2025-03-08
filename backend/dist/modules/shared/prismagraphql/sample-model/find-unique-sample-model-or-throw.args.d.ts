import { Prisma } from '@prisma/client';
import { SampleModelWhereUniqueInput } from './sample-model-where-unique.input';
export declare class FindUniqueSampleModelOrThrowArgs {
    where: Prisma.AtLeast<SampleModelWhereUniqueInput, 'id'>;
}

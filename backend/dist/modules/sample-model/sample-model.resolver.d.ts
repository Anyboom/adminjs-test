import { SampleModel, CreateOneSampleModelArgs } from '../shared/prismagraphql/sample-model';
import { SampleModelService } from './sample-model.service';
export declare class SampleModelResolver {
    private readonly contactFormService;
    constructor(contactFormService: SampleModelService);
    hello(): string;
    createSampleModel(args: CreateOneSampleModelArgs): Promise<SampleModel | null>;
}

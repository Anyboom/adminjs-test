import { Module } from '@nestjs/common'
import { SampleModelService } from './sample-model.service'
import { SampleModelResolver } from './sample-model.resolver'
import { PrismaService } from '../../adminjs/prisma/prisma.service'

@Module( {
	imports: [],
	controllers: [],
	providers: [ SampleModelResolver, SampleModelService, PrismaService ],
} )

export class SampleModelModule { }
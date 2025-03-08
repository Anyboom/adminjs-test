"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleModelScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var SampleModelScalarFieldEnum;
(function (SampleModelScalarFieldEnum) {
    SampleModelScalarFieldEnum["id"] = "id";
    SampleModelScalarFieldEnum["name"] = "name";
})(SampleModelScalarFieldEnum || (exports.SampleModelScalarFieldEnum = SampleModelScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(SampleModelScalarFieldEnum, { name: 'SampleModelScalarFieldEnum', description: undefined });
//# sourceMappingURL=sample-model-scalar-field.enum.js.map
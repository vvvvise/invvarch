import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateManyCareerInput } from "../inputs/EducationInfoCreateManyCareerInput";

@TypeGraphQL.InputType("EducationInfoCreateManyCareerInputEnvelope", {})
export class EducationInfoCreateManyCareerInputEnvelope {
  @TypeGraphQL.Field(_type => [EducationInfoCreateManyCareerInput], {
    nullable: false
  })
  data!: EducationInfoCreateManyCareerInput[];
}

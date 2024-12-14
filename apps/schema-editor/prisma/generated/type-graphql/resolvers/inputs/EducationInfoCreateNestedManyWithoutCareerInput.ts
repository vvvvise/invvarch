import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateManyCareerInputEnvelope } from "../inputs/EducationInfoCreateManyCareerInputEnvelope";
import { EducationInfoCreateOrConnectWithoutCareerInput } from "../inputs/EducationInfoCreateOrConnectWithoutCareerInput";
import { EducationInfoCreateWithoutCareerInput } from "../inputs/EducationInfoCreateWithoutCareerInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoCreateNestedManyWithoutCareerInput", {})
export class EducationInfoCreateNestedManyWithoutCareerInput {
  @TypeGraphQL.Field(_type => [EducationInfoCreateWithoutCareerInput], {
    nullable: true
  })
  create?: EducationInfoCreateWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoCreateOrConnectWithoutCareerInput], {
    nullable: true
  })
  connectOrCreate?: EducationInfoCreateOrConnectWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCreateManyCareerInputEnvelope, {
    nullable: true
  })
  createMany?: EducationInfoCreateManyCareerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoWhereUniqueInput], {
    nullable: true
  })
  connect?: EducationInfoWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateWithoutCareerInput } from "../inputs/EducationInfoCreateWithoutCareerInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoCreateOrConnectWithoutCareerInput", {})
export class EducationInfoCreateOrConnectWithoutCareerInput {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutCareerInput, {
    nullable: false
  })
  create!: EducationInfoCreateWithoutCareerInput;
}

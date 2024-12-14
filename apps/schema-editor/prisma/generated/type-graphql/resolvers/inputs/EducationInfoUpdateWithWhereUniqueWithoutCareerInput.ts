import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoUpdateWithoutCareerInput } from "../inputs/EducationInfoUpdateWithoutCareerInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoUpdateWithWhereUniqueWithoutCareerInput", {})
export class EducationInfoUpdateWithWhereUniqueWithoutCareerInput {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationInfoUpdateWithoutCareerInput, {
    nullable: false
  })
  data!: EducationInfoUpdateWithoutCareerInput;
}

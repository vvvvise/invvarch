import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateWithoutCareerInput } from "../inputs/EducationInfoCreateWithoutCareerInput";
import { EducationInfoUpdateWithoutCareerInput } from "../inputs/EducationInfoUpdateWithoutCareerInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoUpsertWithWhereUniqueWithoutCareerInput", {})
export class EducationInfoUpsertWithWhereUniqueWithoutCareerInput {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationInfoUpdateWithoutCareerInput, {
    nullable: false
  })
  update!: EducationInfoUpdateWithoutCareerInput;

  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutCareerInput, {
    nullable: false
  })
  create!: EducationInfoCreateWithoutCareerInput;
}

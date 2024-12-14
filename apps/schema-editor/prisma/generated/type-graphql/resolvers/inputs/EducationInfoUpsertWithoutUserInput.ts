import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateWithoutUserInput } from "../inputs/EducationInfoCreateWithoutUserInput";
import { EducationInfoUpdateWithoutUserInput } from "../inputs/EducationInfoUpdateWithoutUserInput";
import { EducationInfoWhereInput } from "../inputs/EducationInfoWhereInput";

@TypeGraphQL.InputType("EducationInfoUpsertWithoutUserInput", {})
export class EducationInfoUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoUpdateWithoutUserInput, {
    nullable: false
  })
  update!: EducationInfoUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: EducationInfoCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateWithoutUserInput } from "../inputs/EducationInfoCreateWithoutUserInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoCreateOrConnectWithoutUserInput", {})
export class EducationInfoCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: EducationInfoCreateWithoutUserInput;
}

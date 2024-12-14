import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoUpdateWithoutUserInput } from "../inputs/EducationInfoUpdateWithoutUserInput";
import { EducationInfoWhereInput } from "../inputs/EducationInfoWhereInput";

@TypeGraphQL.InputType("EducationInfoUpdateToOneWithWhereWithoutUserInput", {})
export class EducationInfoUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoUpdateWithoutUserInput, {
    nullable: false
  })
  data!: EducationInfoUpdateWithoutUserInput;
}

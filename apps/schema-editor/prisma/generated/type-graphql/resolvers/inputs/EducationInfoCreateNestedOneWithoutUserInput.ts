import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateOrConnectWithoutUserInput } from "../inputs/EducationInfoCreateOrConnectWithoutUserInput";
import { EducationInfoCreateWithoutUserInput } from "../inputs/EducationInfoCreateWithoutUserInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoCreateNestedOneWithoutUserInput", {})
export class EducationInfoCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutUserInput, {
    nullable: true
  })
  create?: EducationInfoCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: EducationInfoCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: true
  })
  connect?: EducationInfoWhereUniqueInput | undefined;
}

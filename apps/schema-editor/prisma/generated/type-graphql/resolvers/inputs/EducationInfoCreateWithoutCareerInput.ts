import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutEducationInfoInput } from "../inputs/UserCreateNestedOneWithoutEducationInfoInput";

@TypeGraphQL.InputType("EducationInfoCreateWithoutCareerInput", {})
export class EducationInfoCreateWithoutCareerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schoolName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  undergraduate!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEducationInfoInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutEducationInfoInput;
}
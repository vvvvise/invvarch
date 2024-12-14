import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateNestedOneWithoutProjectInfoInput } from "../inputs/CareerCreateNestedOneWithoutProjectInfoInput";
import { UserCreateNestedOneWithoutProjectInfoInput } from "../inputs/UserCreateNestedOneWithoutProjectInfoInput";

@TypeGraphQL.InputType("ProjectInfoCreateInput", {})
export class ProjectInfoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  position!: string;

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
  productName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectInfoInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProjectInfoInput;

  @TypeGraphQL.Field(_type => CareerCreateNestedOneWithoutProjectInfoInput, {
    nullable: false
  })
  career!: CareerCreateNestedOneWithoutProjectInfoInput;
}

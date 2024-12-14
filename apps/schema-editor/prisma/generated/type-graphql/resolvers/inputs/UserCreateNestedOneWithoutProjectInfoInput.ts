import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectInfoInput } from "../inputs/UserCreateOrConnectWithoutProjectInfoInput";
import { UserCreateWithoutProjectInfoInput } from "../inputs/UserCreateWithoutProjectInfoInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutProjectInfoInput", {})
export class UserCreateNestedOneWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInfoInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectInfoInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

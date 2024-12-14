import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCareerInput } from "../inputs/UserCreateOrConnectWithoutCareerInput";
import { UserCreateWithoutCareerInput } from "../inputs/UserCreateWithoutCareerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCareerInput", {})
export class UserCreateNestedOneWithoutCareerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCareerInput, {
    nullable: true
  })
  create?: UserCreateWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCareerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

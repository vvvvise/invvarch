import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectInfoInput } from "../inputs/UserCreateWithoutProjectInfoInput";
import { UserUpdateWithoutProjectInfoInput } from "../inputs/UserUpdateWithoutProjectInfoInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutProjectInfoInput", {})
export class UserUpsertWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInfoInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectInfoInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInfoInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectInfoInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

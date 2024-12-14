import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCareerInput } from "../inputs/UserCreateWithoutCareerInput";
import { UserUpdateWithoutCareerInput } from "../inputs/UserUpdateWithoutCareerInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCareerInput", {})
export class UserUpsertWithoutCareerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCareerInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCareerInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCareerInput, {
    nullable: false
  })
  create!: UserCreateWithoutCareerInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

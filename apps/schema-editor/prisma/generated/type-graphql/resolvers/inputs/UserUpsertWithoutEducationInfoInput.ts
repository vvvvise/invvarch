import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEducationInfoInput } from "../inputs/UserCreateWithoutEducationInfoInput";
import { UserUpdateWithoutEducationInfoInput } from "../inputs/UserUpdateWithoutEducationInfoInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutEducationInfoInput", {})
export class UserUpsertWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEducationInfoInput, {
    nullable: false
  })
  update!: UserUpdateWithoutEducationInfoInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEducationInfoInput, {
    nullable: false
  })
  create!: UserCreateWithoutEducationInfoInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

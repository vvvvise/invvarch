import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIndividualInput } from "../inputs/UserCreateWithoutIndividualInput";
import { UserUpdateWithoutIndividualInput } from "../inputs/UserUpdateWithoutIndividualInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutIndividualInput", {})
export class UserUpsertWithoutIndividualInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutIndividualInput, {
    nullable: false
  })
  update!: UserUpdateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIndividualInput, {
    nullable: false
  })
  create!: UserCreateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

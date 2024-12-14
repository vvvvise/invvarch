import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutEducationInfoInput } from "../inputs/UserUpdateWithoutEducationInfoInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutEducationInfoInput", {})
export class UserUpdateToOneWithWhereWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutEducationInfoInput, {
    nullable: false
  })
  data!: UserUpdateWithoutEducationInfoInput;
}

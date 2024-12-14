import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutProjectInfoInput } from "../inputs/UserUpdateWithoutProjectInfoInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutProjectInfoInput", {})
export class UserUpdateToOneWithWhereWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInfoInput, {
    nullable: false
  })
  data!: UserUpdateWithoutProjectInfoInput;
}

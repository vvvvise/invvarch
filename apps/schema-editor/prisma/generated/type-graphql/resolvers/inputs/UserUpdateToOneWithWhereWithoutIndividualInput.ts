import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutIndividualInput } from "../inputs/UserUpdateWithoutIndividualInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutIndividualInput", {})
export class UserUpdateToOneWithWhereWithoutIndividualInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutIndividualInput, {
    nullable: false
  })
  data!: UserUpdateWithoutIndividualInput;
}

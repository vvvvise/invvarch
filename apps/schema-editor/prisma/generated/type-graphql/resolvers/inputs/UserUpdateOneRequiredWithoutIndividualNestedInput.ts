import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIndividualInput } from "../inputs/UserCreateOrConnectWithoutIndividualInput";
import { UserCreateWithoutIndividualInput } from "../inputs/UserCreateWithoutIndividualInput";
import { UserUpdateToOneWithWhereWithoutIndividualInput } from "../inputs/UserUpdateToOneWithWhereWithoutIndividualInput";
import { UserUpsertWithoutIndividualInput } from "../inputs/UserUpsertWithoutIndividualInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutIndividualNestedInput", {})
export class UserUpdateOneRequiredWithoutIndividualNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIndividualInput, {
    nullable: true
  })
  create?: UserCreateWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIndividualInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutIndividualInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutIndividualInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutIndividualInput | undefined;
}

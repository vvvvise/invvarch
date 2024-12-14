import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEducationInfoInput } from "../inputs/UserCreateOrConnectWithoutEducationInfoInput";
import { UserCreateWithoutEducationInfoInput } from "../inputs/UserCreateWithoutEducationInfoInput";
import { UserUpdateToOneWithWhereWithoutEducationInfoInput } from "../inputs/UserUpdateToOneWithWhereWithoutEducationInfoInput";
import { UserUpsertWithoutEducationInfoInput } from "../inputs/UserUpsertWithoutEducationInfoInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEducationInfoNestedInput", {})
export class UserUpdateOneRequiredWithoutEducationInfoNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEducationInfoInput, {
    nullable: true
  })
  create?: UserCreateWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEducationInfoInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutEducationInfoInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutEducationInfoInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutEducationInfoInput | undefined;
}

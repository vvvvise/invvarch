import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCareerInput } from "../inputs/UserCreateOrConnectWithoutCareerInput";
import { UserCreateWithoutCareerInput } from "../inputs/UserCreateWithoutCareerInput";
import { UserUpdateToOneWithWhereWithoutCareerInput } from "../inputs/UserUpdateToOneWithWhereWithoutCareerInput";
import { UserUpsertWithoutCareerInput } from "../inputs/UserUpsertWithoutCareerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCareerNestedInput", {})
export class UserUpdateOneRequiredWithoutCareerNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCareerInput, {
    nullable: true
  })
  create?: UserCreateWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCareerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCareerInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCareerInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCareerInput | undefined;
}

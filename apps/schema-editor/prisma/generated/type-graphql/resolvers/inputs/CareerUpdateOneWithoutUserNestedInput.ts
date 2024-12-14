import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutUserInput } from "../inputs/CareerCreateOrConnectWithoutUserInput";
import { CareerCreateWithoutUserInput } from "../inputs/CareerCreateWithoutUserInput";
import { CareerUpdateToOneWithWhereWithoutUserInput } from "../inputs/CareerUpdateToOneWithWhereWithoutUserInput";
import { CareerUpsertWithoutUserInput } from "../inputs/CareerUpsertWithoutUserInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerUpdateOneWithoutUserNestedInput", {})
export class CareerUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutUserInput, {
    nullable: true
  })
  create?: CareerCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: CareerUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  disconnect?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  delete?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: CareerUpdateToOneWithWhereWithoutUserInput | undefined;
}

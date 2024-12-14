import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutEducationInfoInput } from "../inputs/CareerCreateOrConnectWithoutEducationInfoInput";
import { CareerCreateWithoutEducationInfoInput } from "../inputs/CareerCreateWithoutEducationInfoInput";
import { CareerUpdateToOneWithWhereWithoutEducationInfoInput } from "../inputs/CareerUpdateToOneWithWhereWithoutEducationInfoInput";
import { CareerUpsertWithoutEducationInfoInput } from "../inputs/CareerUpsertWithoutEducationInfoInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerUpdateOneRequiredWithoutEducationInfoNestedInput", {})
export class CareerUpdateOneRequiredWithoutEducationInfoNestedInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutEducationInfoInput, {
    nullable: true
  })
  create?: CareerCreateWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutEducationInfoInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpsertWithoutEducationInfoInput, {
    nullable: true
  })
  upsert?: CareerUpsertWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateToOneWithWhereWithoutEducationInfoInput, {
    nullable: true
  })
  update?: CareerUpdateToOneWithWhereWithoutEducationInfoInput | undefined;
}

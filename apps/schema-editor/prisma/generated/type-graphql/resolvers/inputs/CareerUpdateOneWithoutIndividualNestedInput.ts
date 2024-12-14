import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutIndividualInput } from "../inputs/CareerCreateOrConnectWithoutIndividualInput";
import { CareerCreateWithoutIndividualInput } from "../inputs/CareerCreateWithoutIndividualInput";
import { CareerUpdateToOneWithWhereWithoutIndividualInput } from "../inputs/CareerUpdateToOneWithWhereWithoutIndividualInput";
import { CareerUpsertWithoutIndividualInput } from "../inputs/CareerUpsertWithoutIndividualInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerUpdateOneWithoutIndividualNestedInput", {})
export class CareerUpdateOneWithoutIndividualNestedInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutIndividualInput, {
    nullable: true
  })
  create?: CareerCreateWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutIndividualInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpsertWithoutIndividualInput, {
    nullable: true
  })
  upsert?: CareerUpsertWithoutIndividualInput | undefined;

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

  @TypeGraphQL.Field(_type => CareerUpdateToOneWithWhereWithoutIndividualInput, {
    nullable: true
  })
  update?: CareerUpdateToOneWithWhereWithoutIndividualInput | undefined;
}

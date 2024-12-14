import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateNestedOneWithoutIndividualInput } from "../inputs/CareerCreateNestedOneWithoutIndividualInput";
import { ExpertiseListCreateNestedOneWithoutIndividualInput } from "../inputs/ExpertiseListCreateNestedOneWithoutIndividualInput";

@TypeGraphQL.InputType("IndividualCreateWithoutUserInput", {})
export class IndividualCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ExpertiseListCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListCreateNestedOneWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  career?: CareerCreateNestedOneWithoutIndividualInput | undefined;
}

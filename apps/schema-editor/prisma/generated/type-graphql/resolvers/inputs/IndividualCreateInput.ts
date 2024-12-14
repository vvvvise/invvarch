import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateNestedOneWithoutIndividualInput } from "../inputs/CareerCreateNestedOneWithoutIndividualInput";
import { ExpertiseListCreateNestedOneWithoutIndividualInput } from "../inputs/ExpertiseListCreateNestedOneWithoutIndividualInput";
import { UserCreateNestedOneWithoutIndividualInput } from "../inputs/UserCreateNestedOneWithoutIndividualInput";

@TypeGraphQL.InputType("IndividualCreateInput", {})
export class IndividualCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIndividualInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIndividualInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListCreateNestedOneWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  career?: CareerCreateNestedOneWithoutIndividualInput | undefined;
}

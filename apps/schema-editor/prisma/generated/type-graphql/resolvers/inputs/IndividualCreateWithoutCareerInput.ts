import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateNestedOneWithoutIndividualInput } from "../inputs/ExpertiseListCreateNestedOneWithoutIndividualInput";
import { UserCreateNestedOneWithoutIndividualInput } from "../inputs/UserCreateNestedOneWithoutIndividualInput";

@TypeGraphQL.InputType("IndividualCreateWithoutCareerInput", {})
export class IndividualCreateWithoutCareerInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIndividualInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIndividualInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListCreateNestedOneWithoutIndividualInput | undefined;
}

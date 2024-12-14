import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateWithoutIndividualInput } from "../inputs/ExpertiseListCreateWithoutIndividualInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListCreateOrConnectWithoutIndividualInput", {})
export class ExpertiseListCreateOrConnectWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutIndividualInput, {
    nullable: false
  })
  create!: ExpertiseListCreateWithoutIndividualInput;
}

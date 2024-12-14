import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateOrConnectWithoutIndividualInput } from "../inputs/ExpertiseListCreateOrConnectWithoutIndividualInput";
import { ExpertiseListCreateWithoutIndividualInput } from "../inputs/ExpertiseListCreateWithoutIndividualInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListCreateNestedOneWithoutIndividualInput", {})
export class ExpertiseListCreateNestedOneWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutIndividualInput, {
    nullable: true
  })
  create?: ExpertiseListCreateWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListCreateOrConnectWithoutIndividualInput, {
    nullable: true
  })
  connectOrCreate?: ExpertiseListCreateOrConnectWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: true
  })
  connect?: ExpertiseListWhereUniqueInput | undefined;
}

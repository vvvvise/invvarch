import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateWithoutIndividualInput } from "../inputs/ExpertiseListCreateWithoutIndividualInput";
import { ExpertiseListUpdateWithoutIndividualInput } from "../inputs/ExpertiseListUpdateWithoutIndividualInput";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";

@TypeGraphQL.InputType("ExpertiseListUpsertWithoutIndividualInput", {})
export class ExpertiseListUpsertWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseListUpdateWithoutIndividualInput, {
    nullable: false
  })
  update!: ExpertiseListUpdateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutIndividualInput, {
    nullable: false
  })
  create!: ExpertiseListCreateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;
}

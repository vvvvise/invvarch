import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListUpdateWithoutIndividualInput } from "../inputs/ExpertiseListUpdateWithoutIndividualInput";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";

@TypeGraphQL.InputType("ExpertiseListUpdateToOneWithWhereWithoutIndividualInput", {})
export class ExpertiseListUpdateToOneWithWhereWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateWithoutIndividualInput, {
    nullable: false
  })
  data!: ExpertiseListUpdateWithoutIndividualInput;
}

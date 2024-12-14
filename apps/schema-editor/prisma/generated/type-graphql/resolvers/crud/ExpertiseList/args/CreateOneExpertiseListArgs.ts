import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListCreateInput } from "../../../inputs/ExpertiseListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListCreateInput, {
    nullable: false
  })
  data!: ExpertiseListCreateInput;
}

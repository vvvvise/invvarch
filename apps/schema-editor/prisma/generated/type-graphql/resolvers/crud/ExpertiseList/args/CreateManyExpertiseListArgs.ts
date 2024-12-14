import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListCreateManyInput } from "../../../inputs/ExpertiseListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExpertiseListArgs {
  @TypeGraphQL.Field(_type => [ExpertiseListCreateManyInput], {
    nullable: false
  })
  data!: ExpertiseListCreateManyInput[];
}

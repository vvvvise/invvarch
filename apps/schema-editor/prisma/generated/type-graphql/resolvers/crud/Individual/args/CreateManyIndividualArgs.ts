import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualCreateManyInput } from "../../../inputs/IndividualCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIndividualArgs {
  @TypeGraphQL.Field(_type => [IndividualCreateManyInput], {
    nullable: false
  })
  data!: IndividualCreateManyInput[];
}
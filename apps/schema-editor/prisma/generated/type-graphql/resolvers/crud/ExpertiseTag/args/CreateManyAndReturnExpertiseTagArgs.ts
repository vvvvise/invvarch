import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagCreateManyInput } from "../../../inputs/ExpertiseTagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnExpertiseTagArgs {
  @TypeGraphQL.Field(_type => [ExpertiseTagCreateManyInput], {
    nullable: false
  })
  data!: ExpertiseTagCreateManyInput[];
}
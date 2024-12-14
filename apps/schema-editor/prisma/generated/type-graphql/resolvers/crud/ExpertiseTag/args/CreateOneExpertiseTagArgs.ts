import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagCreateInput } from "../../../inputs/ExpertiseTagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagCreateInput, {
    nullable: false
  })
  data!: ExpertiseTagCreateInput;
}

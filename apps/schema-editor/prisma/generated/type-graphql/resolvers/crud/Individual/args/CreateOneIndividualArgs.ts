import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualCreateInput } from "../../../inputs/IndividualCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualCreateInput, {
    nullable: false
  })
  data!: IndividualCreateInput;
}

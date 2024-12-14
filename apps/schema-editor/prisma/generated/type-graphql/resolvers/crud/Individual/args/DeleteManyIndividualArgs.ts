import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualWhereInput } from "../../../inputs/IndividualWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualWhereUniqueInput } from "../../../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIndividualOrThrowArgs {
  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;
}

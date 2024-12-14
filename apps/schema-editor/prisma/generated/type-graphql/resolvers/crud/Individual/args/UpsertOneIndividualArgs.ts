import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualCreateInput } from "../../../inputs/IndividualCreateInput";
import { IndividualUpdateInput } from "../../../inputs/IndividualUpdateInput";
import { IndividualWhereUniqueInput } from "../../../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;

  @TypeGraphQL.Field(_type => IndividualCreateInput, {
    nullable: false
  })
  create!: IndividualCreateInput;

  @TypeGraphQL.Field(_type => IndividualUpdateInput, {
    nullable: false
  })
  update!: IndividualUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualUpdateInput } from "../../../inputs/IndividualUpdateInput";
import { IndividualWhereUniqueInput } from "../../../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualUpdateInput, {
    nullable: false
  })
  data!: IndividualUpdateInput;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;
}

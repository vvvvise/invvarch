import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualUpdateManyMutationInput } from "../../../inputs/IndividualUpdateManyMutationInput";
import { IndividualWhereInput } from "../../../inputs/IndividualWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualUpdateManyMutationInput, {
    nullable: false
  })
  data!: IndividualUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;
}

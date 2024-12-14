import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListWhereInput } from "../../../inputs/ExpertiseListWhereInput";

@TypeGraphQL.ArgsType()
export class IndividualExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;
}

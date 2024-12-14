import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListWhereInput } from "../../inputs/ExpertiseListWhereInput";

@TypeGraphQL.ArgsType()
export class ExpertiseTagCountListsArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;
}

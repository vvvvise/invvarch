import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagWhereInput } from "../../inputs/ExpertiseTagWhereInput";

@TypeGraphQL.ArgsType()
export class ExpertiseListCountTagsArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  where?: ExpertiseTagWhereInput | undefined;
}

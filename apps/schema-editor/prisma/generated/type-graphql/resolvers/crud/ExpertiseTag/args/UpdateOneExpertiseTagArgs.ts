import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagUpdateInput } from "../../../inputs/ExpertiseTagUpdateInput";
import { ExpertiseTagWhereUniqueInput } from "../../../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagUpdateInput, {
    nullable: false
  })
  data!: ExpertiseTagUpdateInput;

  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;
}

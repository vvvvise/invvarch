import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListUpdateInput } from "../../../inputs/ExpertiseListUpdateInput";
import { ExpertiseListWhereUniqueInput } from "../../../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListUpdateInput, {
    nullable: false
  })
  data!: ExpertiseListUpdateInput;

  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;
}

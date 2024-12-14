import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListWhereUniqueInput } from "../../../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;
}

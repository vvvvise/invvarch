import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagWhereUniqueInput } from "../../../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;
}

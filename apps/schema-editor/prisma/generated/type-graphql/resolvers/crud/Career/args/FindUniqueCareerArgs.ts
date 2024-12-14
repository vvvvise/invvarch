import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerWhereUniqueInput } from "../../../inputs/CareerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCareerArgs {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;
}

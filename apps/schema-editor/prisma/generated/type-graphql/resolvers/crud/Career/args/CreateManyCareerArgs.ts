import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerCreateManyInput } from "../../../inputs/CareerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCareerArgs {
  @TypeGraphQL.Field(_type => [CareerCreateManyInput], {
    nullable: false
  })
  data!: CareerCreateManyInput[];
}

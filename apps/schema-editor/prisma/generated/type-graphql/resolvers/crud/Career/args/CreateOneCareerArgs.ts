import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerCreateInput } from "../../../inputs/CareerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCareerArgs {
  @TypeGraphQL.Field(_type => CareerCreateInput, {
    nullable: false
  })
  data!: CareerCreateInput;
}

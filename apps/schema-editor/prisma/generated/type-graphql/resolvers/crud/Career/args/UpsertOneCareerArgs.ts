import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerCreateInput } from "../../../inputs/CareerCreateInput";
import { CareerUpdateInput } from "../../../inputs/CareerUpdateInput";
import { CareerWhereUniqueInput } from "../../../inputs/CareerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCareerArgs {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareerCreateInput, {
    nullable: false
  })
  create!: CareerCreateInput;

  @TypeGraphQL.Field(_type => CareerUpdateInput, {
    nullable: false
  })
  update!: CareerUpdateInput;
}

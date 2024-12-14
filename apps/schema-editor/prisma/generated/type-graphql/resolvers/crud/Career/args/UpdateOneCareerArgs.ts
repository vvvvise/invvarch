import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerUpdateInput } from "../../../inputs/CareerUpdateInput";
import { CareerWhereUniqueInput } from "../../../inputs/CareerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCareerArgs {
  @TypeGraphQL.Field(_type => CareerUpdateInput, {
    nullable: false
  })
  data!: CareerUpdateInput;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerWhereInput } from "../../../inputs/CareerWhereInput";

@TypeGraphQL.ArgsType()
export class IndividualCareerArgs {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}

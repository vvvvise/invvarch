import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerUpdateManyMutationInput } from "../../../inputs/CareerUpdateManyMutationInput";
import { CareerWhereInput } from "../../../inputs/CareerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCareerArgs {
  @TypeGraphQL.Field(_type => CareerUpdateManyMutationInput, {
    nullable: false
  })
  data!: CareerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}

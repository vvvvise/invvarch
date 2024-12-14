import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagUpdateManyMutationInput } from "../../../inputs/ExpertiseTagUpdateManyMutationInput";
import { ExpertiseTagWhereInput } from "../../../inputs/ExpertiseTagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExpertiseTagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  where?: ExpertiseTagWhereInput | undefined;
}

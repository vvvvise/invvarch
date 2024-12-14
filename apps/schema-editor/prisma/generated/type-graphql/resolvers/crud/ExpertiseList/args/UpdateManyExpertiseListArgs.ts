import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListUpdateManyMutationInput } from "../../../inputs/ExpertiseListUpdateManyMutationInput";
import { ExpertiseListWhereInput } from "../../../inputs/ExpertiseListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExpertiseListUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;
}

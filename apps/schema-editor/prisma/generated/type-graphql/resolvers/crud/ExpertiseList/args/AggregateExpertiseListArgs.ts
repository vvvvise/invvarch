import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListOrderByWithRelationInput } from "../../../inputs/ExpertiseListOrderByWithRelationInput";
import { ExpertiseListWhereInput } from "../../../inputs/ExpertiseListWhereInput";
import { ExpertiseListWhereUniqueInput } from "../../../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExpertiseListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExpertiseListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

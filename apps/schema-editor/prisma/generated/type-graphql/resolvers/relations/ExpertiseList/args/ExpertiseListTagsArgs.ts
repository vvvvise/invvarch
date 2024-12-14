import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagOrderByWithRelationInput } from "../../../inputs/ExpertiseTagOrderByWithRelationInput";
import { ExpertiseTagWhereInput } from "../../../inputs/ExpertiseTagWhereInput";
import { ExpertiseTagWhereUniqueInput } from "../../../inputs/ExpertiseTagWhereUniqueInput";
import { ExpertiseTagScalarFieldEnum } from "../../../../enums/ExpertiseTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ExpertiseListTagsArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  where?: ExpertiseTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExpertiseTagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExpertiseTagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "expertise"> | undefined;
}

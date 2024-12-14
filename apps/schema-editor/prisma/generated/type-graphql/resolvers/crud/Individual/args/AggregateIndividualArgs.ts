import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualOrderByWithRelationInput } from "../../../inputs/IndividualOrderByWithRelationInput";
import { IndividualWhereInput } from "../../../inputs/IndividualWhereInput";
import { IndividualWhereUniqueInput } from "../../../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IndividualOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IndividualOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: true
  })
  cursor?: IndividualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerOrderByWithRelationInput } from "../../../inputs/CareerOrderByWithRelationInput";
import { CareerWhereInput } from "../../../inputs/CareerWhereInput";
import { CareerWhereUniqueInput } from "../../../inputs/CareerWhereUniqueInput";
import { CareerScalarFieldEnum } from "../../../../enums/CareerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCareerArgs {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CareerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CareerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CareerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CareerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "individualId"> | undefined;
}

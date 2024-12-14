import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Individual } from "../../models/Individual";

@TypeGraphQL.ObjectType("CreateManyAndReturnExpertiseList", {})
export class CreateManyAndReturnExpertiseList {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  individualId!: number;

  @TypeGraphQL.Field(_type => Individual, {
    nullable: false
  })
  individual!: Individual;
}

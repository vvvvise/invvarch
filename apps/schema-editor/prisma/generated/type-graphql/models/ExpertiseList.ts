import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExpertiseTag } from "../models/ExpertiseTag";
import { Individual } from "../models/Individual";
import { ExpertiseListCount } from "../resolvers/outputs/ExpertiseListCount";

@TypeGraphQL.ObjectType("ExpertiseList", {})
export class ExpertiseList {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  tags?: ExpertiseTag[];

  individual?: Individual;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  individualId!: number;

  @TypeGraphQL.Field(_type => ExpertiseListCount, {
    nullable: true
  })
  _count?: ExpertiseListCount | null;
}

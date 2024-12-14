import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExpertiseList } from "../models/ExpertiseList";
import { ExpertiseTagCount } from "../resolvers/outputs/ExpertiseTagCount";

@TypeGraphQL.ObjectType("ExpertiseTag", {})
export class ExpertiseTag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  expertise!: string;

  lists?: ExpertiseList[];

  @TypeGraphQL.Field(_type => ExpertiseTagCount, {
    nullable: true
  })
  _count?: ExpertiseTagCount | null;
}

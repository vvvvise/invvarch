import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagAvgAggregate } from "../outputs/ExpertiseTagAvgAggregate";
import { ExpertiseTagCountAggregate } from "../outputs/ExpertiseTagCountAggregate";
import { ExpertiseTagMaxAggregate } from "../outputs/ExpertiseTagMaxAggregate";
import { ExpertiseTagMinAggregate } from "../outputs/ExpertiseTagMinAggregate";
import { ExpertiseTagSumAggregate } from "../outputs/ExpertiseTagSumAggregate";

@TypeGraphQL.ObjectType("ExpertiseTagGroupBy", {})
export class ExpertiseTagGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  expertise!: string;

  @TypeGraphQL.Field(_type => ExpertiseTagCountAggregate, {
    nullable: true
  })
  _count!: ExpertiseTagCountAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseTagAvgAggregate, {
    nullable: true
  })
  _avg!: ExpertiseTagAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseTagSumAggregate, {
    nullable: true
  })
  _sum!: ExpertiseTagSumAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseTagMinAggregate, {
    nullable: true
  })
  _min!: ExpertiseTagMinAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseTagMaxAggregate, {
    nullable: true
  })
  _max!: ExpertiseTagMaxAggregate | null;
}

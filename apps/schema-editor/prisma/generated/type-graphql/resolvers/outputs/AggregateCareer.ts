import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerAvgAggregate } from "../outputs/CareerAvgAggregate";
import { CareerCountAggregate } from "../outputs/CareerCountAggregate";
import { CareerMaxAggregate } from "../outputs/CareerMaxAggregate";
import { CareerMinAggregate } from "../outputs/CareerMinAggregate";
import { CareerSumAggregate } from "../outputs/CareerSumAggregate";

@TypeGraphQL.ObjectType("AggregateCareer", {})
export class AggregateCareer {
  @TypeGraphQL.Field(_type => CareerCountAggregate, {
    nullable: true
  })
  _count!: CareerCountAggregate | null;

  @TypeGraphQL.Field(_type => CareerAvgAggregate, {
    nullable: true
  })
  _avg!: CareerAvgAggregate | null;

  @TypeGraphQL.Field(_type => CareerSumAggregate, {
    nullable: true
  })
  _sum!: CareerSumAggregate | null;

  @TypeGraphQL.Field(_type => CareerMinAggregate, {
    nullable: true
  })
  _min!: CareerMinAggregate | null;

  @TypeGraphQL.Field(_type => CareerMaxAggregate, {
    nullable: true
  })
  _max!: CareerMaxAggregate | null;
}

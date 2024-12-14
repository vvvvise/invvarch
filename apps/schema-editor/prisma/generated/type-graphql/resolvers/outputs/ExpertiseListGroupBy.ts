import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListAvgAggregate } from "../outputs/ExpertiseListAvgAggregate";
import { ExpertiseListCountAggregate } from "../outputs/ExpertiseListCountAggregate";
import { ExpertiseListMaxAggregate } from "../outputs/ExpertiseListMaxAggregate";
import { ExpertiseListMinAggregate } from "../outputs/ExpertiseListMinAggregate";
import { ExpertiseListSumAggregate } from "../outputs/ExpertiseListSumAggregate";

@TypeGraphQL.ObjectType("ExpertiseListGroupBy", {})
export class ExpertiseListGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  individualId!: number;

  @TypeGraphQL.Field(_type => ExpertiseListCountAggregate, {
    nullable: true
  })
  _count!: ExpertiseListCountAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseListAvgAggregate, {
    nullable: true
  })
  _avg!: ExpertiseListAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseListSumAggregate, {
    nullable: true
  })
  _sum!: ExpertiseListSumAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseListMinAggregate, {
    nullable: true
  })
  _min!: ExpertiseListMinAggregate | null;

  @TypeGraphQL.Field(_type => ExpertiseListMaxAggregate, {
    nullable: true
  })
  _max!: ExpertiseListMaxAggregate | null;
}

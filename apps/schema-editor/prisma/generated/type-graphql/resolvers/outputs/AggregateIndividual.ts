import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualAvgAggregate } from "../outputs/IndividualAvgAggregate";
import { IndividualCountAggregate } from "../outputs/IndividualCountAggregate";
import { IndividualMaxAggregate } from "../outputs/IndividualMaxAggregate";
import { IndividualMinAggregate } from "../outputs/IndividualMinAggregate";
import { IndividualSumAggregate } from "../outputs/IndividualSumAggregate";

@TypeGraphQL.ObjectType("AggregateIndividual", {})
export class AggregateIndividual {
  @TypeGraphQL.Field(_type => IndividualCountAggregate, {
    nullable: true
  })
  _count!: IndividualCountAggregate | null;

  @TypeGraphQL.Field(_type => IndividualAvgAggregate, {
    nullable: true
  })
  _avg!: IndividualAvgAggregate | null;

  @TypeGraphQL.Field(_type => IndividualSumAggregate, {
    nullable: true
  })
  _sum!: IndividualSumAggregate | null;

  @TypeGraphQL.Field(_type => IndividualMinAggregate, {
    nullable: true
  })
  _min!: IndividualMinAggregate | null;

  @TypeGraphQL.Field(_type => IndividualMaxAggregate, {
    nullable: true
  })
  _max!: IndividualMaxAggregate | null;
}

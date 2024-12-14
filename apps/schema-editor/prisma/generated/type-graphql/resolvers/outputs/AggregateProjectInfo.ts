import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoAvgAggregate } from "../outputs/ProjectInfoAvgAggregate";
import { ProjectInfoCountAggregate } from "../outputs/ProjectInfoCountAggregate";
import { ProjectInfoMaxAggregate } from "../outputs/ProjectInfoMaxAggregate";
import { ProjectInfoMinAggregate } from "../outputs/ProjectInfoMinAggregate";
import { ProjectInfoSumAggregate } from "../outputs/ProjectInfoSumAggregate";

@TypeGraphQL.ObjectType("AggregateProjectInfo", {})
export class AggregateProjectInfo {
  @TypeGraphQL.Field(_type => ProjectInfoCountAggregate, {
    nullable: true
  })
  _count!: ProjectInfoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectInfoAvgAggregate, {
    nullable: true
  })
  _avg!: ProjectInfoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProjectInfoSumAggregate, {
    nullable: true
  })
  _sum!: ProjectInfoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProjectInfoMinAggregate, {
    nullable: true
  })
  _min!: ProjectInfoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectInfoMaxAggregate, {
    nullable: true
  })
  _max!: ProjectInfoMaxAggregate | null;
}

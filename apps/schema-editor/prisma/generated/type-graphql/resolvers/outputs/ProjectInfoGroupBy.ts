import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoAvgAggregate } from "../outputs/ProjectInfoAvgAggregate";
import { ProjectInfoCountAggregate } from "../outputs/ProjectInfoCountAggregate";
import { ProjectInfoMaxAggregate } from "../outputs/ProjectInfoMaxAggregate";
import { ProjectInfoMinAggregate } from "../outputs/ProjectInfoMinAggregate";
import { ProjectInfoSumAggregate } from "../outputs/ProjectInfoSumAggregate";

@TypeGraphQL.ObjectType("ProjectInfoGroupBy", {})
export class ProjectInfoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  position!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  careerId!: number;

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

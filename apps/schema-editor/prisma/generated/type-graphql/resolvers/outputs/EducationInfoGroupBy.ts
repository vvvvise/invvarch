import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoAvgAggregate } from "../outputs/EducationInfoAvgAggregate";
import { EducationInfoCountAggregate } from "../outputs/EducationInfoCountAggregate";
import { EducationInfoMaxAggregate } from "../outputs/EducationInfoMaxAggregate";
import { EducationInfoMinAggregate } from "../outputs/EducationInfoMinAggregate";
import { EducationInfoSumAggregate } from "../outputs/EducationInfoSumAggregate";

@TypeGraphQL.ObjectType("EducationInfoGroupBy", {})
export class EducationInfoGroupBy {
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
  schoolName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  undergraduate!: string;

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
  summary!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  careerId!: number;

  @TypeGraphQL.Field(_type => EducationInfoCountAggregate, {
    nullable: true
  })
  _count!: EducationInfoCountAggregate | null;

  @TypeGraphQL.Field(_type => EducationInfoAvgAggregate, {
    nullable: true
  })
  _avg!: EducationInfoAvgAggregate | null;

  @TypeGraphQL.Field(_type => EducationInfoSumAggregate, {
    nullable: true
  })
  _sum!: EducationInfoSumAggregate | null;

  @TypeGraphQL.Field(_type => EducationInfoMinAggregate, {
    nullable: true
  })
  _min!: EducationInfoMinAggregate | null;

  @TypeGraphQL.Field(_type => EducationInfoMaxAggregate, {
    nullable: true
  })
  _max!: EducationInfoMaxAggregate | null;
}

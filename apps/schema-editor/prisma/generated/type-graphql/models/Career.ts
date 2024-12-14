import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EducationInfo } from "../models/EducationInfo";
import { Individual } from "../models/Individual";
import { ProjectInfo } from "../models/ProjectInfo";
import { User } from "../models/User";
import { CareerCount } from "../resolvers/outputs/CareerCount";

@TypeGraphQL.ObjectType("Career", {})
export class Career {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  educationInfo?: EducationInfo[];

  projectInfo?: ProjectInfo[];

  individual?: Individual;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  individualId!: number;

  @TypeGraphQL.Field(_type => CareerCount, {
    nullable: true
  })
  _count?: CareerCount | null;
}

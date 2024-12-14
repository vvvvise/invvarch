import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCountEducationInfoArgs } from "./args/CareerCountEducationInfoArgs";
import { CareerCountProjectInfoArgs } from "./args/CareerCountProjectInfoArgs";

@TypeGraphQL.ObjectType("CareerCount", {})
export class CareerCount {
  educationInfo!: number;
  projectInfo!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "educationInfo",
    nullable: false
  })
  getEducationInfo(@TypeGraphQL.Root() root: CareerCount, @TypeGraphQL.Args() args: CareerCountEducationInfoArgs): number {
    return root.educationInfo;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "projectInfo",
    nullable: false
  })
  getProjectInfo(@TypeGraphQL.Root() root: CareerCount, @TypeGraphQL.Args() args: CareerCountProjectInfoArgs): number {
    return root.projectInfo;
  }
}

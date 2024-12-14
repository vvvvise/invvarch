import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEducationInfoArgs } from "./args/AggregateEducationInfoArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { AggregateEducationInfo } from "../../outputs/AggregateEducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class AggregateEducationInfoResolver {
  @TypeGraphQL.Query(_returns => AggregateEducationInfo, {
    nullable: false
  })
  async aggregateEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEducationInfoArgs): Promise<AggregateEducationInfo> {
    return getPrismaFromContext(ctx).educationInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

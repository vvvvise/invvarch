import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectInfoArgs } from "./args/AggregateProjectInfoArgs";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { AggregateProjectInfo } from "../../outputs/AggregateProjectInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectInfo)
export class AggregateProjectInfoResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectInfo, {
    nullable: false
  })
  async aggregateProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectInfoArgs): Promise<AggregateProjectInfo> {
    return getPrismaFromContext(ctx).projectInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

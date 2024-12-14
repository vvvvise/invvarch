import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByProjectInfoArgs } from "./args/GroupByProjectInfoArgs";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { ProjectInfoGroupBy } from "../../outputs/ProjectInfoGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectInfo)
export class GroupByProjectInfoResolver {
  @TypeGraphQL.Query(_returns => [ProjectInfoGroupBy], {
    nullable: false
  })
  async groupByProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectInfoArgs): Promise<ProjectInfoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByExpertiseTagArgs } from "./args/GroupByExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { ExpertiseTagGroupBy } from "../../outputs/ExpertiseTagGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class GroupByExpertiseTagResolver {
  @TypeGraphQL.Query(_returns => [ExpertiseTagGroupBy], {
    nullable: false
  })
  async groupByExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExpertiseTagArgs): Promise<ExpertiseTagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

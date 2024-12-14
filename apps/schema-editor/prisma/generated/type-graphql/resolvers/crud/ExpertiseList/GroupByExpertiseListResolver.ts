import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByExpertiseListArgs } from "./args/GroupByExpertiseListArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { ExpertiseListGroupBy } from "../../outputs/ExpertiseListGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class GroupByExpertiseListResolver {
  @TypeGraphQL.Query(_returns => [ExpertiseListGroupBy], {
    nullable: false
  })
  async groupByExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExpertiseListArgs): Promise<ExpertiseListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

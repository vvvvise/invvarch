import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIndividualArgs } from "./args/GroupByIndividualArgs";
import { Individual } from "../../../models/Individual";
import { IndividualGroupBy } from "../../outputs/IndividualGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class GroupByIndividualResolver {
  @TypeGraphQL.Query(_returns => [IndividualGroupBy], {
    nullable: false
  })
  async groupByIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIndividualArgs): Promise<IndividualGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

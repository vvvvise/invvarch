import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExpertiseListArgs } from "./args/AggregateExpertiseListArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { AggregateExpertiseList } from "../../outputs/AggregateExpertiseList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class AggregateExpertiseListResolver {
  @TypeGraphQL.Query(_returns => AggregateExpertiseList, {
    nullable: false
  })
  async aggregateExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExpertiseListArgs): Promise<AggregateExpertiseList> {
    return getPrismaFromContext(ctx).expertiseList.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

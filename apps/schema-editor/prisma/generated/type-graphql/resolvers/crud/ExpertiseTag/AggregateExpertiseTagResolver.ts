import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExpertiseTagArgs } from "./args/AggregateExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { AggregateExpertiseTag } from "../../outputs/AggregateExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class AggregateExpertiseTagResolver {
  @TypeGraphQL.Query(_returns => AggregateExpertiseTag, {
    nullable: false
  })
  async aggregateExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExpertiseTagArgs): Promise<AggregateExpertiseTag> {
    return getPrismaFromContext(ctx).expertiseTag.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCareerArgs } from "./args/AggregateCareerArgs";
import { Career } from "../../../models/Career";
import { AggregateCareer } from "../../outputs/AggregateCareer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Career)
export class AggregateCareerResolver {
  @TypeGraphQL.Query(_returns => AggregateCareer, {
    nullable: false
  })
  async aggregateCareer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCareerArgs): Promise<AggregateCareer> {
    return getPrismaFromContext(ctx).career.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

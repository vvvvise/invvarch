import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyExpertiseTagArgs } from "./args/FindManyExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class FindManyExpertiseTagResolver {
  @TypeGraphQL.Query(_returns => [ExpertiseTag], {
    nullable: false
  })
  async expertiseTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExpertiseTagArgs): Promise<ExpertiseTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

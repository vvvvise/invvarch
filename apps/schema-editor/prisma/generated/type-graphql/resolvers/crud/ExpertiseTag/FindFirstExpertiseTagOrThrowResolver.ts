import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExpertiseTagOrThrowArgs } from "./args/FindFirstExpertiseTagOrThrowArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class FindFirstExpertiseTagOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExpertiseTag, {
    nullable: true
  })
  async findFirstExpertiseTagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExpertiseTagOrThrowArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

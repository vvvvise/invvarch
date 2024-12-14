import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneExpertiseTagArgs } from "./args/UpdateOneExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class UpdateOneExpertiseTagResolver {
  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: true
  })
  async updateOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

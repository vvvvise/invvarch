import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExpertiseTagArgs } from "./args/DeleteOneExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class DeleteOneExpertiseTagResolver {
  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: true
  })
  async deleteOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

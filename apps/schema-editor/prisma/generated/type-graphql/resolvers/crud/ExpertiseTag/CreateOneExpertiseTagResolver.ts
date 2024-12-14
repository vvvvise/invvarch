import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneExpertiseTagArgs } from "./args/CreateOneExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class CreateOneExpertiseTagResolver {
  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: false
  })
  async createOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExpertiseTagArgs): Promise<ExpertiseTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

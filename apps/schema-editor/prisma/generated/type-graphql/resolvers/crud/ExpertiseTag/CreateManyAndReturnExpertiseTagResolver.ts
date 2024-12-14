import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnExpertiseTagArgs } from "./args/CreateManyAndReturnExpertiseTagArgs";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { CreateManyAndReturnExpertiseTag } from "../../outputs/CreateManyAndReturnExpertiseTag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class CreateManyAndReturnExpertiseTagResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnExpertiseTag], {
    nullable: false
  })
  async createManyAndReturnExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnExpertiseTagArgs): Promise<CreateManyAndReturnExpertiseTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

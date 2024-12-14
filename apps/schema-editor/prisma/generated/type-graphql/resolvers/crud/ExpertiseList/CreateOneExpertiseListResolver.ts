import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneExpertiseListArgs } from "./args/CreateOneExpertiseListArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class CreateOneExpertiseListResolver {
  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: false
  })
  async createOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExpertiseListArgs): Promise<ExpertiseList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

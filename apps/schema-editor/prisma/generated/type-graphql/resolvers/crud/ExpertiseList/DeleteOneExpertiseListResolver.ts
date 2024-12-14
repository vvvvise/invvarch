import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExpertiseListArgs } from "./args/DeleteOneExpertiseListArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class DeleteOneExpertiseListResolver {
  @TypeGraphQL.Mutation(_returns => ExpertiseList, {
    nullable: true
  })
  async deleteOneExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExpertiseListArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

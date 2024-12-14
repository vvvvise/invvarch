import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnExpertiseListArgs } from "./args/CreateManyAndReturnExpertiseListArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { CreateManyAndReturnExpertiseList } from "../../outputs/CreateManyAndReturnExpertiseList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class CreateManyAndReturnExpertiseListResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnExpertiseList], {
    nullable: false
  })
  async createManyAndReturnExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnExpertiseListArgs): Promise<CreateManyAndReturnExpertiseList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

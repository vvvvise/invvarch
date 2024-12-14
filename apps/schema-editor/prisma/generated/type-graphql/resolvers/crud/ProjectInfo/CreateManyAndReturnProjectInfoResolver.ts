import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnProjectInfoArgs } from "./args/CreateManyAndReturnProjectInfoArgs";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { CreateManyAndReturnProjectInfo } from "../../outputs/CreateManyAndReturnProjectInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectInfo)
export class CreateManyAndReturnProjectInfoResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProjectInfo], {
    nullable: false
  })
  async createManyAndReturnProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnProjectInfoArgs): Promise<CreateManyAndReturnProjectInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

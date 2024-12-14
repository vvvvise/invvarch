import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCareerArgs } from "./args/CreateManyAndReturnCareerArgs";
import { Career } from "../../../models/Career";
import { CreateManyAndReturnCareer } from "../../outputs/CreateManyAndReturnCareer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Career)
export class CreateManyAndReturnCareerResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCareer], {
    nullable: false
  })
  async createManyAndReturnCareer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCareerArgs): Promise<CreateManyAndReturnCareer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).career.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
